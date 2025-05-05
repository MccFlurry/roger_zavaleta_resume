import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { Code, Server, Database, Cloud, Smartphone, Download } from "lucide-react"; //Iconos

const skills = [
  { name: "React", icon: Code },
  { name: "Next.js", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "Tailwind CSS", icon: Code },
  { name: "React Native", icon: Smartphone },
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Code },
  { name: "JavaScript", icon: Code },
  { name: "Python", icon: Code },
  { name: "Java", icon: Code }
];

export default function Profile() {
  return (
    <section id="about" className="w-full">
      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="bg-muted/50 p-6 flex flex-col md:flex-row items-center gap-6">
          <Avatar className="h-24 w-24 border-4 border-background shadow-md">
            <AvatarImage src="https://picsum.photos/100/100" alt="Roger Zavaleta" data-ai-hint="professional portrait" />
            <AvatarFallback>RZ</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">Roger Alessandro Zavaleta Marcelo</h1>
            <p className="text-xl text-muted-foreground mt-1">Junior Web Developer</p>
            <div className="mt-4 flex justify-center md:justify-start gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/MccFlurry" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <GithubIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://pe.linkedin.com/in/roger-alessandro-zavaleta-marcelo-63ab32329" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="default">
                <Download className="mr-2 h-4 w-4" /> English Resume
              </Button>
              <Button variant="default">
                <Download className="mr-2 h-4 w-4" /> Spanish Resume
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-primary">About Me</h2>
            <p className="text-foreground/80 leading-relaxed">
            ESCRIBIR SOBRE MI AQUI
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill.name} variant="secondary" className="flex items-center gap-1 px-3 py-1 text-sm transition-transform hover:scale-105">
                  <skill.icon className="h-3.5 w-3.5 text-muted-foreground" />
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
