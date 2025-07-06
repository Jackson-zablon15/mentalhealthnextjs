"use client";
import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    photo: "/assets/testimonial1.jpg",
    quote:
      "I used to spend hours scrolling through TikTok at night, thinking it helped me relax. But I started waking up tired, anxious, and angry for no reason. I didn't even realize how much social media was affecting my mood until Mental Health Africa came to our school. Their session on digital wellness opened my eyes. Now I take breaks,read journals, and even sleep better. I feel like I've taken back control of my mind",
    name: "Asha",
    title: "Secondary Student",
  },
  {
    photo: "/assets/testimonial2.jpg",
    quote:
      "As a young man, I always felt like I had to hide when I was struggling mentally. Mental health wasnt something we talked about. Then I attended a workshop by Mental Health Africa during campus week. The speakers were young, real, and honest. It made me feel seen. Since then, I've joined their online community and even help run small talks in my neighborhood. It's not just about awareness—it's about healing together",
    name: "Brian",
    title: "University Student",
  },
  {
    photo: "/assets/testimonial3.jpg",
    quote:
      "When your job is online, you think burnout is normal. But I hit a wall—emotionally and mentally. A friend told me about Mental Health Africa and I joined one of their digital detox challenges. It changed my relationship with my phone and, honestly, with myself. I ve learned to set boundaries and prioritize my peace. Now, I talk about mental wellness openly with my followers. Thats the impact they had on me.",
    name: "Zainab",
    title: "Content Creator",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const prevTestimonial = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section
      className="py-16 w-full"
      style={{ background: "var(--slate-blue)" }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2
          className="text-3xl font-bold mb-10 text-center"
          style={{ color: "var(--deep-red)" }}
        >
          Impact & Stories
        </h2>

        {/* Testimonial block with buttons and content */}
        <div
          className="w-full flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Prev Button */}
          <button
            onClick={prevTestimonial}
            aria-label="Previous"
            className="bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 transition"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Testimonial Content */}
          <div className="flex flex-col items-center text-center flex-1 min-w-[250px] max-w-2xl px-4">
            <img
              src={testimonials[current].photo}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4"
              style={{ borderColor: "var(--grayish-blue)" }}
            />
            <p
              className="italic mb-2 text-lg text-center"
              style={{ color: "var(--soft-white)" }}
            >
              &quot;{testimonials[current].quote}&quot;
            </p>
            <span
              className="font-semibold mt-2"
              style={{ color: "var(--deep-red)" }}
            >
              {testimonials[current].name}
            </span>
            <p
              className="italic text-sm"
              style={{ color: "var(--soft-white)" }}
            >
              {testimonials[current].title}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            aria-label="Next"
            className="bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 transition"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === current ? "bg-[var(--deep-red)]" : "bg-gray-300"
              } transition`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
