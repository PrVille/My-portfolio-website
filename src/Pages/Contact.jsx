import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { send } from "@emailjs/browser"
import * as Yup from "yup"

import Page from "../components/Page"
import GitHubIcon from "../components/Icons/GitHubIcon"
import useNotification from "../Hooks/useNotification"
import Spinner from "../components/Spinner"
import { SiCodewars, SiFrontendmentor } from "react-icons/si"

const Contact = () => {
  const { addNotification } = useNotification()
  const [loading, setLoading] = useState(false)

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    message: Yup.string().required("Message is required"),
    reply_to: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data) => {
    if (!loading) {
      setLoading(true)
    }

    send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      data,
      import.meta.env.VITE_USER_ID
    )
      .then((response) => {
        reset()
        addNotification("Message sent!", "success")
      })
      .catch((err) => {
        addNotification(
          "Something went wrong, please contact me by email!",
          "alert"
        )
      })
      .finally(() => setLoading(false))
  }

  return (
    <Page>
      <Page.Header>
        <Page.Title> Get in touch</Page.Title>
        <Page.Subtitle>
          I am open to collaborating on exciting projects with wonderful
          individuals. If you require any assistance, I am more than willing to
          offer my support.
        </Page.Subtitle>
      </Page.Header>

      <div className="mt-10 grid grid-cols-3">
        <div className="col-span-full md:col-span-2 flex flex-col py-4 sm:py-6 lg:py-8 pr-4 sm:pr-6 lg:pr-8 rounded-2xl  border-zinc-100 dark:border-zinc-700/40">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 grid-cols-2">
              <div className="col-span-full lg:col-span-1 flex flex-col gap-1">
                <input
                  placeholder="Name"
                  {...register("name")}
                  className="min-w-0 appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10 sm:text-sm"
                />
                {errors.name && (
                  <div>
                    <h3 className="text-sm text-red-500">
                      {errors.name?.message}
                    </h3>
                  </div>
                )}
              </div>

              <div className="col-span-full lg:col-span-1 flex flex-col gap-1">
                <input
                  type="email"
                  placeholder="Email address"
                  {...register("reply_to")}
                  className="min-w-0 appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10 sm:text-sm"
                />
                {errors.reply_to && (
                  <div>
                    <h3 className="text-sm text-red-500">
                      {errors.reply_to?.message}
                    </h3>
                  </div>
                )}
              </div>

              <div className="col-span-full flex flex-col gap-1">
                <textarea
                  rows="4"
                  className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10 sm:text-sm"
                  placeholder="Message"
                  {...register("message")}
                />
                {errors.message && (
                  <div>
                    <h3 className="text-sm text-red-500">
                      {errors.message?.message}
                    </h3>
                  </div>
                )}
              </div>
            </div>

            <div className="grid mt-6">
              <button
                className="flex items-center justify-center gap-2 rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
                type="submit"
              >
                {loading && <Spinner />}
                <p>Send</p>
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-full md:col-span-1 flex flex-col p-4 rounded-2xl sm:p-6 lg:p-8 border-zinc-100 dark:border-zinc-700/40">
          <ul role="list">
            <li className="mt-4 flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500"
                href="https://github.com/PrVille"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                <span className="ml-4">Follow me on GitHub</span>
              </a>
            </li>
            <li className="mt-4 flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500"
                href="https://www.linkedin.com/in/ville-prami/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500"
                >
                  <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                </svg>
                <span className="ml-4">Connect with me on LinkedIn</span>
              </a>
            </li>

            <li className="mt-4 flex">
              <a
                className="group p-0.5 flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500"
                href="https://www.codewars.com/users/PrVille"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodewars size={18} className="fill-zinc-500 transition group-hover:fill-sky-500" />
                <span className="ml-5">Follow me on Codewars</span>
              </a>
            </li>
            <li className="mt-4 flex">
              <a
                className="group p-0.5 flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500"
                href="https://www.frontendmentor.io/profile/PrVille"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFrontendmentor size={18} className="fill-zinc-500 transition group-hover:fill-sky-500" />
                <span className="ml-5">Follow me on Frontend Mentor</span>
              </a>
            </li>

            <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500"
                href="mailto:ville.prami@aalto.fi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                  ></path>
                </svg>
                <span className="ml-4">ville.prami@aalto.fi</span>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  )
}

export default Contact
