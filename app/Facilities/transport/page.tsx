import AboutTransport from "@/app/component/facilities/AboutTransport";
import Transport from "@/app/component/facilities/Transport";
import TransportHero from "@/app/component/facilities/TransportHero";



export default function Home() {
  return (
    <>
      <TransportHero />
      <AboutTransport />    
      <Transport />
      
    </>
  );
}