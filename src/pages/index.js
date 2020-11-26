import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import Layout from '@/components/Layout'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import { ScrollRotate } from 'react-scroll-rotate'
import Helmet from 'react-helmet'
import SEO from '@/helpers/SEOHelper.js'
import Swiper from '@/components/Slider/Slider'

export const HomePageTemplate = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter
  const seo = data.markdownRemark.frontmatter.seo
  const projectsArr = data.project.edges
  return (
    <>
      <Helmet>
        <meta name='description' content={SEO.description(seo.description)} />
        <meta property='og:title' content={SEO.title(seo.title)} />
        <meta
          property='og:description'
          content={SEO.description(seo.description)}
        />
        <meta property='og:image' content={SEO.image(seo.image)} />
        <title>{SEO.title(seo.title)}</title>
      </Helmet>
      <div className='bg-yellow mt-8'>
        <section className='hero '>
          <div className='container-lg px-0 900:px-30'>
            {/* <div className='container-lg px-0 900:px-30'> */}
            <Img
              fluid={pageData.herobackground.childImageSharp.fluid}
              className='hero__main--bg'></Img>
          </div>
          <div className='container '>
            <div className='hero-info-wrap py-24'>
              <h2 className='h2-section text-red'>O nas</h2>
              <div className='col-container flex flex-col 900:flex-row 900:justify-between '>
                <div className='col'>
                  <ReactMarkdown
                    className='text-red markdown-wrap markdown-cozy '
                    source={pageData.aboutleft}
                  />
                </div>
                <div className='col'>
                  <ReactMarkdown
                    className=' markdown-cozy text-red'
                    source={pageData.aboutright}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='about-bar bg-white py-24'>
          <div className='container'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center '>
              <div className='flex flex-col md:flex-row md:items-center items-start'>
                <h2 className='h2-section mb-0'>Co Robimy?</h2>
              </div>
              <div className='mt-10'>
                <Link to='/about/#workshops' className='whatwedo-link'>
                  <h2 className='h2-section mb-0'>Warsztaty i Szkolenia</h2>
                  <ReactSVG
                    className='icon-arrow-right '
                    src='../../img/svg/arrowRight.svg'
                  />
                </Link>
                <Link className='whatwedo-link'>
                  <h2 className='h2-section mb-0'>Integracja Online</h2>
                  <ReactSVG
                    className='icon-arrow-right '
                    src='../../img/svg/arrowRight.svg'
                  />
                </Link>
                <Link to='/about/#weddings' className='whatwedo-link'>
                  <h2 className='h2-section mb-0'>Wesela i Eventy</h2>
                  <ReactSVG
                    className='icon-arrow-right '
                    src='../../img/svg/arrowRight.svg'
                  />
                </Link>
                <Link to='/about/#consultancy' className='whatwedo-link'>
                  <h2 className='h2-section mb-0'>Doradztwo Barowe</h2>
                  <ReactSVG
                    className='icon-arrow-right '
                    src='../../img/svg/arrowRight.svg'
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='projects bg-cream py-24' id='projects'>
          <div className='container'>
            <div className='flex items-center'>
              <h2 className='h2-section'>{pageData.projectshelper}</h2>
            </div>
            <div className='projects-wrap'>
              {projectsArr &&
                projectsArr.map(({ node: project }) => (
                  <Swiper
                    key={project.id}
                    cover={project.frontmatter.cover.childImageSharp.fluid}
                    image={project.frontmatter.image.childImageSharp.fluid}
                    text={project.frontmatter.text}
                  />
                ))}
            </div>
            {/* <ReactMarkdown
              className='projectsbar text-center text-yellow font-cozy leading-64 font-bold pt-34'
              source={pageData.projectsbar}
            />
            <ReactMarkdown
              className='projectsbarmobile text-center text-yellow font-cozy leading-64 font-bold pt-34'
              source={pageData.projectsbarmobile}
            /> */}
            <div className='mx-auto pt-16 flex justify-center'>
              <ScrollRotate animationDuration={1} loops={100} to={1420}>
                <ReactSVG src='../../img/svg/spinner.svg' />
              </ScrollRotate>
            </div>

            {/* <ReactMarkdown
              className='projectstext pt-10'
              source={pageData.projectstext}
            /> */}
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
    project: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(quality: 100, maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            image {
              childImageSharp {
                fluid(quality: 100, maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            text
          }
        }
      }
    }
  }
`

export default HomePage
