import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface LocationGalleryProps {
  locationName: string;
  images: string[];
  additionalContent?: React.ReactNode;
}

export default function LocationGallery({ 
  locationName, 
  images,
  additionalContent 
}: LocationGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen pt-24 pb-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 bg-clip-text text-transparent">
          {locationName}
        </h1>

        <div className="mb-12">
          <div className="relative aspect-video bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-amber-900/30 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={images[currentImage]}
              alt={`${locationName} ${currentImage + 1}`}
              className="w-full h-full object-cover"
              data-testid={`img-gallery-${currentImage}`}
            />
          </div>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
              onClick={prevImage}
              data-testid="button-prev-image"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Предишна
            </Button>
            
            <div className="flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentImage 
                      ? 'bg-primary scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                  }`}
                  data-testid={`button-image-indicator-${idx}`}
                />
              ))}
            </div>

            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
              onClick={nextImage}
              data-testid="button-next-image"
            >
              Следваща
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`relative aspect-square rounded-xl overflow-hidden hover-elevate transition-all ${
                currentImage === idx ? 'ring-4 ring-primary' : ''
              }`}
              data-testid={`button-thumbnail-${idx}`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {additionalContent && (
          <div className="mb-8">
            {additionalContent}
          </div>
        )}

        <div className="text-center">
          <Link href="/">
            <Button variant="outline" size="lg" data-testid="button-back-to-story">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад към историята
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
