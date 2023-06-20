// NotificationContext.js
import { useState, createContext } from "react"

const NotificationContext = createContext()

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState("")

  let timeoutID = undefined
  const addNotification = (message, type = "info", duration = 5000) => {
    clearNotification()
    clearTimeout(timeoutID)

    const newNotification = { message, type, duration }
    setNotification(newNotification)
    timeoutID = setTimeout(() => {
      clearNotification()
    }, duration)
  }

  const clearNotification = () => {
    setNotification("")
    clearTimeout(timeoutID)
  }

  return (
    <NotificationContext.Provider
      value={{
        notification,
        addNotification,
        clearNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export { NotificationContext, NotificationProvider }
