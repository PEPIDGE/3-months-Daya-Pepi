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
    <div className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md bg-background/90 border-t border-border p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {locations.map((loc) => {
            const isUnlocked = unlockedLocations.has(loc.key);
            return (
              <Link key={loc.key} href={isUnlocked ? loc.path : '#'}>
                <Button
                  variant={isUnlocked ? "default" : "secondary"}
                  size="sm"
                  disabled={!isUnlocked}
                  data-testid={`button-location-${loc.key}`}
                  className={`relative ${!isUnlocked ? 'opacity-50' : ''}`}
                >
                  {!isUnlocked && <Lock className="w-3 h-3 mr-2" />}
                  {loc.label}
                </Button>
              </Link>
            );
          })}
          
          <Link href={allUnlocked ? '/quiz' : '#'}>
            <Button
              variant="default"
              size="default"
              disabled={!allUnlocked}
              data-testid="button-favorites"
              className={`relative px-6 ${!allUnlocked ? 'opacity-50' : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600'}`}
            >
              {!allUnlocked && <Lock className="w-4 h-4 mr-2" />}
              <Heart className="w-4 h-4 mr-2" />
              Любими спомени
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
