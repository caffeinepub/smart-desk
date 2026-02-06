import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageLayout from '../components/site/PageLayout';
import { coursesCatalog } from '../content/coursesCatalog';
import { Separator } from '@/components/ui/separator';

export default function CoursesPage() {
  return (
    <PageLayout>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Our Courses</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of computer training courses designed to help you succeed in the digital world
            </p>
          </div>

          <div className="space-y-12">
            {coursesCatalog.map((category, idx) => (
              <div key={idx}>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
                    <span className={category.color}>{category.name}</span>
                  </h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.courses.map((course, courseIdx) => (
                    <Card key={courseIdx} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-xl">{course.name}</CardTitle>
                          {course.popular && (
                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                              Popular
                            </Badge>
                          )}
                        </div>
                        {course.description && <CardDescription>{course.description}</CardDescription>}
                      </CardHeader>
                      {course.topics && course.topics.length > 0 && (
                        <CardContent>
                          <div className="flex flex-wrap gap-1.5">
                            {course.topics.map((topic, topicIdx) => (
                              <Badge key={topicIdx} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
                {idx < coursesCatalog.length - 1 && <Separator className="mt-12" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
