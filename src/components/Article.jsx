const Article = ({ children }) => {
  return <article className="max-w-2xl mx-auto">{children}</article>
}

const Header = ({ children }) => {
  return <header className="flex flex-col">{children}</header>
}

const DateTime = ({ children }) => {
  return (
    <div className="flex items-center text-zinc-400 dark:text-zinc-500 border-s-2 border-zinc-300 dark:border-zinc-600">
      <h3 className="ml-3">{children}</h3>
    </div>
  )
}

const Title = ({ children }) => {
  return (
    <h1 className="mt-6 text-4xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      {children}
    </h1>
  )
}

const Prose = ({ children }) => {
  return (
    <div className="mt-8 prose max-w-none dark:prose-invert prose-img:rounded-3xl prose-strong:bg-gray-100 dark:prose-strong:bg-zinc-800/90">
      {children}
    </div>
  )
}

Article.Header = Header
Article.DateTime = DateTime
Article.Title = Title
Article.Prose = Prose

export default Article
