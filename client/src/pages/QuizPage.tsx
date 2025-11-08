import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import QuizForm from "@/components/QuizForm";

export default function QuizPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const locations = ['nesebare', 'sozopol', 'sofia', 'varna', 'bansko', 'pleven'];
    const allUnlocked = locations.every(loc => localStorage.getItem(loc) === 'unlocked');
    
    if (!allUnlocked) {
      setLocation('/');
    }
  }, [setLocation]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-pink-950/20 dark:via-rose-950/20 dark:to-red-950/20">
      <Header />
      
      <main className="pt-24 pb-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
              Любими спомени
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Отговори на всички въпроси, за да отключиш финалното съобщение
            </p>
          </div>

          <QuizForm />
        </div>
      </main>
    </div>
  );
}
