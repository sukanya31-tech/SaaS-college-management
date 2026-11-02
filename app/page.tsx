import HeroSlider from "./component/home/Hero";
import AboutCollege from "./component/home/About";
import Notifications from "./component/home/Notifications";
import AcademicDepartments from "./component/home/Departments";
import CampusFacilities from "./component/home/Facilities";
import ExaminationCell from "./component/home/ExaminationCell";
import Placements from "./component/home/Placements";

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <AboutCollege />
      <Notifications />
      <AcademicDepartments />
      <CampusFacilities />
      <ExaminationCell />
      <Placements />
    </main>
  );
}