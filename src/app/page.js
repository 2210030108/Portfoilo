
import Profile from "./Pages/Profile";
import  Projects  from "./Pages/Projects";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Achievements from "./Pages/Achievements";
import ContactForm from "./Pages/ContactForm";
import AIBootcampSummary from "./Pages/AIBootcampSummary";
import Certificates from "./Pages/Certificates";

export default function Home() {
  return (
    <>
      <Profile/>
      <div className="flex flex-col items-center">
      <div className="p-8 bg-slate-100 text-center w-full"><Education/></div>
        <Skills/>
        
        <div className="p-8  text-center w-full">
          <Projects/>
          <Achievements/>
          <ContactForm/>
          <Certificates/>
          <AIBootcampSummary/>
        </div>
      </div>
    </>
  );
}
