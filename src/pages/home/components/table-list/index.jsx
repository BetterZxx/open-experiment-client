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
  Select,
  message,
  TreeSelect
} from 'antd';
import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import CreateForm from './components/CreateForm';
import StandardTable from './components/StandardTable';
import UpdateForm from './components/UpdateForm';
import {projectType,major,college,grade,suggestGroupType, experimentType, majorCollege} from '@/utils/constant'
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const {TreeNode} = TreeSelect

const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['关闭', '运行中', '已上线', '异常'];

/* eslint react/no-multi-comp:0 */
@connect(({ listTableList, loading,openProjects }) => ({
  listTableList,
  loading: loading.models.listTableList,
  projects:openProjects.projects
}))
class TableList extends Component {
  state = {
    modalVisible: false,
    updateModalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {},
    stepFormValues: {},
  };

  columns = [
    {
      title: '项目名称',
      dataIndex: 'projectName',
    },
    {
      title: '开放学院',
      dataIndex: 'openCollege',
      render:()=>'计科院'
    },
    {
      title: '实验类型',
      dataIndex: 'experimentType',
      render:(type)=>{
        return experimentType[type]
      }
    },
    {
      title: '指导老师',
      dataIndex: 'guidanceTeachers',
      render:(t)=>'XX老师'//t[0].userName
    },
    {
      title: '项目级别',
      dataIndex: 'projectType',
      render: val => val===1?'普通':'重点'
    },
    {
      title: '已选学生数',
      dataIndex: 'memberStudents',
      render:(students)=>students?students.length:0
    },
    {
      title: '计划实验时间',
      render: project => <span>{moment(project.startTime).format('YYYY-MM-DD')+'~'+moment(project.endTime).format('YYYY-MM-DD')}</span>,
    },
    {
      title: '操作',
      dataIndex:'id',
      render: (id) => (
        <Fragment>
          <a onClick={() => this.handleApply(id)}>申请</a>
          
          <Divider type="vertical" />
          <a onClick={()=>this.handleDetailClick(id)}>查看详情</a>
        </Fragment>
      ),
    },
  ];
  handleApply = (id)=>{
    const {dispatch} = this.props
    dispatch({
      type:'detail/fetchDetail',
      payload:{
        projectGroupId:id,
        role:4
      }
    })

  }
  handleDetailClick = (id)=>{
    const {dispatch} = this.props
    dispatch({
      type:'detail/fetchDetail',
      payload:{
        projectGroupId:id,
        role:3
      }
    })
    dispatch({
      type:'detail/fetchProcess',
      payload:{
        projectId:id,
        role:3
      }
    })
  }

