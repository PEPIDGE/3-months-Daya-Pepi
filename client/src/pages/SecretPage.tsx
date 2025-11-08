import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import { Heart } from "lucide-react";

export default function SecretPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const quizCompleted = localStorage.getItem('quizCompleted') === 'true';
    if (!quizCompleted) {
      setLocation('/');
    }
  }, [setLocation]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-pink-950/20 dark:via-rose-950/20 dark:to-red-950/20">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-6">
            <div className="animate-float">
              <Heart className="w-20 h-20 mx-auto text-primary fill-primary animate-pulse-glow" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
              Поздравления, любов моя
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed text-foreground max-w-2xl mx-auto">
              Намери всяка следа, отгатна всеки спомен и стигна до края.
            </p>
            
            <p className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Но това не е краят – това е началото.
            </p>
          </div>

          <div className="mb-12">
            <div className="aspect-video bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Тайно съобщение"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                data-testid="video-secret-message"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-3xl font-serif italic text-muted-foreground animate-pulse-glow">
              Сега си погледни телефона
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
