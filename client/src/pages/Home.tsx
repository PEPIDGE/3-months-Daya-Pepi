import Header from "@/components/Header";
import StorySection from "@/components/StorySection";
import PolenceMenu from "@/components/PolenceMenu";

const stories = [
  {
    title: "Несебър – Старият град",
    location: "Старият град, Несебър",
    date: "лято 2024",
    text: "Беше онова лято, в което не очаквах нищо особено. Отидох просто за последно забавление, без никакви очаквания — нито за хора, нито за чувства. А после те видях. И колкото и да звучи банално — знаех, че ще си ти. Аз, мъжът, който не вярваше в любов от пръв поглед, просто знаех.",
    hiddenWord: "видях",
    hiddenLink: "/location/nesebare",
    gradient: "bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 dark:from-pink-900/40 dark:via-rose-900/40 dark:to-red-900/40"
  },
  {
    title: "Слънчев бряг – първата вечер",
    location: "Слънчев бряг, увеселителен парк",
    date: "лято 2024",
    text: "Същата вечер всичко се обърна. Отидохме на Слънчев бряг, където светлините бяха навсякъде, музиката – силна, а въздухът – жив. Бяхме в увеселителния парк – бустер, люлки, влакче, дроп тауър. Смеехме се, крещяхме, снимахме се. Погледите ни се срещаха, но никой не казваше нищо. Още.",
    hiddenWord: "Слънчев бряг",
    hiddenLink: "/location/nesebare",
    gradient: "bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 dark:from-yellow-900/40 dark:via-orange-900/40 dark:to-red-900/40"
  },
  {
    title: "Аквапарк Несебър",
    location: "Аквапарк Несебър",
    date: "лято 2024",
    text: "На следващия ден всичко беше вода и смях. Пързалките изглеждаха безкрайни, слънцето печеше, а ние се държахме като деца. Състезавахме се кой ще стигне първи, пръскахме се, снимкахме се мокри до ушите. И между всичките глупости, някъде там, в онзи воден хаос, стана ясно – това е повече от забавление.",
    hiddenWord: "Аквапарк",
    hiddenLink: "/location/nesebare",
    gradient: "bg-gradient-to-br from-cyan-200 via-blue-200 to-indigo-200 dark:from-cyan-900/40 dark:via-blue-900/40 dark:to-indigo-900/40"
  },
  {
    title: "Созопол – първото ни истинско приключение",
    location: "Созопол – Verano Beach",
    date: "лято 2024",
    text: "Тази вечер няма как да я забравя. Взех те от баба ти в Бургас – тайно, посред нощ, и тогава ми даде онова ластиче, което още пазя. Беше като малък знак, че вече си \"моята\". Потеглихме към Созопол – музика, смях и усещането, че правим нещо лудо. На Verano Beach изкарахме целия ден и вечерта. Усещането беше пълно – свобода, младост, любов.",
    hiddenWord: "Созопол",
    hiddenLink: "/location/sozopol",
    gradient: "bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 dark:from-purple-900/40 dark:via-pink-900/40 dark:to-rose-900/40"
  },
  {
    title: "София – началото на \"ние\"",
    location: "София",
    date: "есен 2024",
    text: "След морето дойде София. Големият град, новата енергия, другият ритъм. Покани ме при теб и вече нямаше нужда от намеци – бяхме си ние. Филми, глупави закачки, разходки вечер. Всичко беше леко и истинско. Първият път, в който се чувстваш спокоен, но същевременно жив. Там ти казах за първи път \"обичам те\".",
    hiddenWord: "София",
    hiddenLink: "/location/sofia",
    gradient: "bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 dark:from-emerald-900/40 dark:via-teal-900/40 dark:to-cyan-900/40"
  },
  {
    title: "Варна – морето ни отново",
    location: "Варна – Русалка",
    date: "лято 2024",
    text: "След това дойде Варна – и сякаш се върнахме в началото, но вече по-различни. Море, плажове, Русалка, залези и онзи лек вятър, който напомня защо лятото е най-хубавият сезон. Бяхме си ние, само че по-близки. Смяхме се на глупости, гонехме се по пясъка, снимахме се и си мислехме същите неща, без да ги казваме.",
    hiddenWord: "Варна",
    hiddenLink: "/location/varna",
    gradient: "bg-gradient-to-br from-blue-200 via-sky-200 to-cyan-200 dark:from-blue-900/40 dark:via-sky-900/40 dark:to-cyan-900/40"
  },
  {
    title: "Банско – нашият уютен хаос",
    location: "Банско",
    date: "зима 2024",
    text: "Банско беше нещо съвсем различно. Планината, разходките в гората, спа вечерите, буритотата, глупавите шеги – беше нашата малка вселена. Без напрежение, без хора, само ние и онзи уют, който си създадохме сами. Понякога светът може да се побере в една усмивка и чаша чай.",
    hiddenWord: "Банско",
    hiddenLink: "/location/bansko",
    gradient: "bg-gradient-to-br from-slate-200 via-gray-200 to-zinc-200 dark:from-slate-900/40 dark:via-gray-900/40 dark:to-zinc-900/40"
  },
  {
    title: "Плевен – у дома при мен",
    location: "Плевен",
    date: "пролет 2025",
    text: "След това те заведох в Плевен. Показах ти града си, панорамата, учих те да караш, и просто си обикаляхме. Ходихме на наргиле, на центъра, карахме колелета. Беше онзи спокоен тип щастие, което не идва от мястото, а от човека до теб.",
    hiddenWord: "Плевен",
    hiddenLink: "/location/pleven",
    gradient: "bg-gradient-to-br from-lime-200 via-green-200 to-emerald-200 dark:from-lime-900/40 dark:via-green-900/40 dark:to-emerald-900/40"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-pink-950/20 dark:via-rose-950/20 dark:to-red-950/20">
      <Header />
      
      <main className="pt-24 pb-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-float">
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
              Нашата история
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              3 месеца, безкрайно щастие
            </p>
          </div>

          <div className="space-y-8">
            {stories.map((story, index) => (
              <div key={index} className="animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                <StorySection {...story} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <PolenceMenu />
    </div>
  );
}
