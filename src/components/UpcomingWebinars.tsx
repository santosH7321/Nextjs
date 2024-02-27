'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: '1. Set Clear Goals',
      description:
        'Define what you want to achieve in your coding journey. Do you want to learn a specific programming language, build a particular type of project, or pursue a career in software development? Setting clear goals will help guide your learning path.',
      isFeatured: true,
    },
    {
      title: '2. Choose the Right Resources',
      description:
        'Research and select high-quality resources such as online tutorials, textbooks, coding bootcamps, or courses from reputable platforms like Coursera, Udemy, or free resources like Codecademy and freeCodeCamp. Choose resources that align with your learning style and goals.',
      isFeatured: true,
    },
    {
      title: '3. Start with Fundamentals',
      description:
        'Master the fundamentals of programming, including concepts like variables, data types, control structures, functions, and object-oriented programming (if applicable). Understanding these basics will provide a strong foundation for advanced topics.',
      isFeatured: true,
    },
    {
      title: '4. Hands-On Practice',
      description:
        'Practice coding regularly to reinforce your learning. Start with small coding exercises and gradually work your way up to more complex projects. Websites like LeetCode, HackerRank, and Project Euler offer coding challenges of varying difficulty levels.',
      isFeatured: true,
    },
    
    {
      title: '5. Work on Projects',
      description:
        'Apply your knowledge to real-world projects. Start with simple projects and gradually tackle more complex ones as you gain confidence. Building projects not only reinforces your coding skills but also helps you develop problem-solving abilities and creativity.',
      isFeatured: true,
    },
    {
      title: '6. Seek Feedback and Collaboration',
      description:
        'Join coding communities, forums, or local meetups where you can connect with other developers, seek feedback on your code, and collaborate on projects. Code review platforms like GitHub are great for sharing and receiving feedback on your projects.',
      isFeatured: true,
    },
    {
      title: '7. Learn from Mistakes',
      description:
        'Embrace failure as a learning opportunity. When you encounter bugs or errors in your code, take the time to understand why they occurred and how you can prevent similar issues in the future. Learning from mistakes is an essential part of the coding journey.',
      isFeatured: true,
    },
    {
      title: '8. Stay Updated',
      description:
        'The tech industry is constantly evolving, with new languages, frameworks, and tools emerging regularly. Stay updated with the latest trends and technologies by following tech blogs, attending conferences, and participating in online communities.',
      isFeatured: true,
    },
    {
      title: '9. Specialize and Diversify',
      description:
        'Identify areas of interest within the vast field of coding, such as web development, mobile app development, data science, machine learning, or cybersecurity. Explore different domains to find your passion, but also consider diversifying your skills to become a well-rounded developer.',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">SENIOR TIPS TO GROW IN CONDING</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Step To Master In Coding Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars