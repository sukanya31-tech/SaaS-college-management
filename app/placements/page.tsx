import PlacementHero from "@/app/component/placements/PlacementHero";   
import AboutPlacements from "@/app/component/placements/AboutPlacements";
import PlacementTeam from "../component/placements/PlacementTeam";
import RecruitersPartners from "../component/placements/RecruitersPartners";
import Statistics from "../component/placements/Statistics";
import CareerGuidance from "../component/placements/CareerGuidance";
import StudyAbroad from "../component/placements/StudyAbroad";


export default function Home() {
  return (
    <>
      <PlacementHero />
      <AboutPlacements />
      <PlacementTeam />
      <RecruitersPartners />
      <Statistics />
      <CareerGuidance />
      <StudyAbroad />
    </>
  );
}