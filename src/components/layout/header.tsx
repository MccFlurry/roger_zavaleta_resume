import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
          Resume
        </Link>
        {/* Navigation can be added here if needed */}
        <nav>
            {/* <Link href="#about" className="text-foreground hover:text-accent px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link href="#projects" className="text-foreground hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
            <Link href="#contact" className="text-foreground hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Contact</Link> */}
        </nav>
      </div>
    </header>
  );
}