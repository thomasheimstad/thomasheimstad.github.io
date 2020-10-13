import React from 'react';
import Img from "gatsby-image/withIEPolyfill";
import { StaticQuery, graphql } from 'gatsby';
import {FaUserGraduate,FaBriefcase,FaComments,FaMedal,FaUsers} from 'react-icons/fa';

export default function Welcome() {
    return (
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            file(relativePath: { eq: "DSCF0477crop2.jpg" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 400, maxHeight: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <div className="welcome flex column center basePad">
            <div className="frontHero">
              <Img
              fluid={data.file.childImageSharp.fluid}
              objectFit="contain"
              objectPosition="50% 50%"
              />
            </div>
          <h1>THOMAS HEIMSTAD</h1>
          <div className="article">
            <p>An interactive CV - the contemporary choice</p>
            <div className="buttons flex row center" style={{width: '100%'}}>
              <a href="#jobListing" alt="job list"><button><FaBriefcase size={26}/></button></a>
              <a href="#eduListing" alt="education list"><button><FaUserGraduate size={26}/></button></a>
              <a href="#projectListing" alt="project list"><button><FaUsers size={26}/></button></a>
              <a href="#skilListing" alt="skill list"><button><FaMedal size={26}/></button></a>
              <a href="#contact" alt="contact"><button><FaComments size={26}/></button></a>
            </div>
          </div>
          </div>
        )}
      />
    )
  }
