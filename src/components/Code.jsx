import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
  dark,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism"

const Code = ({ children, language = "javascript" }) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus}>
      {children}
    </SyntaxHighlighter>
  )
}

export default Code
