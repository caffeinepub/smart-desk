import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Users, Award } from 'lucide-react';
import PageLayout from '../components/site/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">About SMART DESK</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering students with quality computer education since our inception
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            <Card className="border-2">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                  <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
                <CardDescription className="text-base">
                  To provide accessible, high-quality computer education that empowers individuals with the skills needed
                  to thrive in today's digital economy. We are committed to bridging the digital divide and creating
                  opportunities for all.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/30">
                  <Eye className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
                <CardDescription className="text-base">
                  To be the leading computer training institute in Hyderabad, recognized for excellence in education,
                  innovation in teaching methods, and success in transforming students into skilled professionals ready
                  for the workforce.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">What We Offer</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    Expert Faculty
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our instructors are experienced professionals with deep industry knowledge and a passion for teaching.
                    They bring real-world expertise to the classroom, ensuring you learn practical, job-ready skills.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    Comprehensive Curriculum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    From basic computer literacy to advanced programming and design, our courses cover the full spectrum
                    of computer education. Each course is carefully designed to build your skills progressively.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    Hands-On Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe in learning by doing. Our courses emphasize practical exercises, real-world projects, and
                    hands-on experience with the latest software and tools used in the industry.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    Career Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Beyond technical skills, we provide guidance on career development, interview preparation, and
                    industry best practices to help you succeed in your professional journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Who Should Join?</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Students:</strong> Build a strong foundation in computer skills to
                  excel in your academic and professional career.
                </p>
                <p>
                  <strong className="text-foreground">Job Seekers:</strong> Gain the technical skills employers are
                  looking for and increase your employability.
                </p>
                <p>
                  <strong className="text-foreground">Professionals:</strong> Upgrade your skills, learn new technologies,
                  and stay competitive in the rapidly evolving tech landscape.
                </p>
                <p>
                  <strong className="text-foreground">Entrepreneurs:</strong> Learn the digital tools you need to start
                  and grow your business online.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
}
