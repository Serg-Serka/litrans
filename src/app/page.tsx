import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Welcome text */}
      <h1 className="text-3xl font-bold my-8">Welcome to Litrans!</h1>

      {/* Full-width image */}
      <div className="relative w-full h-72 md:h-96">
        <Image
          src="/images/home_1.jpeg"
          alt="Home Top Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Row with two linked images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 w-full max-w-4xl">
        <Link href="/trading" className="relative h-60 group">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-2xl font-bold z-10">Trading</span>
          </div>
          <Image
            src="/images/home_2.jpeg" // Replace with actual image path
            alt="Trading"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </Link>

        <Link href="/logistic" className="relative h-60 group">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-2xl font-bold z-10">Logistic</span>
          </div>
          <Image
            src="/images/home_3.jpeg" // Replace with actual image path
            alt="Logistic"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
}
