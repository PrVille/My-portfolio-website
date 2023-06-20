
const Avatar = ({ initials }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-12 h-10 overflow-hidden shadow-lg bg-white ring-1 ring-zinc-900/5 rounded-full dark:bg-gray-600">
      <span className="font-medium transition hover:text-teal-500 dark:text-gray-300">
        {initials}
      </span>
    </div>
  )
}

export default Avatar
