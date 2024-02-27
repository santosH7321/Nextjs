"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
      title: " Welcome to our GECJ Coding Club!",
      description:
        "Are you passionate about coding and eager to learn in a fun and supportive environment? Look no further! Our Collaborative Coding Club is the perfect place for enthusiasts of all skill levels to come together, collaborate, and build amazing projects.",
    },
    {
      title: "🌟 Where Vision Meets Innovation! 🌟",
      description:
        "At our coding club, we envision a future where every member has the opportunity to unleash their creativity, drive innovation, and make a meaningful impact through the power of coding.",
    },
    {
      title: "Skill Development",
      description:
        "Whether you're a beginner or an experienced coder, there's always something new to learn. Through workshops, coding challenges, and peer-to-peer mentoring, we strive to help each other grow and develop our skills.",
    },
    {
      title: "Knowledge Sharing",
      description:
        "Sharing is caring! We foster a culture of knowledge exchange where members can share their expertise, insights, and tips with one another, enriching everyone's learning experience.",
    },
    {
      title: "Community Engagement",
      description:
        "Beyond coding, we're a vibrant community that values inclusivity, diversity, and camaraderie. We organize social events, hackathons, and tech talks to connect with like-minded individuals and expand our network.",
    },
    {
      title: "Building a Better Future",
      description:
        "Technology has the potential to solve some of the world's most pressing challenges, from climate change and healthcare to education and social justice. Our vision is to harness the power of coding to drive positive change and create a better future for all.",
    },
  ];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
