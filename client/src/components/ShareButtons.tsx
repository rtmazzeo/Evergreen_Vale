import { Share2, Twitter, Facebook, MessageCircle, Linkedin, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface ShareButtonsProps {
  title?: string;
  description?: string;
  url?: string;
  hashtags?: string[];
  position?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export default function ShareButtons({
  title = "Evergreen Vale - Um jogo web novel driven",
  description = "Descubra os segredos de Vale Verde. Uma experiência narrativa imersiva com escolhas que importam.",
  url = typeof window !== "undefined" ? window.location.origin : "https://evergreen-vale.vercel.app",
  hashtags = ["EvergreenVale", "VisualNovel", "WebGame", "IndieGame"],
  position = "horizontal",
  size = "md",
  showLabel = false,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const hashtagString = hashtags.join(" ");

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=${hashtags.join(",")}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Link copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag.event("social_share", {
        event_category: "engagement",
        event_label: "shared_on_" + platform,
        platform: platform,
      });
    }
  };

  const buttonSizeClass = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }[size];

  const iconSizeClass = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }[size];

  const containerClass = position === "vertical" ? "flex flex-col gap-2" : "flex flex-row gap-2";

  return (
    <div className={containerClass}>
      {/* Twitter */}
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleShare("twitter")}
        title="Compartilhar no Twitter"
      >
        <Button
          variant="outline"
          size="icon"
          className={`${buttonSizeClass} border-slate-600 text-slate-300 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500`}
        >
          <Twitter className={iconSizeClass} />
        </Button>
      </a>

      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleShare("facebook")}
        title="Compartilhar no Facebook"
      >
        <Button
          variant="outline"
          size="icon"
          className={`${buttonSizeClass} border-slate-600 text-slate-300 hover:bg-blue-600/20 hover:text-blue-500 hover:border-blue-600`}
        >
          <Facebook className={iconSizeClass} />
        </Button>
      </a>

      {/* WhatsApp */}
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleShare("whatsapp")}
        title="Compartilhar no WhatsApp"
      >
        <Button
          variant="outline"
          size="icon"
          className={`${buttonSizeClass} border-slate-600 text-slate-300 hover:bg-green-500/20 hover:text-green-400 hover:border-green-500`}
        >
          <MessageCircle className={iconSizeClass} />
        </Button>
      </a>

      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleShare("linkedin")}
        title="Compartilhar no LinkedIn"
      >
        <Button
          variant="outline"
          size="icon"
          className={`${buttonSizeClass} border-slate-600 text-slate-300 hover:bg-blue-700/20 hover:text-blue-600 hover:border-blue-700`}
        >
          <Linkedin className={iconSizeClass} />
        </Button>
      </a>

      {/* Copy Link */}
      <Button
        variant="outline"
        size="icon"
        onClick={handleCopyLink}
        className={`${buttonSizeClass} border-slate-600 text-slate-300 hover:bg-amber-500/20 hover:text-amber-400 hover:border-amber-500`}
        title="Copiar link"
      >
        <Copy className={iconSizeClass} />
      </Button>
    </div>
  );
}
