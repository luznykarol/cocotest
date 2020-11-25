import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import Layout from '@/components/Layout'

export const ServicesPageTemplate = ({ data }) => {
  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='container-lg px-5 sm:px-10'>
          <section className='w-full bg-teal-100 py-20 px-5 rounded-lg shadow border-grey-lighter border'>
            <div className='text-center mx-auto'>
              <h1>Usługi towarzyszące</h1>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

const ServicesPage = () => {
  //   const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      {/* <WwdPageTemplate data={frontmatter} /> */}
      <ServicesPageTemplate />
    </Layout>
  )
}

// WwdPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// };

// export const pageQuery = graphql`
//   query WwdPageTemplate {
//     markdownRemark(frontmatter: { template: { eq: "index" } }) {
//       frontmatter {
//         title
//         links {
//           link {
//             content
//             url
//           }
//         }
//       }
//     }
//   }
// `;

export default ServicesPage
