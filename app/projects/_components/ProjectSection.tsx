"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import Laptop from "./Laptop";
import gsap from "gsap";
import { BiArrowFromRight } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight, BsArrowRightCircle } from "react-icons/bs";

const projects = [
  {
    title: "Pitchify",
    description:
      "Pitchify is a dynamic platform empowering startups to pitch their innovative ideas and connect with a vibrant community, fostering recognition and collaboration.",
    bgColor: "bg-pink-500",
    url:"https://pitchify-gray.vercel.app/",
    github:"https://github.com/Arman6117/pitchify"
  },
  {
    title: "Spotify Clone",
    description:
      "A dynamic web replica of the renowned music streaming platform, Spotify.This project encapsulates key features such as song playback, playlists,and user authentication,mirroring the original Spotify’s user experience.",
    bgColor: "bg-emerald-400",
    url: "https://spotify-clone-xi-orcin.vercel.app/",
    github:"https://github.com/Arman6117/Spotify"

  },
  {
    title: "Codraw",
    description:
      "Codraw is a real-time collaborative whiteboard platform designed to empower teams and individuals to brainstorm, ideate, and create together seamlessly. With features like live editing, commenting, and interactive reactions, it transforms teamwork into a visual and engaging experience.",
    bgColor: "bg-slate-200",
    url:"https://codraw-theta.vercel.app/",
    github:"https://github.com/Arman6117/Codraw"
  },
  {
    title: "Finsmart",
    description:
      "FinSmart is a personal finance management platform that helps you track expenses, set budgets, and achieve financial goals effortlessly. With insightful analytics and smart tools, it makes managing your money simple and effective.",
    bgColor: "bg-blue-400",
    url:"https://finansmart-woad.vercel.app/",
    github:"https://github.com/Arman6117/FinanSmart"
  },
];

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [nextBgColor, setNextBgColor] = useState(projects[0].bgColor);

  const nextProject = () => {
    if (isAnimating) return;
    const nextIndex = (currentIndex + 1) % projects.length;

    setNextBgColor(projects[nextIndex].bgColor);
    setAnimationClass("animate-revealRight");
    animateOut();

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setAnimationClass("");
      setIsAnimating(false);
    }, 1000);
  };

  const prevProject = () => {
    if (isAnimating) return;
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

    setNextBgColor(projects[prevIndex].bgColor);
    setAnimationClass("animate-revealLeft");
    animateOut();

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(prevIndex);
      setAnimationClass("");
      setIsAnimating(false);
    }, 1000);
  };

  const animateOut = () => {
    animateTextOut();
    animateLaptopOut();
    animateDescOut();
    animateButtonOut();
  };

  const animateTextIn = () => {
    gsap.fromTo(
      ".animate-text",
      {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      }
    );
  };
  const animateLaptopIn = () => {
    gsap.fromTo(
      ".animate-laptop-in",
      {
        x: 400,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      }
    );
  };
  const animateDescIn = () => {
    gsap.fromTo(
      ".animate-desc-in",
      {
        x: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.6,
        delay: 0.7,
      }
    );
  };
  const animateButtonIn = () => {
    gsap.fromTo(
      ".animate-button-in",
      {
        y: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.6,
        delay: 0.7,
      }
    );
  };

  const animateTextOut = () => {
    gsap.fromTo(
      ".animate-out",
      {
        x: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.2,
      },
      {
        x: -100,
        opacity: 0,
        duration: 0.2,

        ease: "power2.out",
      }
    );
  };
  const animateLaptopOut = () => {
    gsap.fromTo(
      ".animate-laptop-out",
      {
        x: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.2,
      },
      {
        x: 400,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      }
    );
  };
  const animateDescOut = () => {
    gsap.fromTo(
      ".animate-desc-out",
      {
        x: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.2,
      },
      {
        x: -100,
        opacity: 0,
        duration: 0.2,
        delay: 0.2,
        ease: "power2.out",
      }
    );
  };
  const animateButtonOut = () => {
    gsap.fromTo(
      ".animate-button-out",
      {
        y: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.2,
      },
      {
        y: -100,
        opacity: 0,
        duration: 0.2,
        delay: 0.2,
        ease: "power2.out",
      }
    );
  };
  useEffect(() => {
    animateTextIn();
    animateLaptopIn();
    animateDescIn();
    animateButtonIn();
  }, [currentIndex]);

  return (
    <section className="mt-12 bg- md:flex-row flex-col rounded-md md:p-3 md:h-4/6 h-full w-full backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-400 flex items-center relative">
      <div
        className={`absolute inset-0 backdrop-filter backdrop-blur-md bg-opacity-10 transition-all duration-600 ${animationClass} ${nextBgColor} rounded-md`}
      />

      <div className="relative z-10 md:h-full h-auto flex flex-col gap-3 md:w-[45%]">
        <h1 className="text-7xl font-bold leading-[6rem] animate-text animate-out uppercase">
          {projects[currentIndex].title}
        </h1>
        <div className="p-3 animate-desc-in hidden md:inline-block animate-desc-out">
          <p>{projects[currentIndex].description}</p>
        </div>
        <div className="flex gap-4 mt- animate-button-out animate-button-in  items-center justify-center">
          <Button label="Visit" linkField={projects[currentIndex].url} />
          <Button label="Code" linkField= {projects[currentIndex].github} />
        </div>
      </div>
      <hr className="bg-slate-600 w-0.5 h-full hidden md:inline-block md:rotate-0 rotate-90" />
      <div className="h-full md:w-[55%]  w-screen  animate-laptop-out animate-laptop-in">
        <Laptop url={projects[currentIndex].url} />
      </div>
      <div className="flex absolute mb-3 md:inset-x-1/2 gap-0.5  bottom-0  items-center justify-center">
        <div className="z-20">
          <div
            className="w-12 h-12 relative left-1/2 md:right-20 md:left-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md  flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-colors duration-300"
            onClick={prevProject}
            aria-label="Previous Project"
          >
            <BsArrowLeft className="text-white text-2xl transform " />
          </div>
        </div>

        <div className=" z-20">
          <div
            className="w-12 h-12 relative left-1/2 md:right-12 md:left-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md  flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-colors duration-300"
            onClick={nextProject}
            aria-label="Next Project"
          >
            <BsArrowRight className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
