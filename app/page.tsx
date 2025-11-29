"use client";
import Image from "next/image";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="font-sans text-gray-900">
      {/* NAVBAR */}
      <nav className="w-full px-8 py-4 flex justify-between items-center fixed bg-[#f2f4f6] ">
        <div className="font-bold text-xl">LinVex</div>
        <ul className="flex gap-8 text-sm items-center">
          <li>Home</li>
          <li>Our products</li>
          <li>Services</li>
          <li>About</li>
          <li className="px-4 py-2 bg-white text-black rounded-xl cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="pt-32 px-8 grid md:grid-cols-2 items-center gap-10 bg-[#f2f4f6] pb-24">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            The only smart solution <br /> you&apos;ll ever need.
          </h1>
          <p className="mt-6 text-gray-600 max-w-md">
            At LinVex, we blend innovation with automation to create seamless,
            intelligent experiences. Discover our solutions designed to enhance
            efficiency, security, and control.
          </p>

          <button className="mt-8 px-6 py-3 bg-black text-white rounded-xl shadow hover:opacity-80 transition">
            Discover our Products and Services
          </button>

          <p className="mt-10 text-sm text-gray-700 cursor-pointer">
            Explore ↓
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/HeroDevice.png"
            alt="device"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>
      </section>
      <section
      className="h-screen w-full bg-[url('/SectionFigure.png')] bg-cover bg-center bg-no-repeat"
      >
      </section>


      

      {/* PRODUCT STRIPS */}
      <section className=" h-screen w-full bg-white flex flex-row items-center justify-between ">
        <h3 className="text-3xl font-bold mb-10">Revolutionize Your Life Experience</h3>
        <div
        className="mr-20 w-1/2 h-full bg-[url('/ExpFigure.png')] bg-cover bg-center bg-no-repeat"
        ></div>
        
      </section>


      {/* OUR PRODUCTS */}
<section className=" py-24 flex flex-col items-center bg-[#f9f9f9]">
  <h3 className="text-4xl text-center font-bold mb-16">Our Products</h3>

  <div className="relative w-10/12">
    {/* LEFT BUTTON */}
    <button
      onClick={() => scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" })}
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow z-10 hover:bg-gray-100"
    >
      <ChevronLeft size={24} />
    </button>

    {/* RIGHT BUTTON */}
    <button
      onClick={() => scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" })}
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow z-10 hover:bg-gray-100"
    >
      <ChevronRight size={24} />
    </button>

    {/* SCROLLING CONTAINER */}
    <div
      ref={scrollRef}
      className="flex self-center min-w-10/12  gap- overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar  "
    >
      
        <div className="snap-center shrink-0 w-1/4">
          <ProductCard
            title="LinVex LOOC"
            desc="Upgrade your traditional door with an app-controlled fingerprint access lock."
            img="/Product_Pic_1.png"
          />
        </div>

        <div className="snap-center shrink-0 w-1/4">
          <ProductCard
            title="LinVex Access"
            desc="Full fingerprint smart access."
            img="/Product_Pic_1.png"
          />
        </div>

        <div className="snap-center shrink-0 w-1/4">
          <ProductCard
            title="LinVex AQUA"
            desc="Smart water automation system."
            img="/Product_Pic_1.png"
          />
        </div>

        <div className="snap-center shrink-0 w-1/4">
          <ProductCard
            title="LinVex Garage"
            desc="Automated garage access system."
            img="/Product_Pic_1.png"
          />
        </div>
        <div className="snap-center shrink-0 w-[300px]">
          <ProductCard
            title="LinVex Garage"
            desc="Automated garage access system."
            img="/Product_Pic_1.png"
          />
        </div>
        <div className="snap-center shrink-0 w-[300px]">
          <ProductCard
            title="LinVex Garage"
            desc="Automated garage access system."
            img="/Product_Pic_1.png"
          />
        </div>
    </div>
  </div>

</section>

     
      {/* FEATURES */}
      <section className="grid md:grid-cols-2 gap-12 px-8 py-24 bg-[#fafafa]">
        <Image src="/app_Pic.png" width={400} height={800} alt="app demo" />

        <div>
          <h3 className="text-3xl font-bold mb-6">
            Linvex Smart Living, Effortlessly Connected
          </h3>

          <Feature text="Intelligent Automation" />
          <Feature text="Hands-Free Access" />
          <Feature text="Self-Optimizing Energy" />
          <Feature text="Future-Ready Integrations" />
          <Feature text="Instant Control, Anywhere" />

          <div className="flex gap-4 mt-8">
            <Image src="/globe.svg" height={40} width={40} alt="globe" />
            <Image src="/next.svg" height={40} width={40} alt="next" />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="grid md:grid-cols-2 bg-white px-8 py-24 items-center gap-10">
        <div>
          <h3 className="text-3xl font-bold mb-4">Bring Your Imagination to Reality.</h3>
          <p className="text-gray-600 max-w-md">
            Turn your ideas into fully connected smart solutions. From concept to
            final product — we transform your vision into seamless technology.
          </p>

          <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg shadow hover:opacity-80">
            Contact Us
          </button>
        </div>

        <Image
          src="/Geometry_pic.png"
          alt="graphic"
          width={500}
          height={500}
          className="w-full object-cover"
        />
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-xl mb-4">Linvex</h4>
            <button className="px-4 py-2 bg-white text-black rounded-lg">
              Contact Us
            </button>
          </div>

          <ul className="space-y-2 text-gray-300">
            <li>Our Products</li>
            <li>FAQ</li>
            <li>Build Your Imagination</li>
          </ul>

          <div>
            <p className="mb-4">See Us on Social Media</p>
            <div className="flex gap-4 text-xl">
              <span>🔗</span>
              <span>📸</span>
              <span>✖️</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProductCard({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <Image src={img} alt={title} width={250} height={250} className="mx-auto" />
      <h4 className="font-semibold mt-4">{title}</h4>
      <p className="text-gray-600 text-sm mt-2">{desc}</p>
      <button className="mt-4 text-sm border px-4 py-2 rounded-lg">
        MORE DETAILS
      </button>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-center mt-3">
      <span className="text-xl">✔</span>
      <p>{text}</p>
    </div>
  );
}
