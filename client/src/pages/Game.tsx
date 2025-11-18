import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import GameEngine from "@/lib/gameEngine";
import GameUI from "@/components/GameUI";

type GameState = "character-creation" | "playing" | "loading";

interface CharacterData {
  name: string;
  gender: "male" | "female";
  archetype: "nerd" | "bold" | "shy" | "exhibitionist" | "voyeur";
}

const ARCHETYPES = {
  nerd: {
    name: "Nerd",
    description: "Inteligente, analítico, reservado",
    effects: { reputation: 10, excitement: -5, hygiene: 5 },
  },
  bold: {
    name: "Ousado",
    description: "Confiante, provoca, toma iniciativa",
    effects: { excitement: 10, reputation: -5, money: 5 },
  },
  shy: {
    name: "Tímido",
    description: "Introvertido, sensível, observador",
    effects: { hygiene: 10, money: -5, excitement: -5 },
  },
  exhibitionist: {
    name: "Exibicionista",
    description: "Gosta de atenção e provocações",
    effects: { reputation: 10, excitement: 5, hygiene: -5 },
  },
  voyeur: {
    name: "Voyeur",
    description: "Observador, curioso, tensões internas",
    effects: { excitement: 10, reputation: 5, money: -5 },
  },
};

export default function Game() {
  const [, setLocation] = useLocation();
  const [gameState, setGameState] = useState<GameState>("character-creation");
  const [character, setCharacter] = useState<CharacterData>({
    name: "",
    gender: "male",
    archetype: "nerd",
  });
  const [selectedArchetype, setSelectedArchetype] = useState<string>("nerd");
  const [gameEngine, setGameEngine] = useState<GameEngine | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter({ ...character, name: e.target.value });
  };

  const handleGenderChange = (gender: "male" | "female") => {
    setCharacter({ ...character, gender });
  };

  const handleArchetypeSelect = (archetype: string) => {
    setSelectedArchetype(archetype);
    setCharacter({
      ...character,
      archetype: archetype as CharacterData["archetype"],
    });
  };

  const handleStartGame = () => {
    if (!character.name.trim()) {
      alert("Por favor, digite um nome para seu personagem");
      return;
    }

    setGameState("loading");

    // Initialize game engine
    const engine = new GameEngine(character);
    setGameEngine(engine);

    // Small delay to simulate loading
    setTimeout(() => {
      setGameState("playing");
    }, 500);
  };

  if (gameState === "playing" && gameEngine) {
    return <GameUI engine={gameEngine} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Button
            onClick={() => setLocation("/")}
            variant="ghost"
            className="text-slate-300 hover:text-white"
          >
            ← Voltar
          </Button>
          <h1 className="text-2xl font-bold text-white">Criar Personagem</h1>
          <div className="w-20"></div>
        </div>
      </div>

      {/* Character Creation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel */}
          <div className="space-y-6">
            {/* Name Input */}
            <Card className="bg-slate-800/50 border-slate-700/50 p-6">
              <label className="block text-white font-semibold mb-3">
                Nome do Personagem
              </label>
              <Input
                type="text"
                placeholder="Digite seu nome..."
                value={character.name}
                onChange={handleNameChange}
                className="bg-slate-900 border-slate-600 text-white placeholder-slate-500"
              />
              <p className="text-slate-400 text-sm mt-2">
                Seu nome será usado em toda a narrativa do jogo.
              </p>
            </Card>

            {/* Gender Selection */}
            <Card className="bg-slate-800/50 border-slate-700/50 p-6">
              <label className="block text-white font-semibold mb-4">
                Gênero
              </label>
              <div className="space-y-3">
                <button
                  onClick={() => handleGenderChange("male")}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    character.gender === "male"
                      ? "border-amber-500 bg-amber-500/10"
                      : "border-slate-600 bg-slate-900/50 hover:border-slate-500"
                  }`}
                >
                  <div className="text-2xl mb-2">👨</div>
                  <div className="text-white font-semibold">Masculino</div>
                  <p className="text-slate-400 text-sm">
                    Interações narrativas específicas para personagem masculino
                  </p>
                </button>
                <button
                  onClick={() => handleGenderChange("female")}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    character.gender === "female"
                      ? "border-amber-500 bg-amber-500/10"
                      : "border-slate-600 bg-slate-900/50 hover:border-slate-500"
                  }`}
                >
                  <div className="text-2xl mb-2">👩</div>
                  <div className="text-white font-semibold">Feminino</div>
                  <p className="text-slate-400 text-sm">
                    Interações narrativas específicas para personagem feminino
                  </p>
                </button>
              </div>
            </Card>
          </div>

          {/* Right Panel - Archetypes */}
          <div>
            <Card className="bg-slate-800/50 border-slate-700/50 p-6">
              <label className="block text-white font-semibold mb-4">
                Arquétipo de Alma
              </label>
              <p className="text-slate-400 text-sm mb-4">
                Escolha um arquétipo que define seu estilo de jogo e afeta seus
                medidores iniciais.
              </p>
              <div className="space-y-3">
                {Object.entries(ARCHETYPES).map(([key, archetype]) => (
                  <button
                    key={key}
                    onClick={() => handleArchetypeSelect(key)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      selectedArchetype === key
                        ? "border-amber-500 bg-amber-500/10"
                        : "border-slate-600 bg-slate-900/50 hover:border-slate-500"
                    }`}
                  >
                    <div className="text-white font-semibold">
                      {archetype.name}
                    </div>
                    <p className="text-slate-400 text-sm">
                      {archetype.description}
                    </p>
                    <div className="text-xs text-slate-500 mt-2 space-y-1">
                      {Object.entries(archetype.effects).map(([stat, value]) => (
                        <div key={stat} className="flex justify-between">
                          <span className="capitalize">{stat}:</span>
                          <span
                            className={
                              value > 0 ? "text-green-400" : "text-red-400"
                            }
                          >
                            {value > 0 ? "+" : ""}{value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Start Button */}
        <div className="mt-8 flex gap-4">
          <Button
            onClick={() => setLocation("/")}
            variant="outline"
            className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleStartGame}
            disabled={!character.name.trim()}
            className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold disabled:opacity-50"
          >
            {gameState === "loading" ? "Iniciando..." : "Começar Jogo"}
          </Button>
        </div>

        {/* Info Box */}
        <Card className="mt-8 bg-slate-800/50 border-slate-700/50 p-6">
          <h3 className="text-white font-semibold mb-3">💡 Dica</h3>
          <p className="text-slate-300">
            Seu nome e gênero afetarão como os personagens interagem com você.
            O arquétipo escolhido afeta seus medidores iniciais e seu estilo de
            jogo. Não há escolha "correta" – cada caminho oferece uma
            experiência única!
          </p>
        </Card>
      </div>
    </div>
  );
}
