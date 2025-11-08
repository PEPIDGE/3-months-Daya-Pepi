import { Link } from "wouter";

interface StoryProps {
  title: string;
  location: string;
  date: string;
  text: string;
  hiddenWord: string;
  hiddenLink: string;
  gradient: string;
}

export default function StorySection({ 
  title, 
  location, 
  date, 
  text, 
  hiddenWord, 
  hiddenLink,
  gradient 
}: StoryProps) {
  const handleWordClick = () => {
    const locationKey = hiddenLink.replace('/location/', '');
    localStorage.setItem(locationKey, 'unlocked');
    window.dispatchEvent(new Event('locationUnlocked'));
  };

  const parts = text.split(hiddenWord);
  
  return (
    <div 
      className={`relative overflow-hidden rounded-2xl p-8 md:p-12 ${gradient} bg-300% animate-gradient-shift`}
      style={{ backgroundSize: '300% 300%' }}
    >
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
            <span className="font-semibold underline decoration-2 decoration-primary hover:text-primary transition-colors duration-300 hover-elevate px-1 rounded">
              {hiddenWord}
            </span>
          </Link>
          {parts[1]}
        </p>
      </div>
    </div>
  );
}
