import { Link } from '@tanstack/react-router';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { instituteDetails } from '../../content/instituteDetails';
import { Heart } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
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
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering students with quality computer education and practical skills for the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="font-semibold mb-4">Course Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Basic Computer Courses</li>
              <li>Programming Courses</li>
              <li>Design Courses</li>
              <li>Web Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                <span className="text-muted-foreground">{instituteDetails.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400 mt-0.5" />
                <div className="space-y-1">
                  {instituteDetails.phoneNumbers.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone}`}
                      className="block text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400 mt-0.5" />
                <a
                  href={`mailto:${instituteDetails.email}`}
                  className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {instituteDetails.email}
                </a>
              </li>
              <li className="flex gap-2">
                <Globe className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                <a
                  href={`https://${instituteDetails.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {instituteDetails.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © 2026. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
