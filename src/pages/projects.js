import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import Layout from '@/components/Layout'
import Swiper from '@/components/Slider/Slider'
require('swiper/swiper-bundle.css')

export const ProjectsPageTemplate = ({ data }) => {
  console.log(data)
  const projectsArr = data.project.edges
  console.log('projekty', projectsArr)
  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='container-lg px-5 sm:px-10'>
          <section className='w-full -100 my-20 py-20 '>
            <div className='text-center mx-auto'>
              <div className='projects-wrap'>
                {projectsArr &&
                  projectsArr.map(({ node: project }) => (
                    <Swiper
                      key={project.id}
                      cover={project.frontmatter.cover.childImageSharp.fluid}
                      image={project.frontmatter.image.childImageSharp.fluid}
                      body={project.frontmatter.body}
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
  //   const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      {/* <WwdPageTemplate data={frontmatter} /> */}
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
      filter: { frontmatter: { templateKey: { eq: "Project" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(quality: 70, maxWidth: 360) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            image {
              childImageSharp {
                fluid(quality: 70, maxWidth: 360) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            body
          }
        }
      }
    }
  }
`

export default ProjectsPage
