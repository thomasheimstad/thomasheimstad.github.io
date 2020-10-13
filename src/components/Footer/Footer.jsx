import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Footer() {
    return (
      <StaticQuery
        query={graphql`
          query ContactCardQuery {
            file(relativePath: { eq: "DSCF0477crop2.jpg" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 200, maxHeight: 200, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <div id="contact" className="contact flex center column basePad">
            <h2>Let's work together</h2>
            <hr style={{width: '5rem'}}/>
            <br/>
            <div className="contactCard flex spaceAround basePad">
              <div className="contactCardText">
              <h3>Thomas Heimstad</h3>
              <p>thomasheimstad@gmail.com</p>
              <p>+47 46 88 62 65</p>
              </div>
              <div className="contactCardImage">
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
            </div>

          </div>
        )}
      />
    )
  }
