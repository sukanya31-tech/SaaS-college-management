import About from "@/app/component/about/About";
import AboutHero from "@/app/component/about/AboutHero";
import MissionVission from "@/app/component/about/MissionVission";
export default function Home() {
  return (
    <>
      <AboutHero />
      <About />
      <MissionVission />
    </>
  );
}