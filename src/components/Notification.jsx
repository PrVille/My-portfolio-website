import { Transition } from "@headlessui/react"
import { Fragment } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import useNotification from "../Hooks/useNotification"

const Notification = () => {
  const { notification, clearNotification } = useNotification()
  const active = !!notification

  return (
    <>
      {active && (
        <Transition
          appear
          show={active}
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="translate-y-0 opacity-0"
          enterTo="translate-y-full opacity-100"
        >
          <div className="fixed top-12 -translate-x-1/2 left-1/2 z-50">
            <div
              onClick={clearNotification}
              className={`transform transition-all flex gap-4 items-center rounded-lg shadow-md px-3 py-2 cursor-pointer ${
                notification.type === "alert"
                  ? "bg-red-500"
                  : notification.type === "success"
                  ? "bg-green-500"
                  : "bg-blue-500"
              }`}
            >
              <h3 className="text-white font-semibold">
                {notification.message}
              </h3>
              <XMarkIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        </Transition>
      )}
    </>
  )
}

export default Notification
