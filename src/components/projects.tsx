import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

// TODO: Fetch projects dynamically from Firestore
// This is a placeholder structure
const projects = [
  {
    id: "1",
    title: "Project One",
    description: "A brief description of the first project, highlighting its key features and purpose.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    imageUrl: "https://picsum.photos/400/250",
    imageHint: "web application screenshot",
    repoUrl: "https://github.com/MccFlurry/project-one",
    demoUrl: "#", // Link to live demo if available
  },
  {
    id: "2",
    title: "Project Two",
    description: "Description for the second project, focusing on the problems it solves and technologies used.",
    technologies: ["React Native", "Expo", "Firebase Auth", "Firestore"],
    imageUrl: "https://picsum.photos/400/250?grayscale",
    imageHint: "mobile app screenshot",
    repoUrl: "https://github.com/MccFlurry/project-two",
    demoUrl: null, // No live demo
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-48">
               <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={project.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-foreground/80 h-16 overflow-hidden">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">Technologies Used:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 bg-muted/30 p-4">
              {project.repoUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1.5 h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
              {project.demoUrl && (
                <Button variant="default" size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Placeholder message if no projects are loaded */}
      {projects.length === 0 && (
         <p className="text-center text-muted-foreground mt-8">Loading projects or no projects available yet.</p>
      )}
    </section>
  );
}
