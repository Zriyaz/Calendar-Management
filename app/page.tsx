import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
import { auth } from "./lib/auth";
import { Hero } from "./components/landingPage/Hero";
import { Logos } from "./components/landingPage/Logos";
import { Features } from "./components/landingPage/Features";
import { Testimonial } from "./components/landingPage/Testimonial.tsx";
import { CTA } from "./components/landingPage/Cta";

export default async function Home() {
  const session = await auth()

  if (session?.user) {
    return redirect("/dashboard")
  }
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Testimonial />
      <CTA />
    </div>
  );
}
