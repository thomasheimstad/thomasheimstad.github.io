import React from 'react';
import Img from "gatsby-image/withIEPolyfill";
import { StaticQuery, graphql } from 'gatsby';
import { Link, animateScroll as scroll } from "react-scroll";
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
              <Link
                to="jobListing"
                alt="job list"
                smooth={true}
                duration={400}>
                <button><FaBriefcase size={26}/></button>
              </Link>
              <Link
                to="eduListing"
                alt="education list"
                smooth={true}
                duration={400}>
                <button><FaUserGraduate size={26}/></button>
              </Link>
              <Link
                to="projectListing"
                alt="project list"
                smooth={true}
                duration={400}>
                <button><FaUsers size={26}/></button>
              </Link>
              <Link
                to="skilListing"
                alt="skill list"
                smooth={true}
                duration={400}>
                <button><FaMedal size={26}/></button>
              </Link>
              <Link
                to="contact"
                alt="contact"
                smooth={true}
                duration={400}>
                <button><FaComments size={26}/></button>
              </Link>
            </div>
          </div>
          </div>
        )}
      />
    )
  }
