"use client";

import About from "@/components/About";
// import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HackathonSection from "@/components/HackathonSection";
import GitHubState from "@/components/GitHubState";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

// import {SupportMe} from "@/components/SupportMe";

export default function Home() {
  return (
    <main className="relative min-h-screen max-w-3xl font-sans mx-auto px-5 pt-15 pb-10 overflow-x-hidden animate-fadein">
      <article>
        {/* About Section */}
        <section aria-label="About">
          <About />
        </section>



        {/* Projects */}
        <section aria-label="Projects">
          <Projects />
        </section>

        {/* Blogs */}
        {/* <section aria-label="Blog Posts">
          <Blogs />
        </section> */}



        {/* Open Source */}
        <section aria-label="Open Source Contributions">
          <OpenSource />
        </section>

        {/* GitHub State */}
        <section aria-label="GitHub Activity">
          <GitHubState />
        </section>

        {/* Hackathons */}
        <section aria-label="Hackathons">
          <HackathonSection />
        </section>



        {/* SupprtME */}
        {/* <SupportMe /> */}
      </article>

      {/* skills  */}
      <section aria-label="Skills">
        <Skills />
      </section>


      {/* Contact Section */}
      <section id="contact" aria-label="Contact Information">
        <Contact />
      </section>


      {/* Footer */}
      <Footer />
    </main>
  );
}
