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

        <div className="mb-12 relative group">
          <div className="relative aspect-video bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl overflow-hidden">
            <img
              src={images[currentImage]}
              alt={`${locationName} ${currentImage + 1}`}
              className="w-full h-full object-cover"
              data-testid={`img-gallery-${currentImage}`}
            />
          </div>
          
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={prevImage}
            data-testid="button-prev-image"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={nextImage}
            data-testid="button-next-image"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImage 
                    ? 'bg-primary w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                data-testid={`button-image-indicator-${idx}`}
              />
            ))}
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
