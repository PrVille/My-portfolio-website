import Page from "../components/Page"

const NotFound = () => {
  return (
    <Page>
      <div className="flex items-center justify-center dark:text-zinc-200">
        <h1 className="font-medium text-2xl py-2 pr-6 border-r border-gray-400 mr-6">
          404
        </h1>
        <h1 className="text-sm">Page not found.</h1>
      </div>
    </Page>
  )
}

export default NotFound
