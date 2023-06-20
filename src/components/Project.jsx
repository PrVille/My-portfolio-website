import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import React from "react"
import GitHubIcon from "./Icons/GitHubIcon"

const Project = ({ children }) => {
  return <div className="">{children}</div>
}

const Image = ({ href, src, rotation = 0 }) => {
  const rotationStr = `rotate-${Math.abs(rotation)}`
  rotation = rotation < 0 ? "-" + rotationStr : rotationStr

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        src={src}
        className={`rounded-lg ${rotation} shadow-xl object-cover aspect-[6/5] w-full `}
      />
    </a>
  )
}

const Title = ({ title, href }) => {
  return (
    <div className="mt-6">
      <h3 className="font-bold text-xl text-zinc-800 dark:text-zinc-100">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
    </div>
  )
}

const Chips = ({ children }) => {
  return <div className="flex gap-2 mt-4 flex-wrap">{children}</div>
}

const Tech = ({ children }) => {
  return <div className="flex gap-1 mt-4 flex-wrap">{children}</div>
}

const Description = ({ children }) => {
  return (
    <div className="mt-4">
      <p className="text-base text-zinc-600 dark:text-zinc-400">{children}</p>
    </div>
  )
}

const Links = ({ children }) => {
  return <div className="mt-6 flex gap-4">{children}</div>
}

const Live = ({ href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="z-10 flex items-center text-sm font-medium text-zinc-600 transition hover:text-sky-500 dark:text-zinc-400 dark:hover:text-sky-500"
    >
      <ArrowTopRightOnSquareIcon className="h-6 w-6 flex-none" />
      <span className="ml-2">Live project</span>
    </a>
  )
}

const GitHub = ({ href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative items-center z-10 flex text-sm font-medium text-zinc-600 transition dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-500"
    >
      <GitHubIcon />
      <span className="ml-2">Github</span>
    </a>
  )
}

Project.Image = Image
Project.Title = Title
Project.Chips = Chips
Project.Tech = Tech
Project.Description = Description
Project.Links = Links
Project.Links.Live = Live
Project.Links.GitHub = GitHub

export default Project
