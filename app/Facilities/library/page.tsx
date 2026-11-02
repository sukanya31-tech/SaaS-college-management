import AboutLibrary from "@/app/component/facilities/AboutLibrary";
import Library from "@/app/component/facilities/Library";
import LibraryHero from "@/app/component/facilities/LibraryHero";



export default function Home() {
  return (
    <>
      <LibraryHero />
      <AboutLibrary />
      <Library />
    </>
  );
}