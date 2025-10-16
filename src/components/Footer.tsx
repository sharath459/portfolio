import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
            <Link href="https://www.linkedin.com/in/sharath-somashekar/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                LinkedIn
            </Link>
            <Link href="https://github.com/sharath459" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                GitHub
            </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Sharath Somashekar. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
