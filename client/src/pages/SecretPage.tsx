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
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-amber-900/30 rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-12 space-y-8">
              <div className="animate-float inline-block">
                <Heart className="w-24 h-24 text-primary fill-primary animate-pulse" />
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
                Поздравления, любов моя
              </h1>
              
              <p className="font-sans text-xl md:text-2xl leading-relaxed text-foreground max-w-3xl mx-auto">
                Намери всяка следа, отгатна всеки спомен и стигна до края.
              </p>
              
              <p className="font-serif text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Но това не е краят – това е началото.
              </p>
            </div>

            <div className="mb-12">
              <div className="aspect-video bg-white/50 dark:bg-gray-900/50 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-pink-200 dark:ring-pink-800">
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
              <p className="font-serif text-3xl md:text-4xl font-bold italic bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 bg-clip-text text-transparent animate-pulse" style={{ backgroundSize: '200% 200%' }}>
                Сега си погледни телефона
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
