import { Link } from "wouter";

interface StoryProps {
  title: string;
  location: string;
  date: string;
  text: string;
  hiddenWord: string;
  hiddenLink: string;
}

export default function StorySection({ 
  title, 
  location, 
  date, 
  text, 
  hiddenWord, 
  hiddenLink
}: StoryProps) {
  const handleWordClick = () => {
    const locationKey = hiddenLink.replace('/location/', '');
    localStorage.setItem(locationKey, 'unlocked');
    window.dispatchEvent(new Event('locationUnlocked'));
  };

  const parts = text.split(hiddenWord);
  
  return (
    <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-amber-900/30 shadow-lg">
      <div className="relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {title}
        </h2>
        
        <div className="flex flex-wrap gap-4 mb-6 text-sm md:text-base text-gray-700 dark:text-gray-300">
          <span className="flex items-center gap-2">
            <span>📍</span>
            <span className="font-medium">{location}</span>
          </span>
          <span className="flex items-center gap-2">
            <span>📅</span>
            <span>{date}</span>
          </span>
        </div>
        
        <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          {parts[0]}
          <Link 
            href={hiddenLink}
            onClick={handleWordClick}
            data-testid={`link-hidden-${hiddenLink.replace('/location/', '')}`}
          >
            <span className="transition-all duration-300 hover:text-primary hover:font-semibold hover:underline decoration-2 decoration-primary cursor-pointer">
              {hiddenWord}
            </span>
          </Link>
          {parts[1]}
        </p>
      </div>
    </div>
  );
}
