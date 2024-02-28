'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Santosh Kumar',
      designation: 'Coding Mentor',
      image:
        'https://images.pexels.com/photos/17771457/pexels-photo-17771457/free-photo-of-santosh7321.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      id: 2,
      name: 'Nishant Ranjan',
      designation: 'Douth Solver',
      image:
        'https://images.pexels.com/photos/20425072/pexels-photo-20425072/free-photo-of-nishant-ranjan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
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
        'https://images.pexels.com/photos/17771457/pexels-photo-17771457/free-photo-of-santosh7321.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your Coding journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors