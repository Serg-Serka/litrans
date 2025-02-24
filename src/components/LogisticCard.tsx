import Image from "next/image";
import React from "react";

interface LogisticCardProps {
  imageSrc: string;
  title: string;
}

const LogisticCard: React.FC<LogisticCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg flex flex-col h-full">
      <div className="relative w-full h-60">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg"/>
      </div>
      <div className="flex-grow"></div>
      {/* Pushes title to the bottom */}
      <h2 className="text-lg font-semibold text-center p-4">{title}</h2>
    </div>
  );
};

export default LogisticCard;
