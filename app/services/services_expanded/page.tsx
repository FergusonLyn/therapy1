import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services_Expanded = () => {
  return (
    <div>
      <div className="navbar font-normal text-white text-sm p-8 flex justify-center">
        <ul className="flex items-center gap-4 ">
          <li>
            {" "}
            <Link href="./about">About Us</Link>{" "}
          </li>
          <li>
            <Link href="./services">Services</Link>{" "}
          </li>
          <li>Blog</li>
          <li>Contact Us</li>
          <li>Counseling</li>
          <li className="ml-auto">Get Started</li>
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1>Stress Management </h1>
          <p>
            Stress is an inescapable of part of modern life , but its impact can
            be managed even minimized. Our stress management program provides
            comprehensive support to help you regain control of your work and
            your life.
          </p>
        </div>
        <div>
          <Image src="" alt="" width={500} height={400} />
        </div>
      </div>
      <div >
        <div>
          <h1>What is it ?</h1>
        </div>
        <div className="flexBox ">
          <p>
            We understand that weight of stress can take a toll on your
            well-being. Introducing personal and group therapy for the stress
            Management Psychological Treatment, a holistic approach that
          </p>
          <p>
            empowers you to regain control over your life and find lasting
            relief from the burdens of stress through our personalized
            assessment, practical coping techniques, and regular therapy
            sessions.
          </p>
        </div>
      </div>
      <div>
        <h1>What you will get </h1>
        <div className="flexBox">
          <div className="flexBox flex-col">
            <div className="icon"></div>
            <h3>Improved Mental health</h3>
            <p>
              Effective work life stress management contribute to better
              physical and mental health in a long run
            </p>
          </div>
          <div className="flexBox flex-col">
            <div className="icon"></div>
            <h3>Enhanced Mental Resilience</h3>
            <p>
              You will develop increased resilience to face ore of life’s
              challenges and ready to manage more stress in your life
            </p>
          </div>
          <div className="flexBox flex-col">
            <div className="icon"></div>
            <h3> Better Personal Relationships </h3>
            <p>
              Reduced stress can lead to improved life relationships and more
              effective communication with each other.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services_Expanded;
