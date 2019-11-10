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
import CreateForm from './components/CreateForm';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import StandardTable from './components/StandardTable';
import UpdateForm from './components/UpdateForm';
import {projectType,memberRole, experimentType} from '@/utils/constant'
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

const statusMap = ['default', 'success', 'error'];
const status = ['待审核','已通过','已拒绝'];

/* eslint react/no-multi-comp:0 */
@connect(({ loading,applyStudents,tprojects }) => ({
  loading: loading.models.applyStudents,
  students:applyStudents.data,
  projects:tprojects.projects
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
    apply:{}
  };

  columns = [
    {
      title: '项目名称',
      dataIndex: 'projectName',
    },
    {
      title: '申请人',
      dataIndex: 'realName',
    },
    {
      title: '项目级别',
      dataIndex:'projectType',
      render:(type)=>{
        return type===1?'普通':'重点'
      }
    },
    {
      title: '专业',
      dataIndex: 'major',
    },
    {
      title: '年级',
      dataIndex: 'grade',
      render:(val)=>{
        return val+'级'

      }
    },
    {
      title: '项目角色',
      dataIndex: 'memberRole',
      render:(val)=>{
        return memberRole[val-1]
      }
    },
    {
      title: '实验类型',
      dataIndex: 'experimentType',
      render:(type)=>experimentType[type]

    },
    {
      title: '状态',
      dataIndex: 'status',
      
      render:(val) => {
        return <span>
          <Badge status={statusMap[val-1]} text={status[val-1]} />
        </span>;
      },
    },
    {
      title: '申请时间',
      dataIndex: 'applyTime',
      sorter: true,
      render: val => <span>{moment(val).format('YYYY-MM-DD')}</span>,
    },
    {
      title: '操作',
      render: (val) => (
        <Fragment>
          <a onClick={()=>this.showDetailModal(val)}>详情</a>
          {/* <Divider type="vertical" /> */}
          
        </Fragment>
      ),
    },
  ];
  editWarning = ()=>{
    Modal.warning({
      title: '提醒',
      content: '编辑申请表会导致审核重新开始',
      okText:'知道了',
      onOk:()=>{this.props.history.push('/tproject/manage/edit')}
    });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'applyStudents/fetch',
    });
    dispatch({
      type:'tprojects/fetch'
    })
  }

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
    dispatch({
      type: 'listTableList/fetch',
      payload: {},
    });
  };
  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  handleSearch = e => {
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      console.log(fieldsValue)
      const values = {
        ...fieldsValue,
      };
      this.setState({
        formValues: values,
      });
      dispatch({
        type: 'applyStudents/filter',
        payload: values,
      });
    });
  };


  handleAdd = () => {
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      console.log(fieldsValue)
      const values = {
        ...fieldsValue,
      };
      this.setState({
        formValues: values,
        modalVisible:false
      });
      dispatch({
        type: 'applyStudents/add',
        payload: values,
      });
    });
  };

  handleUpdate = fields => {
    const { dispatch } = this.props;
    dispatch({
      type: 'listTableList/update',
      payload: {
        name: fields.name,
        desc: fields.desc,
        key: fields.key,
      },
    });
    message.success('配置成功');
    this.handleUpdateModalVisible();
  };

  renderSimpleForm() {
    const { form,projects } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row
          gutter={{
            md: 8,
            lg: 24,
            xl: 48,
          }}
        >
          <Col md={8} sm={24}>
            <FormItem label="项目名称">
              {getFieldDecorator('id')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  {projects.map((item,index)=>{
                    return <Option key={index} value={item.id}>{item.projectName}</Option>

                  })}
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="状态">
              {getFieldDecorator('status',{
                initialValue:'1'
              })(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  <Option value="">全部</Option>
                  <Option value="1">待审核</Option>
                  <Option value="2">已通过</Option>
                  <Option value="3">已拒绝</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" onClick={this.handleSearch}>
                查询
              </Button>
              <Button
                style={{
                  marginLeft: 8,
                }}
                onClick={this.handleFormReset}
              >
                重置
              </Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderForm() {
    return  this.renderSimpleForm();
  }
  hideModal = ()=>{
    this.setState({
      modalVisible:false
    })
  }
  showModal = ()=>{
    this.setState({
      modalVisible:true
    })
  }
  showDetailModal = (apply)=>{
    this.setState({
      detailModalVisible:true,
      apply
    })
  }
  hideDetailModal = ()=>{
    this.setState({
      detailModalVisible:false
    })
  }
  handleAgree = ()=>{
    const {dispatch} = this.props
    const {selectedRows} = this.state
    let payload = selectedRows.map(item=>{
      return {
        projectGroupId:item.id,
        reason:'',
        userId:item.code
      }
    })
    dispatch({
      type:'applyStudents/agree',
      payload
    })
  }
  handleReject = ()=>{
    const {dispatch} = this.props
    const {selectedRows} = this.state
    let payload = selectedRows.map(item=>{
      return {
        projectGroupId:item.id,
        reason:'',
        userId:item.code
      }
    })
    dispatch({
      type:'applyStudents/reject',
      payload
    })
  }
  handleRemove = ()=>{
    const {selectedRows} = this.state
    if(selectedRows.length>1)
    message.warning('不能设置批量移除')
    const {dispatch} = this.props
    
    let payload = {
        projectGroupId:selectedRows[0].id,
        reason:'',
        userId:selectedRows[0].code
    }
    dispatch({
      type:'applyStudents/remove',
      payload
    })
  }
  handleSetLeader = ()=>{
    const {selectedRows} = this.state
    if(selectedRows.length>1)
    message.warning('不能设置多个项目组长')
    const {dispatch} = this.props
    
    let payload = {
        projectGroupId:selectedRows[0].id,
        reason:'',
        userId:selectedRows[0].code,
        memberRole:2
    }
    dispatch({
      type:'applyStudents/setLeader',
      payload
    })
  }
  render() {
    const {
      loading,
      students,
      form,
      projects
    } = this.props;
    const {getFieldDecorator} = form
    const { selectedRows, modalVisible, updateModalVisible, stepFormValues,detailModalVisible,apply } = this.state;
    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="remove" onClick={this.handleSetLeader}>设为组长</Menu.Item>
        <Menu.Item key="approval" onClick={this.handleRemove} >删除成员</Menu.Item>
      </Menu>
    );
    return (
      <PageHeaderWrapper>
        <Card 
        bordered={false}
        >
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={this.showModal}>
                增添成员
              </Button>
              {selectedRows.length > 0 && (
                <span>
                  <Button type='primary' onClick={this.handleAgree}>通过</Button>
                  <Button onClick={this.handleReject}>拒绝</Button>
                  <Dropdown overlay={menu}>
                    <Button>
                      更多操作 <Icon type="down" />
                    </Button>
                  </Dropdown>
                </span>
              )}
            </div>
            <StandardTable
              selectedRows={selectedRows}
              loading={loading}
              dataSource={students}
              rowKey={(item,index)=>index}
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
            />
          </div>
          <Modal
          title="添加项目成员"
            visible={modalVisible}
            onCancel={this.hideModal}
            onOk={this.handleAdd}
            width={450}
            
          >
            <Form
            labelCol={{
              span:4
            }}
            wrapperCol={{
              span:20
            }}
            >
            <FormItem label="项目名称">
              {getFieldDecorator('projectGroupId')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  {projects.map((item,index)=>{
                    return <Option key={index} value={item.id}>{item.projectName}</Option>

                  })}
                </Select>,
              )}
            </FormItem>
            <FormItem label="学生学号">
              {getFieldDecorator('userId')(
                <Input></Input>
              )}
            </FormItem>
            </Form>  
          </Modal>
          <Modal
          visible={detailModalVisible}
          onCancel={this.hideDetailModal}
          width={700}
          >
            <Descriptions column={2} >
              <Descriptions.Item label='姓名'>
                {apply.realName}
              </Descriptions.Item>
              <Descriptions.Item label='学号'>
                {apply.code}
              </Descriptions.Item>
              <Descriptions.Item label='申请项目'>
                {apply.projectName}
              </Descriptions.Item>
              <Descriptions.Item label='项目层次'>
                {apply.projectType===1?'普通':'重点'}
              </Descriptions.Item>
              <Descriptions.Item label='QQ'>
                {apply.qqNum}
              </Descriptions.Item>
              <Descriptions.Item label='联系电话'>
                {apply.mobilePhone}
              </Descriptions.Item>
              <Descriptions.Item label='专业'>
                {apply.major}
              </Descriptions.Item>
              <Descriptions.Item label='年级'>
                {apply.grade+'级'}
              </Descriptions.Item>
              <Descriptions.Item span={2} label='学习绩点'>
                <Descriptions bordered>
                  <Descriptions.Item label='学期一'>
                    3.3
                  </Descriptions.Item>
                  <Descriptions.Item label='学期2'>
                    3.3
                  </Descriptions.Item>
                  <Descriptions.Item label='学期3'>
                    3.3
                  </Descriptions.Item>
                  <Descriptions.Item label='学期4'>
                    3.3
                  </Descriptions.Item>
                  <Descriptions.Item label='学期5'>
                    3.3
                  </Descriptions.Item>
                  <Descriptions.Item label='学期6'>
                    3.3
                  </Descriptions.Item>
                </Descriptions>
              </Descriptions.Item>
              <Descriptions.Item span={2} label='个人特长'>
                {apply.personJudge} 
              </Descriptions.Item>
              <Descriptions.Item span={2} label='已修课程及具备知识'>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX{apply.technicalRole} 
              </Descriptions.Item>
              
            </Descriptions>
          </Modal>
          {/* <CreateForm {...parentMethods} modalVisible={modalVisible} />
          {stepFormValues && Object.keys(stepFormValues).length ? (
            <UpdateForm
              {...updateMethods}
              updateModalVisible={updateModalVisible}
              values={stepFormValues}
            />
          ) : null} */}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(TableList);
