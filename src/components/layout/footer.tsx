export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted py-4 mt-auto">
      <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
        &copy; {currentYear} Roger Alessandro Zavaleta Marcelo. All rights reserved.
      </div>
    </footer>
  );
}