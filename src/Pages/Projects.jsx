import React from "react"
import Page from "../components/Page"
import {
  EnvelopeIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline"
import {
  SiJavascript,
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiExpress,
  SiGithubactions,
  SiMui,
  SiNpm,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiVisualstudiocode,
  SiTailwindcss,
  SiGithub,
  SiExpo,
  SiFreelancer,
  SiTypescript,
  SiJest,
} from "react-icons/si"
import {
  FaDatabase,
  FaLaptopCode,
  FaTools,
  FaMobile,
  FaMobileAlt,
} from "react-icons/fa"
import { BsStack, BsPerson } from "react-icons/bs"
import { MdOutlineSchool } from "react-icons/md"

import Skill from "../components/Skill"
import Chip from "../components/Chip"
import Project from "../components/Project"

const BackendChip = () => {
  return (
    <Chip>
      <FaDatabase />
      <span>Back-end</span>
    </Chip>
  )
}

const FrontendChip = () => {
  return (
    <Chip
      bgColor="bg-green-100"
      textColor="text-green-900"
      ringColor="ring-green-500/10"
    >
      <FaLaptopCode />
      <span>Front-end</span>
    </Chip>
  )
}

const FullstackChip = () => {
  return (
    <Chip
      bgColor="bg-red-100"
      textColor="text-red-900"
      ringColor="ring-red-500/10"
    >
      <BsStack />
      <span>Full-stack</span>
    </Chip>
  )
}

const MobileChip = () => {
  return (
    <Chip
      bgColor="bg-purple-100"
      textColor="text-purple-900"
      ringColor="ring-purple-500/10"
    >
      <FaMobileAlt />
      <span>Mobile</span>
    </Chip>
  )
}

const SchoolChip = () => {
  return (
    <Chip
      bgColor="bg-amber-100"
      textColor="text-amber-900"
      ringColor="ring-amber-500/10"
    >
      <MdOutlineSchool />
      <span>School</span>
    </Chip>
  )
}

const FreelanceChip = () => {
  return (
    <Chip
      bgColor="bg-amber-100"
      textColor="text-amber-900"
      ringColor="ring-amber-500/10"
    >
      <SiFreelancer />
      <span>Freelance</span>
    </Chip>
  )
}

const PersonalChip = () => {
  return (
    <Chip
      bgColor="bg-amber-100"
      textColor="text-amber-900"
      ringColor="ring-amber-500/10"
    >
      <BsPerson />
      <span>Personal</span>
    </Chip>
  )
}

const Projects = () => {
  return (
    <Page>
      <Page.Header>
        <Page.Title>Things I've made</Page.Title>
        <Page.Subtitle>
          I've worked on tons of little projects over the years but these are
          the ones that I'm most proud of.
        </Page.Subtitle>
      </Page.Header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32 mt-24 text-zinc-800">
        <Project>
          <Project.Image
            href="https://workouttrackerapp.vercel.app"
            src="workoutTracker.png"
          />
          <Project.Title
            title="Workout Tracker"
            href="https://workouttrackerapp.vercel.app"
          />
          <Project.Chips>
            <PersonalChip />
            <FullstackChip />
          </Project.Chips>
          <Project.Tech>
            <Skill Icon={SiTypescript} label="TypeScript" />
            <Skill Icon={SiReact} label="React" />
            <Skill Icon={SiTailwindcss} label="Tailwind CSS" />
            <Skill Icon={SiRedux} label="Redux" />
            <Skill Icon={SiJest} label="Jest" />
            <Skill Icon={SiExpress} label="Express" />
            <Skill Icon={SiNodedotjs} label="Node.js" />
            <Skill Icon={SiMongodb} label="MongoDB" />
          </Project.Tech>
          <Project.Description>
            A Typescript MERN-stack application for tracking workouts. Check out
            the exercise library, log your gym workouts and track your progress
            with insightful graphs and statistics. Demo account is provided on the
            sign in page.
          </Project.Description>
          <Project.Links>
            <Project.Links.Live href="https://workouttrackerapp.vercel.app" />
            <Project.Links.GitHub href="https://github.com/PrVille/Workout-tracker" />
          </Project.Links>
        </Project>

        {/* <Project>
          <Project.Image href="#" src="hennaByShruti.png" />
          <Project.Title title="Henna By Shruti" href="#" />
          <Project.Chips>
            <FreelanceChip />
            <FrontendChip />
          </Project.Chips>
          <Project.Tech>
            <Skill Icon={SiReact} label="React" />
            <Skill Icon={SiTailwindcss} label="Tailwind CSS" />
          </Project.Tech>
          <Project.Description>
            Responsive business website for a henna tattoo artist. The website
            was designed to showcase the artists work and increase customer
            base. I worked closely with the client to understand their business
            goals and preferences, and incorporated their feedback throughout
            the development process.
          </Project.Description>
          <Project.Links>
            <Project.Links.Live href="#" />
            <Project.Links.GitHub href="#" />
          </Project.Links>
        </Project> */}

        <Project>
          <Project.Image
            href="https://tools-for-devs.vercel.app/"
            src="devTools.png"
          />
          <Project.Title
            title="Dev Tools"
            href="https://tools-for-devs.vercel.app/"
          />
          <Project.Chips>
            <PersonalChip />
            <FrontendChip />
          </Project.Chips>
          <Project.Tech>
            <Skill Icon={SiReact} label="React" />
            <Skill Icon={SiMui} label="MUI" />
          </Project.Tech>
          <Project.Description>
            A web application for common developer tools, apps and resources in
            one place including tools like password generator, RGB/HEX
            converter, lorem ipsum generator, unit converters, timer, code
            snippets, collection of useful websites and many more.
          </Project.Description>
          <Project.Links>
            <Project.Links.Live href="https://tools-for-devs.vercel.app/" />
            <Project.Links.GitHub href="https://github.com/PrVille/Dev_Tools" />
          </Project.Links>
        </Project>

        <Project>
          <Project.Image
            href="https://expo.dev/@villepr/gym-log"
            src="gymLogApp.png"
          />
          <Project.Title
            title="Gym Log App"
            href="https://expo.dev/@villepr/gym-log"
          />
          <Project.Chips>
            <SchoolChip />
            <FullstackChip />
            <MobileChip />
          </Project.Chips>
          <Project.Tech>
            <Skill Icon={SiExpo} label="Expo" />
            <Skill Icon={SiReact} label="React Native" />
            <Skill Icon={SiCss3} label="CSS" />
            <Skill Icon={SiRedux} label="Redux" />
            <Skill Icon={SiExpress} label="Express" />
            <Skill Icon={SiNodedotjs} label="Node.js" />
            <Skill Icon={SiMongodb} label="MongoDB" />
          </Project.Tech>
          <Project.Description>
            This React Native mobile application is the final project for the
            Full Stack Open course. It has various features like user
            authentication, logging workouts, creating routines, creating
            planned workouts, creating exercises, tracking & displaying data of
            progress in the gym.
          </Project.Description>
          <Project.Links>
            <Project.Links.Live href="https://expo.dev/@villepr/gym-log" />
            <Project.Links.GitHub href="https://github.com/PrVille/Gym_Log_App" />
          </Project.Links>
        </Project>

        <Project>
          <Project.Image
            href="https://prville.github.io/My-platform-game/"
            src="platformer.png"
          />
          <Project.Title
            title="Platformer Game"
            href="https://prville.github.io/My-platform-game/"
          />
          <Project.Chips>
            <PersonalChip />
            <FrontendChip />
          </Project.Chips>
          <Project.Tech>
            <Skill Icon={SiHtml5} label="HTML" />
            <Skill Icon={SiJavascript} label="JavaScript" />
          </Project.Tech>
          <Project.Description>
            This platformer game is one of my first projects, created with pure
            JavaScript and HTML canvas without using any libraries or
            frameworks. The game is based on a game coding tutorial for python.
            Play and see if you can beat all 6 levels!
          </Project.Description>
          <Project.Links>
            <Project.Links.Live href="https://prville.github.io/My-platform-game/" />
            <Project.Links.GitHub href="https://github.com/PrVille/My-platform-game" />
          </Project.Links>
        </Project>
      </div>
    </Page>
  )
}

export default Projects
