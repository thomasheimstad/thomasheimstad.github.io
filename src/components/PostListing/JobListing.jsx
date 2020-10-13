import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import PostListing from "./PostListing";

export default function JobListing() {
    return (
      <StaticQuery
        query={graphql`
          query JobListingQuery {
            allMarkdownRemark(
              sort: { fields: [frontmatter___position], order: ASC }
              filter: { frontmatter:  { category: { eq:"CV"}}}
              ) {
              edges {
                node {
                  fields {
                    slug
                    date
                  }
                  excerpt
                  timeToRead
                  frontmatter {
                    title
                    firm
                    department
                    tags
                    img {
                      childImageSharp {
                          fluid(maxWidth: 600, quality: 50) {
                            src
                        }
                      }
                    }
                    date
                    hired
                    respons
                    position
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div id="jobListing" className="jobListing flex column center basePad">
            <PostListing postEdges={data.allMarkdownRemark.edges} category="CV" />
          </div>
        )}
      />
    )
  }
