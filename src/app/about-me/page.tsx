import Image from "next/image";
import Profile from "@/public/profile.jpg";

export default function About() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 bg-black">
      <section className="about flex flex-col md:flex-row items-center justify-between mt-8">
        {/* Profile Image Section */}
        <div className="about-img mb-8 md:mb-0 w-full md:w-1/2">
          <Image
            src={Profile}
            alt="about-img"
            className="rounded-full object-cover w-full"
            height={400} // Adjust as per your image dimensions
            width={400}  // Adjust as per your image dimensions
          />
        </div>

        {/* About Text Section */}
        <div className="about-text w-full md:w-1/2 pl-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
            About <span className="text-blue-500">Me</span>
          </h2>
          <h4 className="text-lg text-white mt-2">Frontend Developer</h4>
          <p className="text-white mt-4 text-base sm:text-lg">
            I’m a frontend developer with a strong focus on building responsive and visually appealing web applications. My skill set includes HTML, CSS, TypeScript, and Next.js, enabling me to create smooth, interactive user experiences. I’m passionate about crafting clean, optimized code and bringing designs to life in a way that engages users and enhances functionality. Whether it’s creating modern UIs or ensuring a seamless user journey, I aim to combine aesthetics with performance in every project. My goal is to continuously grow as a developer and contribute to meaningful, impactful web applications.
          </p>
        </div>
      </section>
    </div>
  );
}
