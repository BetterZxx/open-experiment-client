import React, { Component } from 'react'
import {PageHeaderWrapper} from '@ant-design/pro-layout'
import {connect} from 'dva'
import {Card,Table,Button,Modal,Input,Select,Form}  from 'antd'

const {Option} = Select
@connect(({role})=>({
  roles:role.roles
}))
class Authority extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mVisible:false
     }
  }
  handleAddRole = ()=>{
    const {form,dispatch} = this.props
    form.validateFields((err,values)=>{
      dispatch({
        type:'role/add',
        payload:{
          ...values
        }
      })
    })
    this.setState({
      mVisible:false
    })
  }
  showAddModal = ()=>{
    this.setState({
      mVisible:true
    })
  }
  hideModal = ()=>{
    this.setState({
      mVisible:false
    })
  }
  render() { 
    const title = (
      <Button type='primary' onClick={this.showAddModal}>添加角色</Button>
    )
    const {getFieldDecorator} = this.props.form
    const {mVisible} = this.state 
    const formLayout = {
      wrapperCol:{
        span:18
      },
      labelCol:{
        span:4
      }
    }
    return ( 
    <PageHeaderWrapper>
      <Card
        title={title}
      >
        <Modal
        onOk={this.handleAddRole}
        onCancel={this.hideModal}
        title="添加角色"
        visible={mVisible}
        width='450px'
        >
          <Form {...formLayout}>
            <Form.Item label='用户ID'>
              {getFieldDecorator('userId')(
                <Input placeholder='请输入用户id'></Input>
              )}
            </Form.Item>
            <Form.Item label='角色'>
              {getFieldDecorator('roleId')(
                <Select>
                  <Option value='0'>超级管理员</Option>
                  <Option value='7'>职能部门领导</Option>
                  <Option value='4'>实验室主任</Option>
                </Select>
              )}
            </Form.Item>
          </Form>
        </Modal>

      </Card>
    </PageHeaderWrapper>
      );
  }
}
 
export default Form.create()(Authority);