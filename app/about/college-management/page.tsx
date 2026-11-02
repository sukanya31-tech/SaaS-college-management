import ManagementHero from "@/app/component/college-management/ManagementHero";
import ChairmananMessage from "@/app/component/college-management/ChairmanMessage";
import Management from "@/app/component/college-management/Management";




export default function Home() {
  return (
    <>
      <ManagementHero />
      <ChairmananMessage />
      <Management />
    </>
  );
}