  componentDidMount() {
  }

  
  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
  };

  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

 

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  handleFilter = ()=>{
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const values = {
        ...fieldsValue
      };
      if(fieldsValue.date){
        values.startTime = fieldsValue.date[0].format('x')
        values.endTime = fieldsValue.date[1].format('x')
      }
      console.log(values)
      this.setState({
        formValues: values,
      });
      dispatch({
        type:'openProjects/filter',
        payload:values
      })
    });

  }

  handleModalVisible = flag => {
    this.setState({
      modalVisible: !!flag,
    });
  };

  handleUpdateModalVisible = (flag, record) => {
    this.setState({
      updateModalVisible: !!flag,
      stepFormValues: record || {},
    });
  };



  renderSimpleForm() {
    const { form } = this.props;
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
              {getFieldDecorator('projectName')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="指导老师">
              {getFieldDecorator('teacher')(
                <Input placeholder="请输入" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" onClick={this.handleFilter}>
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
              <a
                style={{
                  marginLeft: 8,
                }}
                onClick={this.toggleForm}
              >
                展开 <Icon type="down" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderAdvancedForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
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
              {getFieldDecorator('projectName')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="指导老师">
              {getFieldDecorator('teacherName')(
                <Input placeholder="请输入" />
                
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="开放学院">
              {getFieldDecorator('college')(
                <Select
                placeholder="请选择"
                style={{
                  width: '100%',
                }}
              >
                {
                    majorCollege.map((item)=>{
                    return item?<Option key={item.cId} value={item.cId}>{item.cName}</Option>:''
                  })
                }
                
              </Select>,
              )}
            </FormItem>
          </Col>
        </Row>
        <Row
          gutter={{
            md: 8,
            lg: 24,
            xl: 48,
          }}
        >
          <Col md={8} sm={24}>
            <FormItem label="计划实验时间">
              {getFieldDecorator('date')(
                <RangePicker
                  
                  style={{
                    width: '100%',
                  }}
                  
                />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="限选专业">
              {getFieldDecorator('limitMajor')(
                <TreeSelect                     
                placeholder="请选择适应专业"
                allowClear
                multiple={true}
                onChange={this.onChange}
              >             
                {this.renderTreeNode(majorCollege)}
              </TreeSelect>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="限选学院">
              {getFieldDecorator('limitCollege')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                  mode="multiple"
                >
                  {
                    majorCollege.map((item)=>{
                    return item?<Option key={item.cId} value={item.cId}>{item.cName}</Option>:''
                  })
                  }
                </Select>,
              )}
            </FormItem>
          </Col>
        </Row>
        <Row
          gutter={{
            md: 8,
            lg: 24,
            xl: 48,
          }}
        >
          <Col md={8} sm={24}>
            <FormItem label="限选年级">
              {getFieldDecorator('limitGrade')(
                <Select
                placeholder="请选择"
                style={{
                  width: '100%',
                }}
                mode="multiple"
              >
                {grade.map((item,index)=>{
                  return <Option key={index} value={item}>{item+'级'}</Option>
                })}
              </Select>,
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="实验类型">
              {getFieldDecorator('experimentType')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  {
                    Object.keys(experimentType).map((item)=>{
                      return item?<Option key={item} value={item}>{experimentType[item]}</Option>:''
                    })
                  }
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="普通/重点项目">
              {getFieldDecorator('experimentType')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  <Option value="1">普通</Option>
                  <Option value="2">重点</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
        </Row>
        <div
          style={{
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              float: 'right',
              marginBottom: 24,
            }}
          >
            <Button type="primary" onClick={this.handleFilter}>
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
            <a
              style={{
                marginLeft: 8,
              }}
              onClick={this.toggleForm}
            >
              收起 <Icon type="up" />
            </a>
          </div>
        </div>
      </Form>
    );
  }

  renderForm() {
    const { expandForm } = this.state;
    return expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
  }
  renderTreeNode = (majorCollege)=>{
    return majorCollege.map(item=>{
      return <TreeNode value={item.cId+'c'} title={item.cName} key={item.cId+'c'} selectable={false}>
        {
          item.majors.map(element=>{
            return <TreeNode value={element.mId} key={element.mId} title={element.mName}>
            </TreeNode>
          })
        }
      </TreeNode>
    })
  }
  render() {
    const {
      listTableList: { data },
      loading,
      projects
    } = this.props;
    const { selectedRows, modalVisible, updateModalVisible, stepFormValues } = this.state;
    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="remove">删除</Menu.Item>
        <Menu.Item key="approval">批量审批</Menu.Item>
      </Menu>
    );
    const parentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleModalVisible,
    };
    const updateMethods = {
      handleUpdateModalVisible: this.handleUpdateModalVisible,
      handleUpdate: this.handleUpdate,
    };
    return (
        <Card bordered={false} title='项目公示'>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            {/* <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
                新建
              </Button>
              {selectedRows.length > 0 && (
                <span>
                  <Button>批量操作</Button>
                  <Dropdown overlay={menu}>
                    <Button>
                      更多操作 <Icon type="down" />
                    </Button>
                  </Dropdown>
                </span>
              )}
            </div> */}
            <StandardTable
              selectedRows={selectedRows}
              loading={loading}
              dataSource={projects}
              rowKey={(item,index)=>index}
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
            />
          </div>
          <CreateForm {...parentMethods} modalVisible={modalVisible} />
          {stepFormValues && Object.keys(stepFormValues).length ? (
            <UpdateForm
              {...updateMethods}
              updateModalVisible={updateModalVisible}
              values={stepFormValues}
            />
          ) : null}
        </Card>
    );
  }
}

export default Form.create()(TableList);