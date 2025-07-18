import React, { useState } from "react";

const faqs = [
  {
    question: "Is transportation available 24 hours?",
    answer: "Yes, we operate 24 hours a day, 7 days a week. Whether your boat arrives early in the morning or late at night, our driver will be ready to pick you up anytime.",
  },
  {
    question: "Can I choose my own destinations?",
    answer: "Absolutely! You are free to decide where you want to go. Whether it’s a direct hotel transfer, a stop at tourist attractions, or a full-day tour — we can adjust to your preferences.",
  },
  {
    question: "How do I book a driver?",
    answer: "You can book through our website, WhatsApp, or by calling us directly. We recommend booking in advance, especially during Bali’s high seasons.",
  },
  {
    question: "Are your drivers experienced?",
    answer: "Yes! All our drivers are local professionals — friendly, experienced, and English-speaking. They can also give you tips about hidden gems around Bali.",
  },
  {
    question: "Can I make stops along the way?",
    answer: "Of course! You’re welcome to stop for photos, food, or shopping. Just let us know in advance so we can adjust the schedule accordingly.",
  },
  {
    question: "Do you offer only transfers or also day tours?",
    answer: "We offer both. You can book a one-way transfer, a full-day private tour, or even multi-day packages. Our drivers can also serve as local guides if needed.",
  },
  {
    question: "Is your transportation service safe?",
    answer: "Your safety is our top priority. Our drivers are licensed and experienced, our vehicles are insured, and we always follow traffic regulations. Your trip will be smooth and secure.",
  },
];


export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* GWK IMAGE */}
        <div>
          <img
            src="/gwk.jpg"
            alt="GWK Statue"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* FAQ TEXT */}
        <div>
          <p className="text-base uppercase tracking-widest text-black mb-2 font-monserrat font-medium">
            Frequently Asked Questions
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-black mb-10 leading-tight font-montserrat">
            Got questions?{" "}
            <span className="text-[#1B3C53] font-bold">
              We’re here to help you find the answers
            </span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  className="faq-toggle flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-black">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="mt-2 text-gray-600 text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
