"use client";
import React from "react";
import {
  TextRevealCard,
} from "./ui/text-reveal-card";

function MadeBy(){
  return (
    <div className="flex items-center justify-center h-[40rem] rounded-2xl w-auto">
      <TextRevealCard
        text="Website Made By hover me to know...."
        revealText="Santosh Kumar "
      >
      </TextRevealCard>
    </div>
  )
}

export default MadeBy