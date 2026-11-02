import AboutSports from "@/app/component/facilities/AboutSports";
import Sports from "@/app/component/facilities/Sports";
import SportsHero from "@/app/component/facilities/SportsHero";

export default function Home() {
  return (
    <>
      <SportsHero />
      <AboutSports />
      <Sports />
    </>
  );
}