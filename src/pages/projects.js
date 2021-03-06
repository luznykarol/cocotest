import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import Layout from '@/components/Layout'
import Swiper from '@/components/Slider/Slider'
/* purgecss start ignore */
// require('swiper/swiper-bundle.css')
/* purgecss end ignore */
export const ProjectsPageTemplate = ({ data }) => {
  console.log(data)
  const projectsArr = data.project.edges
  console.log('projekty', projectsArr)
  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='container-lg px-5 sm:px-10'>
          <section className='w-full -100 my-20 py-20 '>
            <div className=' mx-auto'>
              <h2 className='h2-section '>Projekty</h2>
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
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <ProjectsPageTemplate data={data} />
    </Layout>
  )
}

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query ProjectsPageTemplate {
    markdownRemark(frontmatter: { template: { eq: "projects" } }) {
      frontmatter {
        title
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

export default ProjectsPage
