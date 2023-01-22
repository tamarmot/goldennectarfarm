import React, { Component} from 'react';
import ReactMarkdown from 'react-markdown';

import food from './WhatWeGrow.md';


class WhatWeGrow extends Component {

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
    return <ReactMarkdown children={markdown} />;
  }
}

  
  export default WhatWeGrow;
  