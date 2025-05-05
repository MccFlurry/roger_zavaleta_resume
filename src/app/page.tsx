import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-12 md:space-y-16 lg:space-y-20">
      <Profile />
      <Separator />
      <Projects />
      <Separator />
      <Contact />
    </div>
  );
}
