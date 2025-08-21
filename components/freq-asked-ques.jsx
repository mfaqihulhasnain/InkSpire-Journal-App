import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "@/data/faqs";

const FreqAskedQues = () => {
  return (
    <section className="mt-24 px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center text-orange-900 mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-orange-700 max-w-2xl mx-auto mb-12">
        Got questions? We’ve got answers. Here are the most common queries we
        receive.
      </p>

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl mx-auto rounded-lg border border-orange-200 shadow-sm bg-orange-50/50"
      >
        {faqs.map((faq) => {
          return (
            <AccordionItem
              value={`item-${faq.id}`}
              key={faq.id}
              className="border-b border-orange-200"
            >
              <AccordionTrigger className="text-orange-900 text-lg font-medium px-4 py-3 hover:bg-orange-100 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-orange-700 px-4 pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};

export default FreqAskedQues;
