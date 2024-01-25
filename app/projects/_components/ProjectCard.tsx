"use client";
import Heading from "@/components/Heading";
import Laptop from "./Laptop";
import Button from "@/components/Button";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
type ProjectCard = {
  children: string;
  opp?: boolean;
};

const cardData = {
  "Spotify Clone": {
    url: "https://spotify-clone-xi-orcin.vercel.app/",
    githubUrl: "https://github.com/Arman6117/Spotify",
    color: "#1db954",
    description:
      "A dynamic web replica of the renowned music streaming platform, Spotify.This project encapsulates key features such as song playback, playlists,and user authentication,mirroring the original Spotify’s user experience.",
    techStack: "NextJs,Typescript,Supabase",
  },
  "Netflix Clone": {
    url: "https://netflix-clone-arman6117.vercel.app/",
    githubUrl: "https://github.com/Arman6117/Netflix",
    color: "#d81f26",
    description:
      "An interactive web-based imitation of the globally recognized streaming service, Netflix. This project incorporates essential functionalities such as video streaming, user profile management, user sign-in, and tailored recommendations, reflecting the original Netflix's immersive experience",
    techStack: "NextJs,Typescript,Firebase,MovieDb",
  },
  Keeper: {
    url: "https://keeper-keep-note.vercel.app/",
    githubUrl: "https://github.com/Arman6117/Keeper",
    color: "#f5ba13",
    description:
      "An intuitive web-based application for note-taking.This project integrates key features such as creating,and deleting notes, offering a user-friendly platform for managing important information. It mirrors the simplicity and efficiency of traditional note-taking, while adding the convenience and accessibility of digital storage.",
    techStack: "NextJs,Javascript,Firebase",
  },
  Foodle: {
    url: "https://foodle-beta.vercel.app/",
    githubUrl: "https://github.com/Arman6117/Foodle",
    color: "#ea5858",
    description:
      "Foodle is a dynamic fast food delivery platform offering a diverse selection of delicious options, from classic burgers to exotic wraps and pizzas. With prompt delivery and a wide variety of choices, Foodle ensures a satisfying culinary experience delivered right to your doorstep(not really)",
    techStack: "NextJs,Javascript,MongoDb",
  },
} as Record<
  string,
  {
    url: string;
    githubUrl: string;
    color: string;
    description: string;
    techStack: string;
  }
>;

const ProjectCard = ({ children, opp }: ProjectCard) => {
  const project = cardData[children];
  // console.log(project);
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".projectCard",
        { scaleY: 0, scale: 0 },
        { scaleY: 1, scale: 1, duration: 0.5, ease: "back.out" }
      );
    }, component);
  }, []);
  return (
    <div
      className="w-full md:h-full h- p-4 flex md:flex-row flex-col"
      ref={component}
    >
      <div className=" flex items-center md:flex-row flex-col  relative w-full ">
        <div
          className={`w-full projectCard md:h-full p-4 flex flex-col  static z-10  rounded-md`}
          style={{ backgroundColor: project.color }}
        >
          <div className="relative w-full h-full z-30 -left-64 ">
            <Laptop url={project.url} />
          </div>
          <div className="flex  flex-col absolute space-y-7 ">
            <Heading
              as="h2"
              className="relative z-30 drop-shadow-md md:left-[30rem] text-2xl -top-2 md:text-4xl  "
            >
              {children}
            </Heading>
            <div className="flex flex-col ">
              <h3
                // as="h4"
                className="relative z-30 drop-shadow-md md:left-[30rem] font-bold text-2xl -top-2   "
              >
                Description :
              </h3>
              <p className="relative z-30 drop-shadow-md md:left-[30rem] overflow-hidden  max-w-[30rem] prose-strong: hidden md:inline  -top-0 text-sm  ">
                {project.description}
              </p>
            </div>
            <div className="flex flex-col ">
              <h3
                // as="h4"
                className="relative z-30 drop-shadow-md md:left-[30rem] font-bold text-2xl -top-2   "
              >
                Tech Stack :
              </h3>
              <p className="relative z-30 drop-shadow-md md:left-[30rem] overflow-hidden  max-w-[30rem] prose-strong: hidden md:inline  -top-0 text-sm  ">
                {project.techStack}
              </p>
            </div>
          </div>
          <div className="flex space-x-10">
            <Button linkField={project.url} label="Code" />
            <Button linkField={project.url} label="Visit" />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ProjectCard;
