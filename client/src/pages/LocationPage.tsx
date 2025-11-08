import { useEffect } from "react";
import { useParams } from "wouter";
import Header from "@/components/Header";
import LocationGallery from "@/components/LocationGallery";
import PuzzleGame from "@/components/PuzzleGame";

const locationData: Record<string, { name: string; hasExtra?: boolean }> = {
  nesebare: { name: "Несебър" },
  sozopol: { name: "Созопол", hasExtra: true },
  sofia: { name: "София" },
  varna: { name: "Варна" },
  bansko: { name: "Банско" },
  pleven: { name: "Плевен" }
};

export default function LocationPage() {
  const params = useParams<{ location: string }>();
  const location = params.location || '';
  const data = locationData[location];

  useEffect(() => {
    if (location && data) {
      localStorage.setItem(location, 'unlocked');
      window.dispatchEvent(new Event('locationUnlocked'));
    }
  }, [location, data]);

  if (!data) {
    return <div>Location not found</div>;
  }

  const placeholderImages = Array(6).fill(null).map((_, i) => 
    `https://placehold.co/800x600/ff${Math.floor(Math.random() * 99).toString().padStart(2, '0')}cc/ffffff?text=${data.name}+${i + 1}`
  );

  const handlePuzzleSolved = () => {
    console.log('Puzzle solved for', location);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-pink-950/20 dark:via-rose-950/20 dark:to-red-950/20">
      <Header />
      
      <LocationGallery
        locationName={data.name}
        images={placeholderImages}
        additionalContent={
          <>
            {location === 'sozopol' && (
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 rounded-2xl p-8 mb-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Street Place бургерите</h3>
                <p className="text-lg leading-relaxed">
                  Бургерите на Street Place в Созопол бяха нещо специално – сочни, вкусни и перфектни след дълъг ден на плажа. 
                  Седяхме там, хапвахме, смеехме се и се чувствахме като у дома. Малките неща правят големите спомени.
                </p>
              </div>
            )}
            
            {location === 'bansko' && (
              <div className="mb-8">
                <PuzzleGame onSolved={handlePuzzleSolved} />
              </div>
            )}
          </>
        }
      />
    </div>
  );
}
