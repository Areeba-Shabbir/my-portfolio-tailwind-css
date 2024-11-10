import Image from "next/image";
import Profile from "@/public/profile.jpg";

export default function Home() {
  return (
    <section className="flex items-center justify-center gap-32 bg-[#081b29] min-h-screen py-20 px-[9%]">
      <Image
        className="rounded-full overflow-hidden max-w-[500px] w-full h-auto shadow-[0_0_25px_#00abf0] transition-transform duration-300 ease-in-out"
        src={Profile}
        alt="Profile picture"
      />
      <div className="text-center max-w-[600px]">
        <h1 className="text-6xl font-extrabold leading-tight text-[#f6f8f9]">
          Hi, I'm <span className="text-[#00abf0]">Areeba Shabbir</span>
        </h1>
        <h3 className="text-4xl font-bold text-[#ededed] mb-4">Frontend Developer</h3>
        <p className="text-lg leading-relaxed text-[#ededed]">
          "I am a Frontend Developer with a passion for creating clean, responsive,
          and user-friendly websites. Using technologies like HTML, CSS, JavaScript,
          TypeScript, and Next.js, I build dynamic web applications that provide
          seamless user experiences. My goal is to turn complex ideas into intuitive
          designs, ensuring performance and accessibility across all devices."
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-[#00abf0] text-[#262525] py-3 px-6 rounded-md transition-colors duration-300 hover:bg-transparent hover:text-[#00abf0] border border-[#00abf0]">
            Hire Me
          </button>
          <button className="bg-[#262525] text-[#00abf0] py-3 px-6 rounded-md transition-colors duration-300 hover:bg-[#00abf0] hover:text-[#262525] border border-[#00abf0]">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
