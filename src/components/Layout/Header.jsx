import { Link, NavLink } from "react-router-dom"
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"

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
                  <img
                    src="../../public/me.png"
                    className="rounded-full object-cover"
                  />
                </Link>
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <Popover as="div" className="pointer-events-auto md:hidden">
                  <div>
                    <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                      Menu
                      <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100"
                    leaveTo="transform opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100" />
                  </Transition>

                  <div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Popover.Panel className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100">
                        {({ close }) => (
                          <>
                            <div className="flex flex-row-reverse items-center justify-between">
                              <Popover.Button className="-m-1 p-1">
                                <XMarkIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                              </Popover.Button>
                              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                Navigation
                              </h2>
                            </div>

                            <nav className="mt-6">
                              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                <li>
                                  <NavLink
                                    onClick={close}
                                    className={({ isActive }) =>
                                      classNames(
                                        "block py-2 transition hover:text-sky-500 dark:hover:text-sky-400",
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
                                    onClick={close}
                                    className={({ isActive }) =>
                                      classNames(
                                        "block py-2 transition hover:text-sky-500 dark:hover:text-sky-400",
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
                                    onClick={close}
                                    className={({ isActive }) =>
                                      classNames(
                                        "block py-2 transition hover:text-sky-500 dark:hover:text-sky-400",
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
                                    onClick={close}
                                    className={({ isActive }) =>
                                      classNames(
                                        "block py-2 transition hover:text-sky-500 dark:hover:text-sky-400",
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
                          </>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </div>
                </Popover>
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
