import React from "react"

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

const Chip = ({
  children,
  bgColor = "bg-blue-100",
  textColor = "text-blue-900",
  ringColor = "ring-blue-500/10"
}) => {
  return (
    <div
      className={classNames(
        "flex gap-2 items-center text-sm px-2.5 py-0.5 font-medium rounded ring-1 ring-inset",
        bgColor,
        textColor,
        ringColor
      )}
    >
      {children}
    </div>
  )
}

export default Chip
