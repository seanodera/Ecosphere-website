import Banner from "@/components/home/banner";
import Experiences from "@/components/home/experiences";
import Solution from "@/components/home/solution";
import Insights from "@/components/home/Insights";
import TeamProductivity from "@/components/home/TeamProductivity";
import ProjectManagement from "@/components/home/ProjectManagement";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
      <div className={'pt-16 text-dark bg-body'}>
        <Banner/>
          <Experiences/>
          <Insights/>
          <TeamProductivity/>
          <ProjectManagement/>
          <Testimonials/>
          <ContactSection/>
          {/*<Solution/>*/}
      </div>
  );
}
