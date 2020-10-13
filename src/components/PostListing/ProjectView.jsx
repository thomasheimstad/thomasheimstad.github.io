import React from 'react';
import {Link} from 'gatsby';
const ProjectView = (props) => {
  return(
    <div className="cvView flex column center">
      <h2>Projects</h2>
      <hr style={{width: '5rem'}}/>
      <div className="flex wrap center">
      {/* Your post list here. */
        props.postList.map((post,i) => (
          <Link to={post.path} key={i}>
            <div className="jobCard flex column">
              <div className="title">
                <h3>{post.title}</h3>
              </div>
              <div className="content flex column">
                <p style={{fontStyle:"italic", marginBottom: '0'}}>{post.date}</p>
                <p style={{marginTop: '0', marginBottom: '0', fontWeight: '700'}}>{post.firm}</p>
                <p style={{marginTop: '0', marginBottom: '0'}}>Role: {post.department}</p>
                <p>{post.respons}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default ProjectView;
