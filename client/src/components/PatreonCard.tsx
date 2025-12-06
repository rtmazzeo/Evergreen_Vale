import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useEffect } from "react";

interface PatreonCardProps {
  position?: "footer" | "section" | "sidebar";
  tierHighlight?: "supporter" | "contributor" | "patron" | "none";
  patreonUrl?: string;
}

const PATREON_URL = "https://www.patreon.com/EvergreenCraft";

const TIERS = [
  {
    name: "Supporter",
    price: "R$5",
    benefits: ["Early access to updates", "Supporter badge"],
    id: "supporter",
  },
  {
    name: "Contributor",
    price: "R$15",
    benefits: ["All Supporter benefits", "Voting on features", "Contributor badge"],
    id: "contributor",
  },
  {
    name: "Patron",
    price: "R$30",
    benefits: [
      "All Contributor benefits",
      "Private Discord channel",
      "Exclusive content",
      "Patron badge",
    ],
    id: "patron",
  },
];

export default function PatreonCard({
  position = "section",
  tierHighlight = "none",
  patreonUrl = PATREON_URL,
}: PatreonCardProps) {
  // Track card view
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag.event("patreon_card_view", {
        event_category: "engagement",
        event_label: "patreon_card",
        position: position,
      });
    }
  }, [position]);

  const handlePatreonClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag.event("patreon_click", {
        event_category: "engagement",
        event_label: "patreon_button",
        position: position,
      });
    }
    window.open(patreonUrl, "_blank");
  };

  // Render based on position
  if (position === "footer") {
    return (
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-700 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-amber-500 fill-amber-500" />
                <h3 className="text-xl font-bold text-white">
                  Support Evergreen Vale Development
                </h3>
              </div>
              <p className="text-slate-300 mb-4">
                Help fund new features, content, and keep the game growing
              </p>
              <Button
                onClick={handlePatreonClick}
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold"
              >
                Become a Patron →
              </Button>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              {TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`p-4 rounded-lg border transition-all ${
                    tierHighlight === tier.id
                      ? "border-amber-500 bg-amber-500/10"
                      : "border-slate-700 bg-slate-800/50"
                  }`}
                >
                  <p className="font-semibold text-white">{tier.name}</p>
                  <p className="text-amber-400 font-bold mb-2">{tier.price}</p>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {tier.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span className="text-amber-400 mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (position === "sidebar") {
    return (
      <Card className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border-amber-700/50 p-6 sticky top-4">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="w-5 h-5 text-amber-500 fill-amber-500" />
          <h3 className="text-lg font-bold text-white">Support Us</h3>
        </div>
        <p className="text-sm text-slate-300 mb-4">
          Help fund new features and exclusive content
        </p>
        <Button
          onClick={handlePatreonClick}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold mb-4"
        >
          Become a Patron
        </Button>
        <div className="space-y-2">
          {TIERS.map((tier) => (
            <div key={tier.id} className="text-xs">
              <p className="font-semibold text-white">{tier.name}</p>
              <p className="text-amber-400">{tier.price}/month</p>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  // Default: section layout
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-900/50 to-slate-800/50 border-y border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-6 h-6 text-amber-500 fill-amber-500" />
            <h2 className="text-3xl font-bold text-white">
              Support Evergreen Vale Development
            </h2>
          </div>
          <p className="text-slate-300 text-lg">
            Help fund new features, exclusive content, and keep the game growing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {TIERS.map((tier) => (
            <Card
              key={tier.id}
              className={`p-6 transition-all hover:shadow-lg ${
                tierHighlight === tier.id
                  ? "border-amber-500 bg-amber-500/10 ring-2 ring-amber-500/50"
                  : "border-slate-700 bg-slate-800/50 hover:border-amber-500/50"
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-3xl font-bold text-amber-400 mb-4">
                {tier.price}
                <span className="text-sm text-slate-400">/month</span>
              </p>
              <ul className="space-y-2 mb-6">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-300">
                    <span className="text-amber-400 font-bold mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={handlePatreonClick}
                className={`w-full ${
                  tierHighlight === tier.id
                    ? "bg-amber-600 hover:bg-amber-700"
                    : "bg-slate-700 hover:bg-slate-600"
                } text-white font-semibold`}
              >
                Choose {tier.name}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handlePatreonClick}
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-8 py-6"
          >
            <Heart className="w-5 h-5 mr-2 fill-white" />
            Become a Patron on Patreon
          </Button>
          <p className="text-slate-400 text-sm mt-4">
            All supporters get exclusive rewards and help shape the future of Evergreen Vale
          </p>
        </div>
      </div>
    </section>
  );
}
