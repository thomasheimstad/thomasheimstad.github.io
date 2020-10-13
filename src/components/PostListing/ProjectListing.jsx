import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import PostListing from "./PostListing";

export default function ProjectListing() {
    return (
      <StaticQuery
        query={graphql`
          query ProjectListingQuery {
            allMarkdownRemark(
              sort: { fields: [frontmatter___position], order: ASC }
              filter: { frontmatter:  { category: { eq:"project"}}}
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
          <div id="projectListing" className="jobListing flex column center basePad">
            <PostListing postEdges={data.allMarkdownRemark.edges} category="project" />
          </div>
        )}
      />
    )
  }
