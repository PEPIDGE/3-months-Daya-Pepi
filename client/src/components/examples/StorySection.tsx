import StorySection from '../StorySection';

export default function StorySectionExample() {
  return (
    <div className="p-8 space-y-6">
      <StorySection
        title="Несебър – Старият град"
        location="Старият град, Несебър"
        date="лято 2024"
        text="Беше онова лято, в което не очаквах нищо особено. Отидох просто за последно забавление, без никакви очаквания — нито за хора, нито за чувства. А после те видях. И колкото и да звучи банално — знаех, че ще си ти."
        hiddenWord="видях"
        hiddenLink="/location/nesebare"
      />
    </div>
  );
}
