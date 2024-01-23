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
            Hey, I’m Andy! I grew up in the Pacific Northwest and love all
            things creative. From the misty forests to the vibrant city streets,
            my surroundings have always fueled my passion for design and coding.
            <br />
            <br />
            As a self-taught developer, I found my calling in blending artistic
            flair with technical skill. My journey has led me to specialize in
            front-end development, where I craft interactive experiences that
            are not just functional, but also visually stunning.
            <br />
            <br />
            When I&apos;m not coding,you&apos;ll find me experimenting with
            digital art or exploring the latest in web animation.
            <br />
            <br />
            Join me as I continue to push the boundaries of what&apos;s possible
            in the digital world!
          </div>
          <Button showIcon linkField="/" label="Resume" />
          <Avatar
            image="/image/avatar.jpg"
            className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
          />
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
