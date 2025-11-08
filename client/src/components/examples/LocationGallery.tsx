import LocationGallery from '../LocationGallery';

export default function LocationGalleryExample() {
  const placeholderImages = Array(6).fill('https://placehold.co/800x600/ffc0cb/ffffff?text=Memory');
  
  return (
    <LocationGallery
      locationName="Несебър"
      images={placeholderImages}
    />
  );
}
