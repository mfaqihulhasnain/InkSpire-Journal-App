import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { ChevronRight } from "lucide-react";
import { SignUpButton } from "@clerk/nextjs";

const CTA = () => {
  return (
    <div className="mt-24 px-4 md:px-8">
      <Card className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-white to-orange-50 backdrop-blur-sm shadow-lg rounded-3xl border border-orange-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        {/* Decorative gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-transparent blur-2xl" />

        <CardContent className="relative p-12 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-900 tracking-tight drop-shadow-sm">
            Join Our Creative Community
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-orange-700 mt-4 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with passionate writers, share your stories, and unlock
            exclusive features to bring your ideas to life.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SignUpButton forceRedirectUrl="/">
              <Button
                size="lg"
                variant="journal"
                className="group relative overflow-hidden px-8 py-6 text-lg font-semibold rounded-full shadow-md bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:scale-105 transition-transform duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Get Started For Free
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                {/* Animated background shine */}
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </SignUpButton>
            
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold rounded-full border-orange-600 text-orange-600 hover:bg-orange-100 transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CTA;
