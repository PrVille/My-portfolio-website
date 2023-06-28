import { useEffect, useState } from "react"
import visitorsService from "../services/visitors"
import { EyeIcon } from "@heroicons/react/24/outline"

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState(null)

  useEffect(() => {
    const fetchVisitors = async () => {
      const fetchedVisitors = await visitorsService.incrementKey("portfolio-home")
      setVisitors(fetchedVisitors) 
    }

    fetchVisitors()
  }, [])

  if (!visitors) return null

  return (
    <div className="text-sm pt-6 sm:pt-2 items-center justify-center sm:justify-end text-zinc-400 dark:text-zinc-500 flex gap-1">
      <EyeIcon className="h-4 w-4" />
      <h3>{visitors}</h3>
    </div>
  )
}

export default VisitorCounter
