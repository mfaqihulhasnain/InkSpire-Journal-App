"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import testimonials from "@/data/testimonials";
import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialCarosel = () => {
  return (
    <div className="mt-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-orange-900 mb-14"
      >
        What Our Writers Say
      </motion.h2>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="bg-gradient-to-br from-orange-50 to-white 
                             backdrop-blur-sm shadow-lg rounded-2xl 
                             border border-orange-100 p-6 
                             hover:shadow-xl hover:-translate-y-1 
                             transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <blockquote className="space-y-5">
                      <Quote className="text-orange-400 w-8 h-8 opacity-80" />
                      <p className="text-orange-800 italic leading-relaxed text-lg">
                        “{testimonial.text}”
                      </p>
                      <footer className="mt-4">
                        <div className="font-semibold text-orange-900 text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-orange-600">
                          {testimonial.role}
                        </div>
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TestimonialCarosel;
