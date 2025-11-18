export interface GameMetrics {
  money: number;
  hunger: number;
  hygiene: number;
  excitement: number;
  reputation: number;
  energy: number;
}

export interface GameState {
  character: {
    name: string;
    gender: "male" | "female";
    archetype: string;
  };
  metrics: GameMetrics;
  currentDay: number;
  currentPeriod: "morning" | "afternoon" | "night";
  currentLocation: string;
  inventory: string[];
  npcReputation: Record<string, number>;
  gameEvents: string[];
  storyChoices: Record<string, string>;
}

export interface SceneChoice {
  text: string;
  effects: Partial<GameMetrics>;
  nextScene: string;
  condition?: (state: GameState) => boolean;
}

export interface Scene {
  id: string;
  title: string;
  narrative: string;
  choices: SceneChoice[];
  onEnter?: (state: GameState) => void;
  onExit?: (state: GameState) => void;
}

const ARCHETYPE_EFFECTS: Record<string, Partial<GameMetrics>> = {
  nerd: { reputation: 10, excitement: -5, hygiene: 5, money: 0, hunger: 0, energy: 0 },
  bold: { excitement: 10, reputation: -5, money: 5, hygiene: 0, hunger: 0, energy: 0 },
  shy: { hygiene: 10, money: -5, excitement: -5, reputation: 0, hunger: 0, energy: 0 },
  exhibitionist: { reputation: 10, excitement: 5, hygiene: -5, money: 0, hunger: 0, energy: 0 },
  voyeur: { excitement: 10, reputation: 5, money: -5, hygiene: 0, hunger: 0, energy: 0 },
};

class GameEngine {
  private state: GameState;

  constructor(character: {
    name: string;
    gender: "male" | "female";
    archetype: string;
  }) {
    const archetypeEffect =
      ARCHETYPE_EFFECTS[character.archetype] || {};

    this.state = {
      character,
      metrics: {
        money: 50 + ((archetypeEffect.money as number) || 0),
        hunger: 50 + ((archetypeEffect.hunger as number) || 0),
        hygiene: 70 + ((archetypeEffect.hygiene as number) || 0),
        excitement: 20 + ((archetypeEffect.excitement as number) || 0),
        reputation: 30 + ((archetypeEffect.reputation as number) || 0),
        energy: 80 + ((archetypeEffect.energy as number) || 0),
      },
      currentDay: 1,
      currentPeriod: "afternoon",
      currentLocation: "kitnet",
      inventory: ["roupa_casual", "roupa_esportiva", "roupa_social"],
      npcReputation: {
        sofia: 0,
        marcus: 0,
        joao_adult: 0,
        ana: 0,
        clara: 0,
        joao_teen: 0,
      },
      gameEvents: [],
      storyChoices: {},
    };

    // Clamp metrics to 0-100
    this.clampMetrics();
  }

  private clampMetrics() {
    const metrics = this.state.metrics;
    metrics.money = Math.max(0, Math.min(999, metrics.money));
    metrics.hunger = Math.max(0, Math.min(100, metrics.hunger));
    metrics.hygiene = Math.max(0, Math.min(100, metrics.hygiene));
    metrics.excitement = Math.max(0, Math.min(100, metrics.excitement));
    metrics.reputation = Math.max(0, Math.min(100, metrics.reputation));
    metrics.energy = Math.max(0, Math.min(100, metrics.energy));
  }

  getState(): GameState {
    return { ...this.state };
  }

  applyEffects(effects: Partial<GameMetrics>) {
    Object.entries(effects).forEach(([key, value]) => {
      if (key in this.state.metrics && typeof value === "number") {
        this.state.metrics[key as keyof GameMetrics] += value;
      }
    });
    this.clampMetrics();
  }

  advanceTime(periods: number = 1) {
    const periods_order: Array<"morning" | "afternoon" | "night"> = [
      "morning",
      "afternoon",
      "night",
    ];
    const currentIndex = periods_order.indexOf(this.state.currentPeriod);
    const newIndex = (currentIndex + periods) % 3;
    const newPeriod = periods_order[newIndex];

    if (newIndex < currentIndex) {
      this.state.currentDay++;
    }

    this.state.currentPeriod = newPeriod;
  }

  moveToLocation(location: string) {
    this.state.currentLocation = location;
    this.advanceTime(0.5); // Moving between locations advances 0.5 period
  }

  sleep() {
    this.state.currentDay++;
    this.state.currentPeriod = "morning";
    this.state.metrics.energy = Math.min(100, this.state.metrics.energy + 30);
    this.state.metrics.hunger -= 10;
    this.clampMetrics();
  }

  updateNPCReputation(npc: string, change: number) {
    if (npc in this.state.npcReputation) {
      this.state.npcReputation[npc] += change;
      this.state.npcReputation[npc] = Math.max(
        -100,
        Math.min(100, this.state.npcReputation[npc])
      );
    }
  }

  recordChoice(choiceKey: string, choiceValue: string) {
    this.state.storyChoices[choiceKey] = choiceValue;
  }

  recordEvent(event: string) {
    this.state.gameEvents.push(event);
  }

  addToInventory(item: string) {
    if (this.state.inventory.length < 8) {
      this.state.inventory.push(item);
      return true;
    }
    return false;
  }

  removeFromInventory(item: string) {
    const index = this.state.inventory.indexOf(item);
    if (index > -1) {
      this.state.inventory.splice(index, 1);
      return true;
    }
    return false;
  }

  // Utility methods for game logic
  canAfford(cost: number): boolean {
    return this.state.metrics.money >= cost;
  }

  isHungry(): boolean {
    return this.state.metrics.hunger < 30;
  }

  isTired(): boolean {
    return this.state.metrics.energy < 30;
  }

  isDirty(): boolean {
    return this.state.metrics.hygiene < 40;
  }

  getCharacterPronoun(): string {
    return this.state.character.gender === "male" ? "ele" : "ela";
  }

  getCharacterPronounCapital(): string {
    return this.state.character.gender === "male" ? "Ele" : "Ela";
  }

  getCharacterArticle(): string {
    return this.state.character.gender === "male" ? "o" : "a";
  }

  getCharacterAdjective(adjective: string): string {
    if (this.state.character.gender === "male") {
      return adjective;
    }
    // Simple feminine conversion (not perfect but works for most cases)
    if (adjective.endsWith("o")) {
      return adjective.slice(0, -1) + "a";
    }
    return adjective;
  }
}

export default GameEngine;
