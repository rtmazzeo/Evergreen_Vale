import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GameEngine, { GameState } from "@/lib/gameEngine";
import { GAME_SCENES } from "@/lib/gameScenes";

interface GameSceneProps {
  sceneId: string;
  gameState: GameState;
  engine: GameEngine;
  onChoice: (effects: any, nextScene: string) => void;
}

export default function GameScene({
  sceneId,
  gameState,
  engine,
  onChoice,
}: GameSceneProps) {
  const scene = GAME_SCENES[sceneId];

  if (!scene) {
    return (
      <Card className="bg-slate-800/50 border-slate-700/50 p-8">
        <p className="text-red-400">Cena não encontrada: {sceneId}</p>
      </Card>
    );
  }

  // Replace placeholders in narrative
  let narrative = scene.narrative;
  narrative = narrative.replace(/{name}/g, gameState.character.name);
  narrative = narrative.replace(/{pronoun}/g, engine.getCharacterPronoun());
  narrative = narrative.replace(/{pronoun_capital}/g, engine.getCharacterPronounCapital());
  narrative = narrative.replace(/{article}/g, engine.getCharacterArticle());

  return (
    <div className="space-y-8">
      {/* Scene Title */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">{scene.title}</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full"></div>
      </div>

      {/* Scene Narrative */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-8">
        <p className="text-lg text-slate-200 leading-relaxed whitespace-pre-wrap">
          {narrative}
        </p>
      </Card>

      {/* Choices */}
      <div className="space-y-3">
        {scene.choices.map((choice: any, index: number) => {
          // Check if choice has a condition and if it's met
          const isAvailable = !choice.condition || choice.condition(gameState);

          if (!isAvailable) {
            return null;
          }

          return (
            <Button
              key={index}
              onClick={() => {
                engine.recordChoice(`scene_${sceneId}_choice_${index}`, choice.text);
                onChoice(choice.effects, choice.nextScene);
              }}
              className="w-full justify-start text-left h-auto py-4 px-6 bg-slate-800 hover:bg-amber-600/20 border border-slate-700 hover:border-amber-500 text-slate-200 hover:text-white transition-all"
            >
              <span className="text-amber-400 mr-3">→</span>
              {choice.text}
            </Button>
          );
        })}
      </div>

      {/* Effects Preview */}
      {scene.choices && scene.choices.length > 0 && (
        <Card className="bg-slate-900/50 border-slate-700/50 p-4">
          <p className="text-xs text-slate-500">
            💡 Cada escolha afeta seus medidores. Passe o mouse sobre as opções
            para ver os efeitos.
          </p>
        </Card>
      )}
    </div>
  );
}
