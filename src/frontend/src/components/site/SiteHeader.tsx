import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function SiteHeader() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/courses', label: 'Courses' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
            src="/assets/generated/smart-desk-logo.dim_512x512.png"
            alt="SMART DESK Logo"
            className="h-10 w-10"
            width={512}
            height={512}
          />
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            SMART DESK
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              activeProps={{ className: 'text-emerald-600 dark:text-emerald-400' }}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700">
            <Link to="/contact">Enquire Now</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg font-medium text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  activeProps={{ className: 'text-emerald-600 dark:text-emerald-400' }}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 mt-4">
                <Link to="/contact">Enquire Now</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
