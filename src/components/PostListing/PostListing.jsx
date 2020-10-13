import React from "react";
import { Link } from "gatsby";
import CVView from './CVView';
import ProjectView from './ProjectView';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        postdate: postEdge.node.fields.date,
        tags: postEdge.node.frontmatter.tags,
        img: postEdge.node.frontmatter.img,
        title: postEdge.node.frontmatter.title,
        firm: postEdge.node.frontmatter.firm,
        department: postEdge.node.frontmatter.department,
        date: postEdge.node.frontmatter.date,
        hired: postEdge.node.frontmatter.hired,
        respons: postEdge.node.frontmatter.respons,
        position: postEdge.node.frontmatter.position,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    console.log(postList);
    return postList;
  }
  render = () => {
    const postList = this.getPostList();
    if(this.props.category === "CV") {
      return (
        <CVView postList={postList} />
      )
    } else if(this.props.category == "project") {
      return (
        <ProjectView postList={postList} />
      )
    } else {
      return (
        <div>
          {/* Your post list here. */
          postList.map((post,i) => (
            <Link to={post.path} key={i}>
              <div className="flex center">
                <div>
                  <h2>{post.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )
    }
  }
}

export default PostListing;
