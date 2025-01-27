import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
          <p className="text-gray-500 dark:text-gray-400 md:text-xl">
            Learn about our mission, vision, and values.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Target className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Mission</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  To empower businesses through innovative digital solutions that drive growth and success.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Lightbulb className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Vision</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  To be the leading force in digital transformation, setting new standards in innovation and excellence.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Award className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Values</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Excellence, Innovation, Integrity, Client Success, and Continuous Improvement.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Founded with a vision to transform how businesses operate in the digital age, our company has grown from a small team of passionate developers to a full-service digital solutions provider. We combine technical expertise with creative innovation to deliver exceptional results for our clients.
            </p>
            <p>
              Our team consists of experienced professionals who are dedicated to staying at the forefront of technology trends and best practices. We believe in continuous learning and evolution, ensuring that our clients always receive cutting-edge solutions that drive their success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}