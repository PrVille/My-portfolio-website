import { Link, NavLink } from "react-router-dom"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

const Navigation = () => {
  return (
    <nav className="pointer-events-auto hidden md:block">
      <ul className="flex h-full items-center rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <li>
          <NavLink
            className={({ isActive }) =>
              classNames(
                "relative block px-3 py-2 transition hover:text-sky-500 dark:hover:text-sky-400",
                isActive ? "text-sky-500" : ""
              )
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              classNames(
                "relative block px-3 py-2 transition hover:text-sky-500 dark:hover:text-sky-400",
                isActive ? "text-sky-500" : ""
              )
            }
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              classNames(
                "relative block px-3 py-2 transition hover:text-sky-500 dark:hover:text-sky-400",
                isActive ? "text-sky-500" : ""
              )
            }
            to="/articles"
          >
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              classNames(
                "relative block px-3 py-2 transition hover:text-sky-500 dark:hover:text-sky-400",
                isActive ? "text-sky-500" : ""
              )
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

const Header = () => {
  const toggleDarkMode = () => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      } else {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      }
    }
  }

  return (
    <header className="fixed z-40 flex flex-col top-0 h-16 w-full pt-6 sm:px-8">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                <Link
                  className="h-10 w-10 rounded-full shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
                  to="/"
                >
                  <img src="me.png" className="rounded-full object-cover" />
                </Link>
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <div
                  className="pointer-events-auto md:hidden"
                  data-headlessui-state=""
                >
                  <button
                    className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                    id="headlessui-popover-button-:R2qb6:"
                  >
                    Menu
                    <svg
                      viewBox="0 0 8 6"
                      aria-hidden="true"
                      className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                    >
                      <path
                        d="M1.75 1.75 4 4.25l2.25-2.5"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Navigation />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <button
                    onClick={toggleDarkMode}
                    type="button"
                    aria-label="Toggle dark mode"
                    className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                  >
                    <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-sky-50 [@media(prefers-color-scheme:dark)]:stroke-sky-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-sky-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-sky-600" />
                    <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-sky-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-sky-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
