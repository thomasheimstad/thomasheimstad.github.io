import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import {FaArrowLeft} from 'react-icons/fa';
import Hero from "../components/Modules/Hero";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    const onClick = e => {
      e.preventDefault()
      history.back()
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div className="post flex column center">
          <div className="backArrow">
            <FaArrowLeft size={32} onClick={onClick} />
            </div>
            <Hero fluid={post.img.childImageSharp.fluid} posY="50%" posX="20%" divider="2"/>
            <div className="article basePad" >
              <h1>{post.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              {/*<div className="post-meta">
                <PostTags tags={post.tags} />
              </div>*/}
              <UserInfo config={config} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        firm
        department
        img {
          childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                src
                ...GatsbyImageSharpFluid
            }
          }
        }
        date
        hired
        respons
        position
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
