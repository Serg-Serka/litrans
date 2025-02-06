// import Image from "next/image";
import LogisticCard from "@/components/LogisticCard";

const logisticsData = [
  { imageSrc: "/images/logistic1.jpeg", title: "Title 1" },
  { imageSrc: "/images/logistic2.jpeg", title: "Title 2" },
  { imageSrc: "/images/logistic1.jpeg", title: "Title 3" },
  { imageSrc: "/images/logistic2.jpeg", title: "Title 4" }
];

export default function LogisticPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Our Logistic Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {logisticsData.map((item, index) => (
          <LogisticCard key={index} imageSrc={item.imageSrc} title={item.title} />
        ))}
      </div>
    </div>
  );
}
