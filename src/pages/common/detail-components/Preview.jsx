import React, { Component } from 'react';
import { Card, Button, Upload, Icon } from 'antd';
import {connect} from 'dva'
import {saveAs} from 'file-saver'
import {applyModel} from '@/utils/constant'
import baidu from 'baidu-template-pro'
@connect(({
  detail,
  loading
})=>({
  detail:detail.baseInfo,
  fileList:detail.fileList,
  loading:loading.models.detail
}))
class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreview: false
    };
  }
  togglePreview = () => {
    this.setState({
      isPreview: !this.state.isPreview,
    });
  };
  componentDidMount(){
    
  }
  downloadApplyModel = ()=>{
    const {detail} = this.props
    const students = detail.list.filter(item=>item.memberRole!==1)
    const teachers = detail.list.filter(item=>item.memberRole===1)
    const major = [...new Set(...detail.list.map(item=>major))].join('、')
    const grade = [...new Set(...detail.list.map(item=>grade))].join('、')
    const data = {
      projectName:detail.projectName,
      projectType:detail.projectType===1?'普通':'重点',
      applyFunds:detail.applyFunds,
      major,
      grade,
      students,
      teachers
    }
    let html = baidu.template(applyModel,data)
    var blob = new Blob([html], {type: "application/msword;charset=utf-8"});
    saveAs(blob,'重点项目申请书.doc')
  }
  render() {
    // const props = {
    //   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //   onChange({ file, fileList }) {
    //     if (file.status !== 'uploading') {
    //       console.log(file, fileList);
    //     }
    //   },
    //   fileList: [
    //     {
    //       uid: '1',
    //       name: 'xxx.png',  
    //       status: 'done',
    //       response: 'Server Error 500', // custom error message to show
    //       url: 'http://47.107.61.232:8081/sign/100%E9%A2%98%E7%B3%BB%E5%88%97by_July.pdf',
    //     },
    //   ],
    // };
    const { isPreview } = this.state;
    const {detail,fileList,loading} = this.props
    console.log(detail.applyurl)
    const props = {
      beforeUpload: file => {
        const {dispatch} = this.props
        const formData = new FormData()
        formData.append('file',file)
        formData.append('projectGroupId',detail.id)
        dispatch({
          type:'detail/uploadApplyFile',
          payload:{
            data:formData,
            file
          }
        })
        return false;
      },
      fileList,
    };
    const extra = <Button onClick={this.downloadApplyModel} type='primary' icon='download'>模板下载</Button> 
    return (
      <Card
        title="重点申请正文"
        style={{
          marginBottom: 24,
        }}
        extra={extra}
      >
        <div style={{ width: '50%', float: 'left' }}>
          <Upload {...props} style={{ width: '200', float: 'left' }}>
            <Button loading={loading}>
              <Icon type="upload" /> {detail.applyurl?'重新上传':'上传'}
            </Button>
          </Upload>
        </div>
        <Button onClick={this.togglePreview}>{isPreview ? '取消预览' : '预览'}</Button>
        <embed
          src={detail.applyurl}
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
