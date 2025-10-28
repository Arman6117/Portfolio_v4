import Bounded from "@/components/Bounded";
import React from "react";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Avatar from "./_components/Avatar";
import TechList from "./_components/TechList";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Bounded className="overflow-hidden">
        <div className="grid gap-x-8  gap-y-6 md:grid-cols[2fr,1fr]">
          <Heading as="h1" size="xl" className="col-start-1">
            About Arman
          </Heading>
          <div className="prose prose-xl prose-slate prose-invert col-start-1">
            Hey, I&apos;m Arman! I hail from India, where the vibrant culture
            and rich diversity have always inspired my creativity. Growing up,
            I&apos;ve been captivated by the fusion of art and technology, and
            it&apos;s what led me into the world of development.
            <br />
            <br />
            As a self-taught developer, I&apos;ve embarked on a journey to blend
            my passion for design with technical expertise. Specializing in
            front-end development, I craft immersive digital experiences that
            seamlessly merge functionality with aesthetics.
            <br />
            <br />
            Beyond coding, I immerse myself in the realm of digital art,
            constantly exploring new techniques and styles. You&apos;ll often
            find me delving into the latest trends in web animation, pushing the
            boundaries of what&apos;s achievable in the digital realm.
            <br />
            <br />
            Join me as I continue to push the boundaries of what&apos;s possible
            in the digital world!
          </div>
          <Button
            showIcon
            linkField="https://drive.google.com/file/d/1-eswfIei0H0q5rZWQpK9R1mnz53gmTBs/view?usp=drive_link"
            label="Resume"
          />
          <Avatar
            image="/image/avatar.jpg"
            className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
          />
        </div>
        <div className="mt-32 flex-col gap-10">
          <Heading as="h2" size="lg">
            Experience
          </Heading>
          <div className="flex flex-col gap-3 mt-10">
            <div className="rounded-lg border  border-slate-700 bg-slate-800/50 p-8">
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl md:text-4xl font-semibold text-slate-100">
                  Fullstack Developer Intern
                </h3>
                <p className="text-xl md:text-2xl text-slate-300">
                  AIS Solutions
                </p>
                <p className="text-base md:text-lg text-slate-400">
                  April 2025 - Present
                </p>
                <p className="mt-4 text-lg md:text-xl leading-relaxed text-slate-300">
                  Currently working on a full-stack education management
                  platform using Next.js, Node.js, MongoDB, and Tailwind CSS.
                  Key tasks include building dynamic admin dashboards, designing
                  REST APIs, handling course/module management, and implementing
                  role-based features. This internship is helping me strengthen
                  my MERN stack skills while delivering real-world solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32">
          <Heading as="h2" size="lg">
            What I Use
          </Heading>
        </div>
      </Bounded>
      <TechList />
    </div>
  );
};

export default page;
