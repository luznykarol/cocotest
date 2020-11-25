import React from "react"
import PropTypes from "prop-types"
import ReactSVG from "react-svg"
import Layout from "@/components/Layout"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import { ScrollRotate } from "react-scroll-rotate"
import Helmet from "react-helmet"
import SEO from "@/helpers/SEOHelper.js"

export const HomePageTemplate = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter
  const seo = data.markdownRemark.frontmatter.seo
  return (
    <>
      <Helmet>
        <meta name="description" content={SEO.description(seo.description)} />
        <meta property="og:title" content={SEO.title(seo.title)} />
        <meta
          property="og:description"
          content={SEO.description(seo.description)}
        />
        <meta property="og:image" content={SEO.image(seo.image)} />
        <title>{SEO.title(seo.title)}</title>
      </Helmet>
      <div className="bg-yellow mt-8">
        <section className="hero pb-20">
          <div className="container-lg px-0 900:px-30">
            <Img
              fluid={pageData.herobackground.childImageSharp.fluid}
              className="hero__main--bg"></Img>
          </div>
          <div className="container-lg ">
            <div className="hero-info-wrap">
              <div className="flex flex-col-reverse 900:flex-row 900:justify-between ">
                <div className="flex flex-col-reverse 900:flex-col">
                  <ReactMarkdown
                    className="herobackgroundsignature mt-5 font-bold"
                    source={pageData.herobackgroundsignature}
                  />
                  <ReactMarkdown
                    className="aboutleft markdown-wrap std-para 900:mt-12"
                    source={pageData.aboutleft}
                  />
                </div>
                <div className="col md:pt-13 pt-4">
                  <ScrollRotate animationDuration={1} loops={1} to={1420}>
                    <ReactSVG className="" src="../../img/svg/spinner.svg" />
                  </ScrollRotate>

                  <ReactMarkdown
                    className="pt-20 aboutright markdown-cozy"
                    source={pageData.aboutright}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-bar bg-white py-20">
          <div className="container">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
              <div className="flex flex-col md:flex-row md:items-center items-start">
                <p className="font-bold mb-30 md:mb-0 md:mr-16 ">
                  {pageData.abouthelper}
                </p>
                <ReactMarkdown
                  className="aboutbar font-cozy leading-64 font-bold "
                  source={pageData.aboutbar}
                />
              </div>
              <ReactSVG
                className="flex justify-end mt-30 md:mt-0"
                src="../../img/svg/arrowRight.svg"
              />
            </div>
          </div>
        </section>
        <section className="projects bg-cream py-20" id="projects">
          <div className="container">
            <div className="flex items-center">
              <ReactSVG src="../../img/svg/CCC-sygnet.svg" />
              <figure className="line"></figure>
              <p>{pageData.projectshelper}</p>
            </div>
            <div className="collage-wrap pt-8">
              <div className="flex flex-col md:flex-row">
                <div className="collage-col flex flex-col items-center md:w-2/5 md:items-end">
                  {" "}
                  <Img
                    className="collage-item collage-1"
                    fluid={pageData.collage1.childImageSharp.fluid}
                  />
                  <Img
                    className="collage-item collage-3"
                    fluid={pageData.collage3.childImageSharp.fluid}
                  />
                </div>
                <div className="collage-col flex flex-col items-center md:w-3/5 md:items-start">
                  <Img
                    className="collage-item collage-2"
                    fluid={pageData.collage2.childImageSharp.fluid}
                  />
                  <Img
                    className="collage-item collage-4"
                    fluid={pageData.collage4.childImageSharp.fluid}
                  />
                </div>
              </div>
            </div>

            <ReactMarkdown
              className="projectsbar text-center text-yellow font-cozy leading-64 font-bold pt-34"
              source={pageData.projectsbar}
            />
            <ReactMarkdown
              className="projectsbarmobile text-center text-yellow font-cozy leading-64 font-bold pt-34"
              source={pageData.projectsbarmobile}
            />
            <div className="mx-auto pt-10 flex justify-center">
              {" "}
              <ScrollRotate animationDuration={1} loops={100} to={1420}>
                <ReactSVG src="../../img/svg/spinner.svg" />
              </ScrollRotate>
            </div>

            <ReactMarkdown
              className="projectstext pt-10"
              source={pageData.projectstext}
            />
          </div>
        </section>
      </div>
    </>
  )
}

const HomePage = ({ data }) => {
  return (
    <Layout hideNav={true}>
      <HomePageTemplate data={data} />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { template: { eq: "index" } }) {
      frontmatter {
        title
        herobackground {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        herobackgroundsignature
        aboutleft
        aboutright
        aboutbar
        abouthelper
        projectshelper
        projectsbar
        projectsbarmobile
        projectstext
        collage1 {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        collage2 {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        collage3 {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        collage4 {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        seo {
          description
          title
        }
      }
    }
  }
`

export default HomePage
