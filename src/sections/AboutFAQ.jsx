import React, { useState } from "react";
import { faqs } from "../data/restaurantData";

function AboutFAQ() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <section className="bg-orange-50/40 px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            FAQ
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            Find answers to some common questions about Savora.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:translate-1.5 transition duration-300  "
            >
              {/* Question + Button */}
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                onClick={() => setIsOpen(isOpen === faq.id ? null : faq.id)}
              >
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                  {faq.question}
                </h3>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-lg font-semibold text-orange-600">
                  {isOpen === faq.id ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {isOpen === faq.id && (
                <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-6 text-gray-600 sm:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutFAQ;
