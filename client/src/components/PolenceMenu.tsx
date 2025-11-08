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
      <div className="container mx-auto max-w-5xl px-4">
        <div className="bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-amber-900/30 rounded-3xl p-10 shadow-2xl">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Спомени
          </h3>
          
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {locations.slice(0, 3).map((loc) => {
                const isUnlocked = unlockedLocations.has(loc.key);
                return (
                  <Link key={loc.key} href={isUnlocked ? loc.path : '#'}>
                    <Button
                      variant={isUnlocked ? "default" : "secondary"}
                      size="lg"
                      disabled={!isUnlocked}
                      data-testid={`button-location-${loc.key}`}
                      className={`min-w-[180px] h-14 text-lg font-semibold ${!isUnlocked ? 'opacity-50' : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-lg'}`}
                    >
                      {!isUnlocked && <Lock className="w-5 h-5 mr-2" />}
                      {loc.label}
                    </Button>
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {locations.slice(3, 6).map((loc) => {
                const isUnlocked = unlockedLocations.has(loc.key);
                return (
                  <Link key={loc.key} href={isUnlocked ? loc.path : '#'}>
                    <Button
                      variant={isUnlocked ? "default" : "secondary"}
                      size="lg"
                      disabled={!isUnlocked}
                      data-testid={`button-location-${loc.key}`}
                      className={`min-w-[180px] h-14 text-lg font-semibold ${!isUnlocked ? 'opacity-50' : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-lg'}`}
                    >
                      {!isUnlocked && <Lock className="w-5 h-5 mr-2" />}
                      {loc.label}
                    </Button>
                  </Link>
                );
              })}
            </div>

            <div className="flex justify-center pt-4">
              <Link href={allUnlocked ? '/quiz' : '#'}>
                <Button
                  variant="default"
                  size="lg"
                  disabled={!allUnlocked}
                  data-testid="button-favorites"
                  className={`min-w-[400px] h-16 text-xl font-bold ${
                    !allUnlocked 
                      ? 'opacity-50' 
                      : 'bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 hover:from-pink-700 hover:via-rose-600 hover:to-pink-700 shadow-2xl animate-gradient-shift'
                  }`}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  {!allUnlocked && <Lock className="w-6 h-6 mr-3" />}
                  <Heart className="w-6 h-6 mr-3 fill-current animate-pulse" />
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
