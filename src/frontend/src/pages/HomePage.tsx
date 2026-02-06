import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, Award, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';
import PageLayout from '../components/site/PageLayout';

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20">
        <div className="container relative z-10 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Professional Computer Training
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  SMART DESK
                </span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Your gateway to mastering computer skills. From basic computing to advanced programming and design, we
                offer comprehensive courses to help you succeed in the digital world.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Link to="/courses">
                    Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/assets/generated/smart-desk-hero.dim_1600x600.png"
                  alt="SMART DESK Computer Training Institute"
                  className="h-full w-full object-cover"
                  width={1600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose SMART DESK?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide quality education with experienced instructors and hands-on training
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                  <GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle>Expert Instructors</CardTitle>
                <CardDescription>Learn from experienced professionals with industry expertise</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-teal-200 dark:hover:border-teal-800 transition-colors">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/30">
                  <BookOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle>Comprehensive Courses</CardTitle>
                <CardDescription>Wide range of courses from basics to advanced levels</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-cyan-200 dark:hover:border-cyan-800 transition-colors">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
                  <Users className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <CardTitle>Hands-On Training</CardTitle>
                <CardDescription>Practical learning with real-world projects and exercises</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-amber-200 dark:hover:border-amber-800 transition-colors">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
                  <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle>Certification</CardTitle>
                <CardDescription>Receive recognized certificates upon course completion</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Information Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Course Information</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive course offerings and training programs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Course Pamphlet */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <a
                  href="/assets/uploads/SDPH-1.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <img
                    src="/assets/uploads/SDPH-1.jpg"
                    alt="SMART DESK Course Pamphlet - Professional Training Institute for Digital Age"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                      <ExternalLink className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Student Success Image */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <a
                  href="/assets/uploads/1000_F_755840623_3JuwWAI0IdvB5xOmCIqvUZmPyfLoHd3M-1.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <img
                    src="/assets/uploads/1000_F_755840623_3JuwWAI0IdvB5xOmCIqvUZmPyfLoHd3M-1.jpg"
                    alt="Successful student at SMART DESK computer training institute"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                      <ExternalLink className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">Click on any image to view full size</p>
          </div>
        </div>
      </section>

      {/* Course Categories Preview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Course Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of computer training programs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-emerald-600 dark:text-emerald-400">Basic Computer Courses</CardTitle>
                <CardDescription>
                  Master fundamental computer skills including DCA, ADCA, MS Office, Data Entry, Typing, and Spoken
                  English
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 text-emerald-600 dark:text-emerald-400">
                  <Link to="/courses">
                    View Courses <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-teal-600 dark:text-teal-400">Programming Courses</CardTitle>
                <CardDescription>
                  Learn programming languages and software development from beginner to advanced levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 text-teal-600 dark:text-teal-400">
                  <Link to="/courses">
                    View Courses <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-cyan-600 dark:text-cyan-400">Design Courses</CardTitle>
                <CardDescription>
                  Master graphic design, web design, and creative tools like Photoshop, CorelDraw, AutoCAD, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 text-cyan-600 dark:text-cyan-400">
                  <Link to="/courses">
                    View Courses <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Start Your Learning Journey?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join hundreds of students who have transformed their careers with SMART DESK. Get in touch with us today!
              </p>
              <div className="flex flex-col gap-3 sm:flex-row justify-center">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Link to="/contact">
                    Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
}
