const Page = ({ children }) => {
  return (
    <div className="sm:px-8 mt-32 sm:mt-48">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
        </div>
      </div>
    </div>
  )
}

const Header = ({ children }) => {
  return <header className="max-w-2xl">{children}</header>
}

const Title = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      {children}
    </h1>
  )
}

const Subtitle = ({ children }) => {
  return (
    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  )
}

Page.Header = Header
Page.Title = Title
Page.Subtitle = Subtitle

export default Page
