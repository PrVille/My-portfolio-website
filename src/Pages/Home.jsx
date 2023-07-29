import Page from "../components/Page"
import {
  EnvelopeIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
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
  SiTypescript,
  SiJest,
  SiCodewars,
  SiFrontendmentor
} from "react-icons/si"
import { FaDatabase, FaLaptopCode, FaTools } from "react-icons/fa"
import Tooltip from "../components/Tooltip"
import Skill from "../components/Skill"
import ArticleListItem from "../components/ArticleListItem"
import { Link } from "react-router-dom"

const Skills = () => {
  return (
    <div className="flex flex-col border rounded-2xl p-4 sm:p-6 lg:p-8 border-zinc-100 dark:border-zinc-700/40 text-zinc-800">
      <h2 className="text-sm flex items-center font-semibold text-zinc-900 dark:text-zinc-100">
        <WrenchScrewdriverIcon className="h-6 w-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
        <span className="ml-3">Skills</span>
      </h2>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="border-r items-center grid pr-1">
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Front-end
          </h3>
        </div>
        <div className="col-span-3 flex gap-1 flex-wrap">
          <Skill Icon={SiCss3} label="CSS" />
          <Skill Icon={SiHtml5} label="HTML" />
          <Skill Icon={SiJavascript} label="JavaScript" />
          <Skill Icon={SiTypescript} label="TypeScript" />
          <Skill Icon={SiReact} label="React & React Native" />
          <Skill Icon={SiRedux} label="Redux" />
          <Skill Icon={SiMui} label="MUI" />
          <Skill Icon={SiTailwindcss} label="Tailwind CSS" />
        </div>
      </div>

      <div className="grid grid-cols-4 mt-6 gap-4">
        <div className="border-r items-center grid">
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Back-end
          </h3>
        </div>

        <div className="col-span-3 flex gap-1 flex-wrap">
          <Skill Icon={SiExpress} label="Express" />
          <Skill Icon={SiNodedotjs} label="Node.js" />
          <Skill Icon={SiGraphql} label="GraphQL" />
          <Skill Icon={SiPostgresql} label="PostgreSQL" />
          <Skill Icon={SiMongodb} label="MongoDB" />
        </div>
      </div>

      <div className="grid grid-cols-4 mt-6 gap-4">
        <div className="border-r items-center grid">
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Tools
          </h3>
        </div>

        <div className="col-span-3 flex gap-2 flex-wrap">
          <Skill Icon={SiJest} label="Jest" />
          <Skill Icon={SiGit} label="Git" />
          <Skill Icon={SiGithubactions} label="GitHub Actions" />
          <Skill Icon={SiGithub} label="GitHub" />
          <Skill Icon={SiPostman} label="Postman" />
          <Skill Icon={SiVisualstudiocode} label="VS Code" />
        </div>
      </div>
    </div>
  )
}

