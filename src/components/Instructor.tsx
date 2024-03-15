'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Link from "next/link";
import MadeBy from "./Madeby";

const instructors = [
    {
      id: 1,
      name: 'Santosh Kumar',
      designation: 'Coding Mentor',
      image:
        'https://images.pexels.com/photos/17771457/pexels-photo-17771457/free-photo-of-santosh7321.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      likedinProfile: 'https://www.linkedin.com/in/santosh-kumar-a371a4235',
    },
    {
      id: 2,
      name: 'Nishant Ranjan',
      designation: 'Problem Solver',
      image:
        'https://images.pexels.com/photos/20629318/pexels-photo-20629318/free-photo-of-nishant-ranjan.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
      likedinProfile: 'https://www.linkedin.com/in/nishant-ranjan-b30a1a282'
    },
    {
      id: 3,
      name: 'Sanjeev Kumar',
      designation: 'Douth Solver',
      image:
        'https://images.pexels.com/photos/20425179/pexels-photo-20425179.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      id: 4,
      name: 'Anu Priya',
      designation: 'Douth Solver',
      image:
        'https://images.pexels.com/photos/20434545/pexels-photo-20434545.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      id: 5,
      name: 'Shritosh Sir',
      designation: 'HOD CSE',
      image:
        'https://images.pexels.com/photos/20629140/pexels-photo-20629140/free-photo-of-hod.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
  ];

  function Instructors() {
    return (
      <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
          <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
              <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your Coding journey</p>
              <div className="flex flex-row items-center justify-center mb-10 p-3 pr-12 pl-9 bg-slate-400 rounded-3xl max-md:w-full">
                  <AnimatedTooltip items={instructors} />
              </div>
          </WavyBackground>
      </div>
    )
  }
  
  export default Instructors