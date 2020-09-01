import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import logo from "../images/zee-blog.png"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <nav>
        <Link to={`/`}>
          <img src={logo} alt={data.site.siteMetadata.title}></img>
        </Link>
        <ul>
          <li>
            <Link to={`/about`}>Sobre</Link>
          </li>
          <li>
            <Link to={`/files`}>Arquivos</Link>
          </li>
          <li>
            <a
              href="https://www.zeedog.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Zee.Dog
            </a>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </div>
  )
}
