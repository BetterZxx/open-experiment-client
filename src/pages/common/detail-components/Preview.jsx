import React, { Component } from 'react';
import { Card, Button, Upload, Icon } from 'antd';
class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreview: false,
    };
  }
  togglePreview = () => {
    this.setState({
      isPreview: !this.state.isPreview,
    });
  };
  render() {
    const props = {
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
          console.log(file, fileList);
        }
      },
      defaultFileList: [
        {
          uid: '1',
          name: 'xxx.png',
          status: 'done',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/xxx.png',
        },
      ],
    };
    const { isPreview } = this.state;
    return (
      <Card
        title="项目主要内容"
        style={{
          marginBottom: 24,
        }}
      >
        <div style={{ width: '50%', float: 'left' }}>
          <Upload {...props} style={{ width: '200', float: 'left' }}>
            <Button>
              <Icon type="upload" /> 重新上传
            </Button>
          </Upload>
        </div>
        <Button onClick={this.togglePreview}>{isPreview ? '取消预览' : '预览'}</Button>
        <embed
          src="http://47.107.61.232:8081/sign/100%E9%A2%98%E7%B3%BB%E5%88%97by_July.pdf"
          style={{ display: isPreview ? 'block' : 'none' }}
          type="application/pdf"
          width="100%"
          height="900px"
        />
      </Card>
    );
  }
}

export default Preview;
