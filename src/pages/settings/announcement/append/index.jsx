import {
  Badge,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  Menu,
  Row,
  Modal,
  Timeline,
  Select,
  message,
  Descriptions
} from 'antd';
import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
const FormItem = Form.Item;
const {TextArea} = Input
/* eslint react/no-multi-comp:0 */
@connect(({ listTableList, loading }) => ({
  listTableList,
  loading: loading.models.listTableList,
}))
class TableList extends Component {
  state = {
    modalVisible: false,
    updateModalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {},
    stepFormValues: {},
    detailModalVisible:false,
    text: ''
  };

  
  handleChange = (value) => {
    this.setState({ text: value })
  }
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    
    const title = <div>
      <span>标题 :</span>
      {getFieldDecorator('status')(
        <Input placeholder='标题' style={{width:'80%',marginLeft:15}} ></Input>
      )}  
    </div>
    const extra = <div>
      <Button type='primary'>发布</Button>
      <Button style={{margin:'0 15px'}}>保存</Button>
      <Button onClick={()=>{this.props.history.goBack()}}>返回</Button>
    </div>
    return (
      <PageHeaderWrapper
      extra={extra}
      
      >
        <Card
          title={title}
        >
          正文
          <ReactQuill value={this.state.text }
                  onChange={this.handleChange}
                  style={{height:600,marginBottom:50}}
                  />
        </Card>
        
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(TableList);
