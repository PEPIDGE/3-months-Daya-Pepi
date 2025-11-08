import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [discovered, setDiscovered] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const locations = ['nesebare', 'sozopol', 'sofia', 'varna', 'bansko', 'pleven'];
      const count = locations.filter(loc => localStorage.getItem(loc) === 'unlocked').length;
      setDiscovered(count);
    };

    updateCount();
    window.addEventListener('storage', updateCount);
    window.addEventListener('locationUnlocked', updateCount);
    
    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener('locationUnlocked', updateCount);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="font-serif text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity" data-testid="link-home">
            3 Months Daya & Pepi
          </h1>
        </Link>
        <div className="flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 px-4 py-2 rounded-full">
          <span className="text-sm md:text-base font-medium">Открити спомени:</span>
          <span className="text-lg md:text-xl font-bold text-primary" data-testid="text-discovered-count">
            {discovered} / 6
          </span>
        </div>
      </div>
    </header>
  );
}
