import SummaryComponent from "@/components/summaryComponent";
import AboutComponent from "@/components/aboutComponent";
import SkillsComponent from "@/components/skillsComponent";
import ProjectComponent from "@/components/projectComponent";
import ContactComponent from "@/components/contactComponent";
export default function HomeContainer() {
  return (
    <>
      <main>
        <SummaryComponent />
        <AboutComponent />
        <SkillsComponent />
        <ProjectComponent />
        <ContactComponent />
      </main>
    </>
  );
}
