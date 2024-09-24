import { useState } from "react";
import "./App.css";
import WordEditor from "./components/WordEditor";
import PDFViewPage from "./components/PDFViewPage";
import { TooltipProvider } from "./components/ui/tooltip";
import { cn } from "./lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "./components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { useCoverLetterBodyStore } from "./stores/cover-letter-body";

function CoverLetter() {
  //   const [coverLetterBody, setCoverLetterBody] = useState(
  //     "My passion for pushing the boundaries of AI and NLP aligns perfectly with Cohere's mission to empower developers with cutting-edge language models.  I'm particularly drawn to your focus on building innovative and user-centric products, a philosophy I've consistently embraced throughout my career.\n\nDuring my internship at Delet, I transformed a company website into a high-performing React Native app, ensuring seamless functionality across platforms.  This experience honed my ability to design intuitive user interfaces, optimize API integrations, and collaborate effectively with cross-functional teams. The result was a 20% increase in user engagement and retention, demonstrating my commitment to delivering impactful results.\n\nMy experience extends beyond app development.  I spearheaded the design and development of a user-friendly charity website, integrating a secure payment gateway with React.  This project, which resulted in a 9% increase in online donations, allowed me to refine my skills in optimizing user flow and ensuring transaction security, critical considerations for any technology-driven platform.\n\nI've also applied my technical expertise to personal projects, including WalkSafe, a real-time tracking app that leverages React-Native and Flask to enhance user safety.  I engineered a route optimization algorithm that analyzes crime data to suggest secure paths, resulting in a 20% decrease in user-reported safety incidents.  This project demonstrates my ability to leverage machine learning and data analysis to solve real-world problems.\n\nFurthermore, my participation in hackathons has solidified my technical prowess and problem-solving skills.  I secured first place in both the Code Crush 1.0 Hackathon and the CuseHacks Beta 2024 Hackathon, showcasing my ability to rapidly learn new technologies and develop innovative solutions. \n\nI'm eager to bring my passion for AI and NLP, combined with my proven experience in developing user-centric applications, to Cohere. I'm confident that I can contribute meaningfully to your team and learn from the best in the industry."
  //   );
  const { coverLetterBody, setCoverLetterBody } = useCoverLetterBodyStore();

  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  const handleSaveFunction = (contentFromEditor: string) => {
    console.log("Save function triggered from MainSidebar.tsx");
    console.log(contentFromEditor);
    setCoverLetterBody(contentFromEditor);
  };
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700  h-screen overflow-hidden"
      )}
    >
      <TooltipProvider>
        <div className=' w-full grid grid-cols-2 gap-2'>
          <WordEditor />
          <PDFViewPage coverLetterBody={coverLetterBody} companyName='Cohere' />
        </div>
      </TooltipProvider>
    </div>
  );
}

export default CoverLetter;
