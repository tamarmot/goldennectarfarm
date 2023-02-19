import React, { Component} from 'react';
import ReactMarkdown from 'react-markdown';

import food from './markdown/About.md';

function LinkRenderer(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" style={{color:'#40728d', textDecoration:'none', fontWeight:700}}>
      {props.children}
    </a>
  );
}

class About extends Component {


  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentDidMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(food).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return <ReactMarkdown  
    components={{ a: LinkRenderer}}
    children={markdown}/>
  }
}

  
  export default About;
  