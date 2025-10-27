import React, { useState } from "react";

const Qna = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is GrowthX and how does it work?",
      answer: [
        "GrowthX is a learning platform built for professionals who want to learn business, product, and growth skills.",
        "It includes in-depth courses, live masterclasses, and community learning experiences.",
        "You can join and access curated learning programs designed by industry leaders."
      ]
    },
    {
      question: "Who can join the GrowthX learning program?",
      answer: [
        "Anyone interested in growth, marketing, and product building can join.",
        "It’s especially helpful for founders, product managers, and marketers.",
        "No prior experience is required to start."
      ]
    },
    {
      question: "Are the courses self-paced or live?",
      answer: [
        "GrowthX offers both formats.",
        "Some sessions are self-paced recorded videos, while others are live with mentors.",
        "You can attend according to your schedule."
      ]
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer: [
        "Yes, you get a completion certificate for every course.",
        "The certificate is shareable on LinkedIn and adds credibility to your profile.",
        "It’s recognized by industry professionals."
      ]
    },
    {
      question: "Is there a free trial available?",
      answer: [
        "Currently, GrowthX doesn’t offer a free trial.",
        "But you can attend a free masterclass to understand the platform’s value.",
        "This helps you decide before enrolling."
      ]
    },
    {
      question: "How can I contact support if I face issues?",
      answer: [
        "You can email the support team directly from the website.",
        "Support is available 24/7 for queries related to login, payment, or course access.",
        "They usually respond within 24 hours."
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== FAQ SECTION ===== */}
      <div className="w-full py-16 px-6 md:px-16 bg-[#0e0e0e] text-white font-[Poppins]">
        <h1 className="text-[32px] md:text-[40px] font-bold mb-12">
          Frequently asked questions
        </h1>

        <div className="space-y-6 max-w-[900px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-[18px] md:text-[20px] text-slate-200 hover:text-white transition-all duration-300">
                  {faq.question}
                </h2>
                <span
                  className={`text-2xl font-bold transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-45 text-blue-400"
                      : "text-gray-400"
                  }`}
                >
                  +
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[500px] mt-3" : "max-h-0"
                }`}
              >
                {faq.answer.map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-400 text-sm md:text-base mb-2 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== FOOTER SECTION ===== */}
      <footer className="bg-[#0a0a0a] text-gray-300 py-16 px-6 md:px-20 font-[Poppins] border-t border-gray-800">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* ABOUT */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-4">About</h2>
            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer transition-all">Our Story</li>
              <li className="hover:text-white cursor-pointer transition-all">Careers</li>
              <li className="hover:text-white cursor-pointer transition-all">Contact</li>
              <li className="hover:text-white cursor-pointer transition-all">Partners</li>
            </ul>
          </div>

          {/* COMMUNITY */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-4">Community</h2>
            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer transition-all">Events</li>
              <li className="hover:text-white cursor-pointer transition-all">Discussions</li>
              <li className="hover:text-white cursor-pointer transition-all">Mentorship</li>
              <li className="hover:text-white cursor-pointer transition-all">Alumni</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-4">Resources</h2>
            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer transition-all">Blog</li>
              <li className="hover:text-white cursor-pointer transition-all">Guides</li>
              <li className="hover:text-white cursor-pointer transition-all">FAQs</li>
              <li className="hover:text-white cursor-pointer transition-all">Help Center</li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-4">Socials</h2>
            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer transition-all">LinkedIn</li>
              <li className="hover:text-white cursor-pointer transition-all">Twitter</li>
              <li className="hover:text-white cursor-pointer transition-all">Instagram</li>
              <li className="hover:text-white cursor-pointer transition-all">YouTube</li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GrowthX Clone by Bhupendra yadav 🚀 | All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Qna;


