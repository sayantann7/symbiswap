import React from "react";
import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] h-full w-full items-center px-5 py-24">
        <section className=" text-white">
          <div className="mx-auto max-w-7xl px-4 py-0 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-manrope text-center font-bold text-white leading-[3.25rem]">
                Frequently asked questions
              </h2>
            </div>
            <div className="accordion-group" data-accordion="default-accordion">
              {[
                {
                  id: 1,
                  question: "What is SymbiSwap?",
                  answer:
                    "SymbiSwap is a student-to-student barter marketplace where you can exchange skills, notes, journals, and assignments instead of using money. Need a math assignment? Swap it for a poster design!",
                },
                {
                  id: 2,
                  question: "How do I post a gig on SymbiSwap?",
                  answer:
                    `Simply click the "Post" button on the feed or your profile, describe what you're offering, and what you're looking for in return. Your gig will be visible to other students instantly!`,
                },
                {
                  id: 3,
                  question: "How is trust maintained on SymbiSwap?",
                  answer:
                    "Users can rate and review each other based on successful exchanges. Plus, we have a badge system that rewards reliable and skilled traders.",
                },
              ].map(({ id, question, answer }) => (
                <div
                  key={id}
                  className="accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
                >
                  <div
                    className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-white w-full transition duration-500  accordion-active:font-medium accordion-active:text-indigo-600"
                    aria-controls={`basic-collapse-${id}`}
                  >
                    <h5>{question}</h5>
                    <svg
                      className="w-6 h-6 text-white transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div
                    id={`basic-collapse-${id}`}
                    className="accordion-content w-full overflow-hidden pr-4"
                    aria-labelledby={`basic-heading-${id}`}
                    style={{ maxHeight: "250px" }}
                  >
                    <p className="text-base text-white font-normal leading-6">
                      {answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </section>

        
        
      </div>
      {/* <About /> */}
    </>
  );
}

export default About;
