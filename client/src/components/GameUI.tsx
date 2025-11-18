import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GameEngine, { GameState } from "@/lib/gameEngine";
import { useLocation } from "wouter";
import GameScene from "./GameScene";

interface GameUIProps {
  engine: GameEngine;
}

export default function GameUI({ engine }: GameUIProps) {
  const [, setLocation] = useLocation();
  const [gameState, setGameState] = useState<GameState>(engine.getState());
  const [currentScene, setCurrentScene] = useState<string>("day1_opening");
  const [showMetrics, setShowMetrics] = useState(false);

  const handleChoice = (effects: any, nextScene: string) => {
    engine.applyEffects(effects);
    setGameState(engine.getState());
    setCurrentScene(nextScene);
  };

  const handleQuit = () => {
    if (
      confirm(
        "Tem certeza que deseja sair do jogo? Seu progresso não será salvo."
      )
    ) {
      setLocation("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <Button
                onClick={handleQuit}
                variant="ghost"
                className="text-slate-300 hover:text-white"
              >
                ← Sair
              </Button>
              <h1 className="text-2xl font-bold text-white">
                {gameState.character.name} • Vale Verde
              </h1>
            </div>
            <Button
              onClick={() => setShowMetrics(!showMetrics)}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              {showMetrics ? "Ocultar" : "Mostrar"} Medidores
            </Button>
          </div>

          {/* Metrics Bar */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-xs">
            <MetricBar
              label="Dinheiro"
              value={gameState.metrics.money}
              max={999}
              color="green"
            />
            <MetricBar
              label="Fome"
              value={gameState.metrics.hunger}
              max={100}
              color="orange"
            />
            <MetricBar
              label="Higiene"
              value={gameState.metrics.hygiene}
              max={100}
              color="blue"
            />
            <MetricBar
              label="Excitação"
              value={gameState.metrics.excitement}
              max={100}
              color="red"
            />
            <MetricBar
              label="Reputação"
              value={gameState.metrics.reputation}
              max={100}
              color="purple"
            />
            <MetricBar
              label="Energia"
              value={gameState.metrics.energy}
              max={100}
              color="yellow"
            />
          </div>

          {/* Time and Location */}
          <div className="mt-4 flex justify-between text-sm text-slate-400">
            <span>
              Dia {gameState.currentDay} • {getPeriodName(gameState.currentPeriod)}
            </span>
            <span className="capitalize">{gameState.currentLocation}</span>
          </div>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GameScene
          sceneId={currentScene}
          gameState={gameState}
          engine={engine}
          onChoice={handleChoice}
        />
      </div>

      {/* Detailed Metrics Panel */}
      {showMetrics && (
        <div className="fixed bottom-4 right-4 bg-slate-900/95 border border-slate-700 rounded-lg p-6 max-w-sm">
          <h3 className="text-white font-bold mb-4">Medidores Detalhados</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-300">Dinheiro:</span>
              <span className="text-green-400 font-semibold">
                R$ {gameState.metrics.money}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300">Fome:</span>
              <span className="text-orange-400 font-semibold">
                {gameState.metrics.hunger}/100
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300">Higiene:</span>
              <span className="text-blue-400 font-semibold">
                {gameState.metrics.hygiene}/100
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300">Excitação:</span>
              <span className="text-red-400 font-semibold">
                {gameState.metrics.excitement}/100
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300">Reputação:</span>
              <span className="text-purple-400 font-semibold">
                {gameState.metrics.reputation}/100
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300">Energia:</span>
              <span className="text-yellow-400 font-semibold">
                {gameState.metrics.energy}/100
              </span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-700">
            <h4 className="text-white font-bold mb-3">Reputação com NPCs</h4>
            <div className="space-y-2 text-sm">
              {Object.entries(gameState.npcReputation).map(([npc, rep]) => (
                <div key={npc} className="flex justify-between">
                  <span className="text-slate-400 capitalize">
                    {npc.replace("_", " ")}:
                  </span>
                  <span
                    className={
                      rep > 0
                        ? "text-green-400"
                        : rep < 0
                          ? "text-red-400"
                          : "text-slate-400"
                    }
                  >
                    {rep > 0 ? "+" : ""}{rep}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MetricBar({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
}) {
  const percentage = (value / max) * 100;
  const colorClasses = {
    green: "bg-green-500",
    orange: "bg-orange-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className="space-y-1">
      <div className="text-slate-300">{label}</div>
      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full ${colorClasses[color as keyof typeof colorClasses]} transition-all`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
      <div className="text-slate-500 text-xs">
        {value}/{max}
      </div>
    </div>
  );
}

function getPeriodName(period: string): string {
  const names: Record<string, string> = {
    morning: "Manhã",
    afternoon: "Tarde",
    night: "Noite",
  };
  return names[period] || period;
}
