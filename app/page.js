import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Calendar, ChevronRight, Lock, Sparkles, Book } from "lucide-react";
import { Chevron } from "react-day-picker";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { BarChart2 } from "lucide-react";
import TestimonialCarosel from "@/components/testimonial-carosel";
import FreqAskedQues from "@/components/freq-asked-ques";
import CTA from "@/components/CTA";
import { getDailyPrompt } from "@/actions/public";
import { SignUpButton } from "@clerk/nextjs";

const features = [
  {
    icon: Book,
    title: "Daily Prompts",
    description:
      "Get inspired with daily writing prompts to kickstart your journaling.",
  },
  {
    icon: Sparkles,
    title: "Mood Tracking",
    description:
      "Track your mood and reflect on your emotional journey over time.",
  },
  {
    icon: Lock,
    title: "Customizable Themes",
    description:
      "Personalize your journaling space with themes that suit your style.",
  },
];

export default async function Home() {
  const advice = await getDailyPrompt();
  return (
    <div className="relative container mx-auto px-4 pt-16 pb-16">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 gradient-title">
          Your Space to InkSpire. <br />
          Your Story to Tell.
        </h1>

        <p className="text-lg md:text-xl text-orange-800 mb-8">
          Welcome to your personal journaling space, where you can express your
          thoughts and ideas freely.
        </p>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-50 via-transparent to-transparent pointer-events-none z-10" />
          <div className="bg-white rounded-2xl p-4 max-h-full mx-auto">
            <div className="border-b border-orange-100 pb-4 mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span className="text-orange-900 font-medium">
                  Today&apos;s Entry
                </span>
              </div>

              <div className="flex gap-2">
                <div className="h-3 w-3 bg-orange-200 rounded-full"></div>
                <div className="h-3 w-3 bg-orange-300 rounded-full"></div>
                <div className="h-3 w-3 bg-orange-400 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-4 p-4">
              <h3 className="text-xl font-semibold text-orange-900">
                {advice ? advice : "My Thoughts Today."}
              </h3>
              <Skeleton className="h-4 rounded w-3/4 bg-orange-100" />
              <Skeleton className="h-4 rounded w-full bg-orange-100" />
              <Skeleton className="h-4 rounded w-2/4 bg-orange-100" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <SignUpButton forceRedirectUrl="/dashboard">
            <Button
              variant="journal"
              className="px-8 py-6 rounded-full flex items-center gap-2"
            >
              Start Writing <ChevronRight className="h-5 w-5" />
            </Button>
          </SignUpButton>
          <Link href="#features">
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full border-orange-600 text-orange-600 hover:bg-orange-100"
            >
              Learn More <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <section
        id="features"
        className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {features.map((feature, index) => (
          <Card key={feature.title} className="shadow-lg">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-orange-600 mb-2" />
              </div>
              <h3 className="font-semibold text-xl text-orange-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-orange-700">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="space-y-24 mt-24">
        <div className="space-y-32 mt-28">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <div className="h-14 w-14 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full flex items-center justify-center shadow-md">
                <FileText className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="gradient-title text-3xl font-extrabold text-orange-900 tracking-tight">
                Rich Text Editor
              </h3>
              <p className="text-lg text-orange-700 leading-relaxed">
                Express yourself fully with our powerful editor featuring:
              </p>
              <ul className="space-y-4">
                {["Format text with ease", "Embed links"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <div className="h-2.5 w-2.5 rounded-full bg-orange-400 group-hover:scale-125 transition-transform" />
                    <span className="text-orange-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 bg-white rounded-3xl shadow-2xl p-6 border border-orange-100 hover:shadow-orange-200 transition-shadow">
              {/* Editor Preview */}
              <div className="flex gap-3 mb-6">
                <div className="h-8 w-8 rounded bg-orange-100" />
                <div className="h-8 w-8 rounded bg-orange-100" />
                <div className="h-8 w-8 rounded bg-orange-100" />
              </div>
              <div className="h-4 bg-orange-50 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-orange-50 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-orange-50 rounded w-2/3 animate-pulse"></div>
              <div className="h-4 bg-orange-50 rounded w-1/3 animate-pulse"></div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-14 items-center md:flex-row-reverse">
            <div className="space-y-6 md:order-2">
              <div className="h-14 w-14 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full flex items-center justify-center shadow-md">
                <BarChart2 className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="gradient-title text-3xl font-extrabold text-orange-900 tracking-tight">
                Mood Analytics
              </h3>
              <p className="text-lg text-orange-700 leading-relaxed">
                Track your emotional journey with powerful analytics:
              </p>
              <ul className="space-y-4">
                {["Visual mood trends", "Pattern recognition"].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-3 group">
                      <div className="h-2.5 w-2.5 rounded-full bg-orange-400 group-hover:scale-125 transition-transform" />
                      <span className="text-orange-800">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="space-y-4 bg-white rounded-3xl shadow-2xl p-6 border border-orange-100 hover:shadow-orange-200 transition-shadow md:order-1">
              {/* Analytics Preview */}
              <div className="h-40 bg-gradient-to-t from-orange-200 to-orange-50 rounded-xl shadow-inner"></div>
              <div className="flex justify-between">
                <div className="h-4 w-16 bg-orange-100 rounded"></div>
                <div className="h-4 w-16 bg-orange-100 rounded"></div>
                <div className="h-4 w-16 bg-orange-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialCarosel />

      {/* Frequently Asked Questions Section */}
      <FreqAskedQues />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
