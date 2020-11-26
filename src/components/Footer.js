import React from 'react'
import { Link } from 'gatsby'
import ReactSVG from 'react-svg'
import ReactMarkdown from 'react-markdown'
import { graphql, useStaticQuery } from 'gatsby'
import Form from '@/components/Forms/Contact'
import FacebookIcon from '@/components/Icons/Facebook'
import InstagramIcon from '@/components/Icons/Instagram'
import PhoneIcon from '@/components/Icons/Phone'
import MailIcon from '@/components/Icons/Mail'

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
  console.log('FOOTER', footerData)
  return (
    <footer className='footer py-20 w-full bg-red' id='contact'>
      <div className='container '>
        <div className='flex flex-col lg:flex-row lg:justify-between'>
          <div className='footer__info'>
            <h2 className='h2-section text-h2 font-bold font-cozy text-yellow '>
              {footerData.contact.text}
            </h2>
            {/* <ReactSVG
              className='footer-arrow mb-30'
              src={footerData.image.publicURL}
            /> */}

            <p className='text-yellow text-left para-section'>
              {footerData.heading}
            </p>
            <div className='text-yellow mt-10 lg:block hidden '>
              {/* <h4 className='text-h4 font-bold font-cozy  '>
                {footerData.contact.text}
              </h4> */}

              <a
                className='flex items-center mt-5'
                href={`tel:${footerData.contact.mail}`}>
                {/* <MailIcon /> */}
                {/* <p className='ml-2'>{footerData.contact.mail}</p> */}
                <p className='font-medium'>{footerData.contact.mail}</p>
              </a>
              <a
                className='flex items-center mt-5 '
                href={`tel:${footerData.contact.phone}`}>
                {/* <PhoneIcon /> */}
                {/* <p className='ml-2'>{footerData.contact.phone}</p> */}
                <p className='font-medium'>{footerData.contact.phone}</p>
              </a>
            </div>
            <div className='flex items-center mt-5'>
              <a
                className='flex items-center text-yellow'
                href={`tel:${footerData.contact.phone}`}>
                <FacebookIcon />
              </a>
              <a
                className='flex items-center ml-4 text-yellow'
                href={`tel:${footerData.contact.phone}`}>
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className='footer__form mt-20 lg:mt-0'>
            <Form formTitle='Contact Form' />
          </div>
          <div className='text-yellow mt-10 block lg:hidden '>
            <p className='font-bold '>{footerData.contact.text}</p>
            <a href={`mailto:${footerData.contact.mail}`}>
              {footerData.contact.mail}
            </a>
            <a className='block' href={`tel:${footerData.contact.phone}`}>
              {footerData.contact.phone}
            </a>
          </div>
          <ReactMarkdown
            className='text-yellow text-left block lg:hidden md:max-w-full mt-5 link-block'
            source={footerData.socials}
            renderers={{
              link: (props) => (
                <a href={props.href} target='_blank' rel='noopener noreferrer'>
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
