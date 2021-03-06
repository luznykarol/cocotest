import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import Layout from '@/components/Layout'
import Img from 'gatsby-image'
import Background from 'gatsby-background-image'
import ReactMarkdown from 'react-markdown'
import { ScrollRotate } from 'react-scroll-rotate'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import SEO from '@/helpers/SEOHelper.js'

export const AboutPageTemplate = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter
  const seo = data.markdownRemark.frontmatter.seo
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
      <div className='bg-green mt-8 overflow-x-hidden'>
        <section className='hero relative'>
          <div className='container-lg px-0 900:px-30 '>
            <div className='spinner-wrap relative'>
              <Img
                fluid={pageData.herobackground.childImageSharp.fluid}
                className='hero__sub--bg'
              />
              <div className='scroll-svg-wrap'>
                <ScrollRotate animationDuration={3} loops={1} to={1420}>
                  <ReactSVG
                    className='spinner-large'
                    src='../../img/svg/spinner-large.svg'
                  />
                </ScrollRotate>
              </div>
            </div>
          </div>
        </section>
        <section className='topsection py-24' id='weddings'>
          <div className='container'>
            <div className='col-container flex flex-col 900:flex-row 900:justify-between'>
              <div className='col '>
                <ReactMarkdown
                  className='markdown-cozy text-yellow markdown__weddings'
                  source={pageData.weddings}
                />
              </div>
              <div className='scroll-svg-wrap--mobile '>
                <ScrollRotate
                  style={{ right: '-180px' }}
                  method={'prec'}
                  loops={1}
                  animationDuration={5}>
                  <ReactSVG
                    className='spinner-mobile'
                    src='../../img/svg/spinner-large.svg'
                  />
                </ScrollRotate>
              </div>
              <div className='col'>
                <ReactMarkdown
                  className='markdown-cozy text-yellow markdown__scenarios'
                  source={pageData.scenarios}
                />
              </div>
            </div>
          </div>
        </section>
        <section className='events bg-white' id='workshops'>
          <div className='half-section'>
            <div className='half-section__col'>
              <Img
                className='half-section__image'
                fluid={pageData.consultancyimg.childImageSharp.fluid}
              />
            </div>
            <div className='half-section__col'>
              <div className='half-section__content'>
                <div className=''>
                  <h2 className='text-black special font-cozy'>
                    Warsztaty koktajlowe
                  </h2>
                  <ReactMarkdown
                    className='markdown__events  markdown-cozy'
                    source={pageData.workshopsright}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='events bg-cream  py-24' id='consultancy'>
          <div className='container'>
            <h2 className='text-green special font-cozy'>Doradztwo barowe</h2>
            <div className='col-container flex flex-col 900:flex-row 900:justify-between'>
              <div className='col'>
                {' '}
                <ReactMarkdown
                  className='markdown__consultancy markdown-cozy text-green'
                  source={pageData.consultancy}
                />
              </div>
              <div className='col '>
                {/* <Img fluid={pageData.consultancyimg.childImageSharp.fluid} /> */}
                <ReactMarkdown
                  className='markdown__consultancy markdown-cozy text-green'
                  source={pageData.consultancyright}
                />
              </div>
            </div>
          </div>
        </section>
        <section className='events bg-white' id='events'>
          <div className='half-section'>
            <div className='half-section__col'>
              <Img
                className='half-section__image'
                fluid={pageData.eventsimg.childImageSharp.fluid}
              />
            </div>
            <div className='half-section__col'>
              <div className='half-section__content'>
                <div className=''>
                  <ReactMarkdown
                    className='markdown__events  markdown-cozy'
                    source={pageData.events}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <AboutPageTemplate data={data} />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { template: { eq: "about" } }) {
      frontmatter {
        title
        herobackground {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        weddings
        scenarios
        events
        workshops
        workshopsright
        eventsimg {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        consultancyimg {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        consultancy
        consultancyright
        consultancybar
        seo {
          description
          title
        }
      }
    }
  }
`

export default AboutPage
