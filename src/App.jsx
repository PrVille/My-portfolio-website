import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import About from "./Pages/About"
import ScrollToTop from "./components/ScrollToTop"
import Contact from "./Pages/Contact"
import Projects from "./Pages/Projects"
import Articles from "./Pages/Articles"
import ReduxArticle from "./Pages/Articles/ReduxArticle"
import Layout from "./components/Layout/Layout"
import ReactPerformanceArticle from "./Pages/Articles/ReactPerformanceArticle"
import JwtAuthArticle from "./Pages/Articles/JwtAuthArticle"
import { NotificationProvider } from "./Providers/NotificationProvider"
import Notification from "./components/Notification"

const App = () => {
  return (
    <>
      <NotificationProvider>
        <Notification />
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/articles">
                <Route index Component={Articles} />
                <Route
                  path="simplifying-crud-operations-on-a-normalized-state-with-redux-toolkit"
                  Component={ReduxArticle}
                />
                <Route
                  path="react-performance-optimization"
                  Component={ReactPerformanceArticle}
                />
                <Route
                  path="implementing-json-web-token-authentication"
                  Component={JwtAuthArticle}
                />
              </Route>
              <Route path="/about" Component={About} />
              <Route path="/projects" Component={Projects} />

              <Route path="/contact" Component={Contact} />

              <Route path="*" Component={NotFound} />
            </Routes>
          </Layout>
        </Router>
      </NotificationProvider>
    </>
  )
}

export default App
