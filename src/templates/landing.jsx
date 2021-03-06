import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Welcome from "../components/Modules/Welcome";
import JobListing from "../components/PostListing/JobListing";
import EduListing from "../components/PostListing/EduListing";
import ProjectListing from "../components/PostListing/ProjectListing";
import SkilListing from "../components/PostListing/SkilListing";
import config from "../../data/SiteConfig";

class Landing extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="landing-container">
            <Helmet title={config.siteTitle}>
              <meta name="description" content={config.siteDescription} />
              <meta property="og:title" content={config.siteTitle} />
              <meta property="og:description" content={config.siteDescription} />
              <meta property="og:type" content={config.siteType} />
              <meta property="og:image" content={config.siteImg} />
              <meta name="image" property="og:image" content={config.siteImg} />
              <meta property="og:image:secure_url" content={config.siteImg} />
              <meta property="og:image:type" content="image/jpg" />
              <meta name="author" content={config.siteTitle} />
              </Helmet>
            <SEO />
            <Welcome />
            <JobListing />
            <EduListing />
            <ProjectListing />
            <SkilListing />
        </div>
      </Layout>
    );
  }
}

export default Landing;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
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
`;
