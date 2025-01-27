import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, Globe, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Tuning",
      "CMS Integration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    features: [
      "iOS & Android Apps",
      "React Native",
      "App Store Optimization",
      "Push Notifications",
    ],
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions for your business needs",
    features: [
      "Business Analysis",
      "Custom Development",
      "API Integration",
      "Cloud Solutions",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that drives engagement",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
          <p className="text-gray-500 dark:text-gray-400 md:text-xl">
            Comprehensive digital solutions for your business
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/hire">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}