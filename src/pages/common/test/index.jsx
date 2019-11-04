import React, { Component } from 'react'
import { Document, Page } from 'react-pdf';
import { connect } from 'dva';
@connect(({ test }) => ({
 pdf:test.pdf
}))
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      numPages: null,
      pageNumber: 1,
    }
  }
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  componentDidMount(){
    const {dispatch} = this.props
    dispatch({
      type:'test/fetch'
    })
  }
  render() { 
    const { pageNumber, numPages } = this.state;
    return (  
      <div>
        <embed src="http://47.107.61.232:8081/sign/100%E9%A2%98%E7%B3%BB%E5%88%97by_July.pdf" type="application/pdf" width="100%" height="600px"/>
        <Document
          file={this.props.pdf}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} style={{width:'100%'}} />
          <Page pageNumber={pageNumber+1} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
      );
  }
}
 
export default Test;