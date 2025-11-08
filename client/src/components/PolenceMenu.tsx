import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Lock, Heart } from "lucide-react";

const locations = [
  { key: 'nesebare', label: 'Несебър', path: '/location/nesebare' },
  { key: 'sozopol', label: 'Созопол', path: '/location/sozopol' },
  { key: 'sofia', label: 'София', path: '/location/sofia' },
  { key: 'varna', label: 'Варна', path: '/location/varna' },
  { key: 'bansko', label: 'Банско', path: '/location/bansko' },
  { key: 'pleven', label: 'Плевен', path: '/location/pleven' },
];

export default function PolenceMenu() {
  const [unlockedLocations, setUnlockedLocations] = useState<Set<string>>(new Set());

  useEffect(() => {
    const updateUnlocked = () => {
      const unlocked = new Set<string>();
      locations.forEach(loc => {
        if (localStorage.getItem(loc.key) === 'unlocked') {
          unlocked.add(loc.key);
        }
      });
      setUnlockedLocations(unlocked);
    };

    updateUnlocked();
    window.addEventListener('storage', updateUnlocked);
    window.addEventListener('locationUnlocked', updateUnlocked);

    return () => {
      window.removeEventListener('storage', updateUnlocked);
      window.removeEventListener('locationUnlocked', updateUnlocked);
    };
  }, []);

  const allUnlocked = unlockedLocations.size === 6;

  return (
    <div className="mt-16 mb-8">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-amber-900/30 rounded-2xl p-8 shadow-xl">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Навигация
          </h3>
          
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {locations.slice(0, 3).map((loc) => {
                const isUnlocked = unlockedLocations.has(loc.key);
                return (
                  <Link key={loc.key} href={isUnlocked ? loc.path : '#'}>
                    <Button
                      variant={isUnlocked ? "default" : "secondary"}
                      size="lg"
                      disabled={!isUnlocked}
                      data-testid={`button-location-${loc.key}`}
                      className={`min-w-[140px] ${!isUnlocked ? 'opacity-50' : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600'}`}
                    >
                      {!isUnlocked && <Lock className="w-4 h-4 mr-2" />}
                      {loc.label}
                    </Button>
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {locations.slice(3, 6).map((loc) => {
                const isUnlocked = unlockedLocations.has(loc.key);
                return (
                  <Link key={loc.key} href={isUnlocked ? loc.path : '#'}>
                    <Button
                      variant={isUnlocked ? "default" : "secondary"}
                      size="lg"
                      disabled={!isUnlocked}
                      data-testid={`button-location-${loc.key}`}
                      className={`min-w-[140px] ${!isUnlocked ? 'opacity-50' : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600'}`}
                    >
                      {!isUnlocked && <Lock className="w-4 h-4 mr-2" />}
                      {loc.label}
                    </Button>
                  </Link>
                );
              })}
            </div>

            <div className="flex justify-center pt-2">
              <Link href={allUnlocked ? '/quiz' : '#'}>
                <Button
                  variant="default"
                  size="lg"
                  disabled={!allUnlocked}
                  data-testid="button-favorites"
                  className={`min-w-[300px] text-lg ${!allUnlocked ? 'opacity-50' : 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 shadow-lg'}`}
                >
                  {!allUnlocked && <Lock className="w-5 h-5 mr-2" />}
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  Любими спомени
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
