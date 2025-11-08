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
        gradient="bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 dark:from-pink-900/40 dark:via-rose-900/40 dark:to-red-900/40"
      />
    </div>
  );
}
