import React from "react"
import Tooltip from "./Tooltip"

const Skill = ({ Icon, label }) => {
  return (
    <Tooltip text={label}>
      <div className="p-1">
        <Icon size={25} className="text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-100 hover:text-zinc-800" />
      </div>
    </Tooltip>
  )
}

export default Skill