const Experience = () => {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm items-center font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-6">
        <li className="flex gap-4 items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img className="rounded-full bg-white" src="me.png" />
          </div>
          <div className="flex-1 flex flex-col">
            <h3 className="w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Freelance Web Developer
            </h3>
            <div className="flex justify-between gap-2">
              <h4 className="text-xs text-zinc-500 dark:text-zinc-400">
                Self-Employed
              </h4>
              <h4 className="text-xs text-zinc-400 dark:text-zinc-500">
                2022 — Present
              </h4>
            </div>
          </div>
        </li>

        <li className="flex gap-4 items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img className="rounded-full bg-white" src="helsinki.jpg" />
          </div>
          <div className="flex-1 flex flex-col">
            <h3 className="w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Helsinki University
            </h3>
            <div className="flex justify-between gap-2">
              <h4 className="text-xs text-zinc-500 dark:text-zinc-400">
                Full Stack Open Course Module
              </h4>
              <h4 className="text-xs text-zinc-400 dark:text-zinc-500">
                2022 — 2023
              </h4>
            </div>
          </div>
        </li>

        <li className="flex gap-4 items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img className="rounded-full bg-white" src="aalto.png" />
          </div>
          <div className="flex-1 flex flex-col">
            <h3 className="w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Aalto University
            </h3>
            <div className="flex justify-between gap-2">
              <h4 className="text-xs text-zinc-500 dark:text-zinc-400">
                Computer Science Student
              </h4>
              <h4 className="text-xs text-zinc-400 dark:text-zinc-500">
                2021 — Present
              </h4>
            </div>
          </div>
        </li>
      </ol>
      <a
        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
        href="Ville_Prami_CV_ENG.pdf"
        download
      >
        Download CV
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
        >
          <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </a>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <Page>
        <Page.Header>
          <Page.Title>Full-stack developer, freelancer and student.</Page.Title>
          <Page.Subtitle>
            I'm Ville, a full-stack developer and freelancer based in Helsinki,
            Finland. I'm currently working as a freelance web developer and
            studying computer science at Aalto University.
          </Page.Subtitle>
          <div className="mt-4 flex gap-4 items-center">
            <a
              className="group"
              href="https://github.com/PrVille"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                ></path>
              </svg>
            </a>
            <a
              className="group"
              href="https://www.linkedin.com/in/ville-prami/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
              </svg>
            </a>
            <a
              className="group"
              href="https://www.codewars.com/users/PrVille"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodewars size={18} className="fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </a>
            <a
              className="group"
              href="https://www.frontendmentor.io/profile/PrVille"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFrontendmentor size={18} className="fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </a>
          </div>
        </Page.Header>
      </Page>

      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="reindeer.png"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="camping.png"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="slush.png"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="band.png"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="luna-jump.png"
            />
          </div>
        </div>
      </div>

      <div className="sm:px-8 mt-24 sm:mt-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-16">
                  <ArticleListItem>
                    <ArticleListItem.TitleLink to="/articles/simplifying-crud-operations-on-a-normalized-state-with-redux-toolkit">
                      Simplifying CRUD Operations on a Normalized State with
                      Redux Toolkit
                    </ArticleListItem.TitleLink>
                    <ArticleListItem.DateTime>
                      April 8, 2023
                    </ArticleListItem.DateTime>
                    <ArticleListItem.Body>
                      Managing state in a Redux application can become more
                      challenging when incorporating backend integration for
                      CRUD operations. However, Redux Toolkit's
                      createEntityAdapter combined with backend connectivity can
                      streamline the process.
                    </ArticleListItem.Body>
                  </ArticleListItem>

                  <ArticleListItem>
                    <ArticleListItem.TitleLink to="/articles/react-performance-optimization">
                      React Performance Optimization: Techniques for Building
                      High-Performing Applications
                    </ArticleListItem.TitleLink>
                    <ArticleListItem.DateTime>
                      February 22, 2023
                    </ArticleListItem.DateTime>
                    <ArticleListItem.Body>
                      Optimizing React application performance is crucial for
                      delivering responsive and efficient user experiences. By
                      implementing techniques such as memoization, component
                      lazy loading, virtualization, and leveraging performance
                      analysis tools like React Profiler, you can significantly
                      improve the performance of your React applications.
                    </ArticleListItem.Body>
                  </ArticleListItem>

                  <ArticleListItem>
                    <ArticleListItem.TitleLink to="/articles/implementing-json-web-token-authentication">
                      Implementing JSON Web Token Authentication
                    </ArticleListItem.TitleLink>
                    <ArticleListItem.DateTime>
                      January 5, 2023
                    </ArticleListItem.DateTime>
                    <ArticleListItem.Body>
                      Authentication is a critical aspect of modern web
                      applications, and JSON Web Tokens (JWT) have become a
                      popular choice for implementing secure and stateless
                      authentication. In this article, we will explore how to
                      implement JWT token authentication in a Node.js and
                      Express application using the Bcrypt library for password
                      hashing.
                    </ArticleListItem.Body>
                  </ArticleListItem>
                </div>

                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <Experience />
                  <Skills />

                  <Tooltip text="Codewars profile" className="w-full">
                    <Link
                      to="https://www.codewars.com/users/PrVille"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-full"
                        src="https://www.codewars.com/users/PrVille/badges/large"
                      />
                    </Link>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
