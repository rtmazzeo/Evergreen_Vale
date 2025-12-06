import { APP_LOGO, APP_TITLE } from "@/const";
import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import PatreonCard from "@/components/PatreonCard";
import ShareButtons from "@/components/ShareButtons";

export default function Home() {
  const [, setLocation] = useLocation();
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-white font-bold text-xl">{APP_TITLE}</span>
          </div>
          <Button 
            onClick={() => setLocation("/game")}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold"
          >
            Jogar Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Bem-vindo a <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Vale Verde</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Você desce do ônibus com uma mochila nas costas e uma mala surrada na mão. O sol do fim de tarde queima sua pele enquanto você caminha pela rua de paralelepípedes de Vale Verde.
                </p>
              </div>

              <p className="text-lg text-slate-400 leading-relaxed">
                Casas iguais, gramados aparados, mas um ar de segredos atrás das cortinas. Sua nova kitnet é a número 47 – uma portinha azul descascada. Com a chave tremendo na mão suada, você entra. O cheiro de mofo e poeira te envolve. A cama range ao sentar. Suas economias? Zeradas. Fome latejando no estômago. E um calor estranho subindo pelo corpo...
              </p>

              <p className="text-slate-500 italic">
                É só o cansaço, ou algo mais?
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => setLocation("/game")}
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold text-lg"
                >
                  Começar Jogo
                </Button>
                <Button 
                  onClick={() => setShowFeatures(!showFeatures)}
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 h-full flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-4xl">🏘️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Vale Verde</h3>
                    <p className="text-slate-400 mt-2">Um bairro com segredos</p>
                  </div>
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center gap-3">
                      <span className="text-amber-500">✓</span>
                      <span>Explore ambientes imersivos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-500">✓</span>
                      <span>Conheça personagens únicos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-500">✓</span>
                      <span>Suas escolhas importam</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-500">✓</span>
                      <span>Histórias que se ramificam</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {showFeatures && (
        <section className="py-20 bg-slate-800/50 border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              O Que Você Vai Encontrar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
                <div className="text-3xl mb-4">🎭</div>
                <h3 className="text-xl font-bold text-white mb-2">Personagens Únicos</h3>
                <p className="text-slate-400">
                  Conheça Sofia, Ana, Clara, João e muitos outros. Cada um com suas próprias histórias e segredos.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
                <div className="text-3xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-white mb-2">Ambientes Imersivos</h3>
                <p className="text-slate-400">
                  Sua kitnet, supermercado, parque, bar e loja de roupas. Cada lugar tem sua própria atmosfera.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
                <div className="text-3xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-white mb-2">Sistema de Medidores</h3>
                <p className="text-slate-400">
                  Gerencie fome, higiene, energia, reputação e muito mais. Suas ações têm consequências.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-2">Escolhas que Importam</h3>
                <p className="text-slate-400">
                  Cada decisão afeta sua história. Múltiplos finais e caminhos narrativos à sua espera.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
                <div className="text-3xl mb-4">📖</div>
                <h3 className="text-xl font-bold text-white mb-2">Narrativa Envolvente</h3>
                <p className="text-slate-400">
                  Uma história de sobrevivência, conexões emocionais e descobertas em um bairro cheio de mistérios.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-white mb-2">Alta Replayability</h3>
                <p className="text-slate-400">
                  Eventos aleatórios, múltiplos caminhos e personagens com profundidade garantem novas experiências.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Sobre Evergreen Vale
          </h2>

          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              <span className="text-amber-400 font-semibold">Evergreen Vale</span> é um jogo web novel driven que combina narrativa imersiva com mecânicas de simulação de vida. Você acaba de chegar em uma pequena cidade suburbana com segredos atrás de cada cortina.
            </p>

            <p>
              Sem dinheiro, sem emprego e sem conhecidos, você precisa sobreviver. Mas enquanto tenta se estabelecer, você descobrirá que Vale Verde é muito mais do que parece. Cada personagem tem uma história, cada ambiente tem uma atmosfera, e cada escolha que você faz molda seu destino.
            </p>

            <p>
              O jogo apresenta um sistema complexo de medidores que afetam sua experiência narrativa. Sua fome, higiene, energia, reputação e até mesmo sua "excitação" (tensão sexual latente) influenciam como os personagens interagem com você e quais oportunidades se abrem.
            </p>

            <p>
              Com múltiplos caminhos narrativos, personagens com profundidade emocional e uma atmosfera que mistura o mundano com o sensual, Evergreen Vale oferece uma experiência única de jogo narrativo. Suas escolhas importam. Suas ações têm consequências. E Vale Verde está esperando por você.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">7</div>
              <p className="text-slate-400 mt-2">Dias de História</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">10+</div>
              <p className="text-slate-400 mt-2">Personagens Únicos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">6</div>
              <p className="text-slate-400 mt-2">Ambientes</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">∞</div>
              <p className="text-slate-400 mt-2">Possibilidades</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patreon Section */}
      <PatreonCard position="section" tierHighlight="contributor" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500/10 to-orange-600/10 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para Explorar Vale Verde?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Sua jornada começa agora. Descubra os segredos, conheça os personagens e molde seu destino.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={() => setLocation("/game")}
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold text-lg px-8 py-6"
            >
              Começar Jogo Agora
            </Button>
          </div>
          <div className="flex justify-center">
            <ShareButtons 
              title="Evergreen Vale - Um jogo web novel driven"
              description="Descubra os segredos de Vale Verde. Uma experiência narrativa imersiva com escolhas que importam."
              position="horizontal"
              size="md"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-white font-semibold">{APP_TITLE}</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2024 Evergreen Vale. Uma experiência narrativa imersiva.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Contato
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Privacidade
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700/50 pt-6 mt-6 flex justify-center">
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-3">Compartilhe Evergreen Vale com seus amigos</p>
              <ShareButtons 
                position="horizontal"
                size="sm"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
