import React from "react"
import Page from "../components/Page"
import ArticleListItem from "../components/ArticleListItem"

const DateTime = ({ children }) => {
  return (
    <div className="mt-1 hidden md:flex relative z-10 order-first mb-3 items-center text-sm text-zinc-400 dark:text-zinc-500">
      {children}
    </div>
  )
}

const Articles = () => {
  return (
    <Page>
      <Page.Header>
        <Page.Title>Writings on the world of web development</Page.Title>
        <Page.Subtitle>
          Some of my insights and techniques for modern web applications,
          collected in chronological order.
        </Page.Subtitle>
      </Page.Header>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            <div className="md:grid md:grid-cols-4 md:items-baseline">
              <div className="md:col-span-3">
                <ArticleListItem>
                  <ArticleListItem.TitleLink to="/articles/simplifying-crud-operations-on-a-normalized-state-with-redux-toolkit">
                    Simplifying CRUD Operations on a Normalized State with Redux
                    Toolkit
                  </ArticleListItem.TitleLink>
                  <ArticleListItem.DateTime className="md:hidden">
                    April 8, 2023
                  </ArticleListItem.DateTime>
                  <ArticleListItem.Body>
                    Managing state in a Redux application can become more
                    challenging when incorporating backend integration for CRUD
                    operations. However, Redux Toolkit's createEntityAdapter
                    combined with backend connectivity can streamline the
                    process.
                  </ArticleListItem.Body>
                </ArticleListItem>
              </div>
              <DateTime>April 8, 2023</DateTime>
            </div>

            <div className="md:grid md:grid-cols-4 md:items-baseline">
              <div className="md:col-span-3">
                <ArticleListItem>
                  <ArticleListItem.TitleLink to="/articles/react-performance-optimization">
                    React Performance Optimization: Techniques for Building
                    High-Performing Applications
                  </ArticleListItem.TitleLink>
                  <ArticleListItem.DateTime className="md:hidden">
                    February 22, 2023
                  </ArticleListItem.DateTime>
                  <ArticleListItem.Body>
                    Optimizing React application performance is crucial for
                    delivering responsive and efficient user experiences. By
                    implementing techniques such as memoization, component lazy
                    loading, virtualization, and leveraging performance analysis
                    tools like React Profiler, you can significantly improve the
                    performance of your React applications.
                  </ArticleListItem.Body>
                </ArticleListItem>
              </div>
              <DateTime>February 22, 2023</DateTime>
            </div>

            <div className="md:grid md:grid-cols-4 md:items-baseline">
              <div className="md:col-span-3">
                <ArticleListItem>
                  <ArticleListItem.TitleLink to="/articles/implementing-json-web-token-authentication">
                    Implementing JSON Web Token Authentication
                  </ArticleListItem.TitleLink>
                  <ArticleListItem.DateTime className="md:hidden">
                    January 5, 2023
                  </ArticleListItem.DateTime>
                  <ArticleListItem.Body>
                    Authentication is a critical aspect of modern web
                    applications, and JSON Web Tokens (JWT) have become a
                    popular choice for implementing secure and stateless
                    authentication. In this article, we will explore how to
                    implement JWT token authentication in a Node.js and Express
                    application using the Bcrypt library for password hashing.
                  </ArticleListItem.Body>
                </ArticleListItem>
              </div>
              <DateTime>January 5, 2023</DateTime>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Articles
