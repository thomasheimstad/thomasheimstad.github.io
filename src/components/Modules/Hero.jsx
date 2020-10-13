import React from 'react';
import Img from "gatsby-image";
export default class Hero extends React.Component {
  state = {
    windowHeight: '',
    windowWidth: ''
  }
  handleResize = () => {
    let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        this.setState({
          windowWidth: x,
          windowHeight: y
        })
  }
  componentDidMount = () => {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }
  render = () => {
    return (
      <div style={{position: 'relative', height: this.state.windowHeight/this.props.divider, width: '100%'}}>
        <Img fluid={this.props.fluid} style={{
         position: 'relative',
         left: 0,
         top: 0,
         width: "100%",
         height: "100%",
         zIndex: "1"
       }}
       imgStyle={{
         objectPosition: `${this.props.posY} ${this.props.posX}`,
         opacity: '1'
       }} />
   </div>
    )
  }
}
