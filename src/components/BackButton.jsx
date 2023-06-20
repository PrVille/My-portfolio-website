import React from "react"
import { Link } from "react-router-dom"

const BackButton = ({ to }) => {
  return (
    <Link to={to} className="relative">
      <button
        type="button"
        aria-label="Go back to articles"
        className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-mt-2 "
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
        >
          <path
            d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    </Link>
  )
}

export default BackButton
