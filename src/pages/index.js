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
        <section className='hero pb-20'>
          <div className='container-lg px-0 900:px-30'>
            {/* <div className='container-lg px-0 900:px-30'> */}
            <Img
              fluid={pageData.herobackground.childImageSharp.fluid}
              className='hero__main--bg'></Img>
          </div>
          <div className='container '>
            <div className='hero-info-wrap pt-20'>
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
              <div className=''>
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
                <Link className='whatwedo-link'>
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
              {/* <figure className='line'></figure>
              <ReactSVG src='../../img/svg/CCC-sygnet.svg' /> */}
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
            {/* <div className='collage-wrap pt-8'>
              <div className='flex flex-col md:flex-row'>
                <div className='collage-col flex flex-col items-center md:w-2/5 md:items-end'>
                  {' '}
                  <Img
                    className='collage-item collage-1'
                    fluid={pageData.collage1.childImageSharp.fluid}
                  />
                  <Img
                    className='collage-item collage-3'
                    fluid={pageData.collage3.childImageSharp.fluid}
                  />
                </div>
                <div className='collage-col flex flex-col items-center md:w-3/5 md:items-start'>
                  <Img
                    className='collage-item collage-2'
                    fluid={pageData.collage2.childImageSharp.fluid}
                  />
                  <Img
                    className='collage-item collage-4'
                    fluid={pageData.collage4.childImageSharp.fluid}
                  />
                </div>
              </div>
            </div> */}

            <ReactMarkdown
              className='projectsbar text-center text-yellow font-cozy leading-64 font-bold pt-34'
              source={pageData.projectsbar}
            />
            <ReactMarkdown
              className='projectsbarmobile text-center text-yellow font-cozy leading-64 font-bold pt-34'
              source={pageData.projectsbarmobile}
            />
            <div className='mx-auto pt-10 flex justify-center'>
              {' '}
              <ScrollRotate animationDuration={1} loops={100} to={1420}>
                <ReactSVG src='../../img/svg/spinner.svg' />
              </ScrollRotate>
            </div>

            <ReactMarkdown
              className='projectstext pt-10'
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
