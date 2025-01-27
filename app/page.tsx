import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Transform Your Digital Presence
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We create innovative digital solutions that help businesses grow and succeed in the modern world.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/hire">
                <Button>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline">View Our Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Professional Excellence</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Years of experience delivering high-quality solutions to businesses of all sizes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Innovative Solutions</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Cutting-edge technology and creative approaches to solve complex problems.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Client-Focused</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We prioritize your success and work closely with you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}