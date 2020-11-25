import React from "react"
import { Link } from "gatsby"
import ReactSVG from "react-svg"
import ReactMarkdown from "react-markdown"
import { graphql, useStaticQuery } from "gatsby"
import Form from "@/components/Forms/Contact"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "footer" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              image {
                publicURL
              }
              heading
              contact {
                text
                mail
                phone
              }
              socials
            }
          }
        }
      }
    }
  `)
  const footerData = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <footer className="footer py-20 w-full bg-red" id="contact">
      <div className="container ">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="footer__info">
            <ReactSVG
              className="footer-arrow mb-30"
              src={footerData.image.publicURL}
            />

            <h2 className="text-yellow text-left text-h5 font-cozy">
              {footerData.heading}
            </h2>
            <div className="text-yellow mt-10 lg:block hidden ">
              <p className="font-bold ">{footerData.contact.text}</p>
              <a href={`mailto:${footerData.contact.mail}`}>
                {footerData.contact.mail}
              </a>
              <a className="block" href={`tel:${footerData.contact.phone}`}>
                {footerData.contact.phone}
              </a>
            </div>
            <ReactMarkdown
              className="text-yellow text-left hidden lg:block md:max-w-full mt-5 "
              source={footerData.socials}
              renderers={{
                link: (props) => (
                  <a
                    href={props.href}
                    target="_blank"
                    className="block"
                    rel="noopener noreferrer">
                    {props.children}
                  </a>
                ),
              }}
            />
          </div>
          <div className="footer__form mt-20 lg:mt-0">
            <Form formTitle="Contact Form" />
          </div>
          <div className="text-yellow mt-10 block lg:hidden ">
            <p className="font-bold ">{footerData.contact.text}</p>
            <a href={`mailto:${footerData.contact.mail}`}>
              {footerData.contact.mail}
            </a>
            <a className="block" href={`tel:${footerData.contact.phone}`}>
              {footerData.contact.phone}
            </a>
          </div>
          <ReactMarkdown
            className="text-yellow text-left block lg:hidden md:max-w-full mt-5 link-block"
            source={footerData.socials}
            renderers={{
              link: (props) => (
                <a href={props.href} target="_blank" rel="noopener noreferrer">
                  {props.children}
                </a>
              ),
            }}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
