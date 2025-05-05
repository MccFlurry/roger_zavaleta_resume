import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  const email = "rzavaleta0409@gmail.com"; // email

  return (
    <section id="contact" className="w-full">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4 p-6">
          <p className="text-lg text-foreground">
            You can contact me directly via email:
          </p>
          <a href={`mailto:${email}`} className="text-accent text-lg font-medium hover:underline">
            {email}
          </a>
          <Button asChild size="lg" className="mt-4">
            <a href={`mailto:${email}`}>
              <Mail className="mr-2 h-5 w-5" /> Send Email
            </a>
          </Button>
           {/* Optional: Add a simple contact form here later if needed */}
        </CardContent>
      </Card>
    </section>
  );
}
