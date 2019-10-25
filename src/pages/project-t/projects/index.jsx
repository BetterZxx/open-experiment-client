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
} from 'antd';
import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import CreateForm from './components/CreateForm';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import StandardTable from './components/StandardTable';
import UpdateForm from './components/UpdateForm';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['已终止', '审核中', '已立项', '已驳回','待确认'];
const operationType = ['同意','拒绝','上报','修改']
const operationUnit = [,,,,'实验室主任','二级单位','职能部门']

/* eslint react/no-multi-comp:0 */
@connect(({ listTableList, loading,detail,tprojects }) => ({
  listTableList,
  loading: loading.models.detail,
  projects:tprojects.projects,
  process:detail.process
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
      title: '实验室',
      dataIndex:'labName',
    },
    {
      title: '项目级别',
      dataIndex:'experimentType',
      render:(type)=>{
        return type===1?'普通':'重点'
      }
    },
    {
      title: '已选学生数',
      render:()=>('12')
    },
    {
      title: '限选',
      dataIndex: 'fitPeopleNum',
    },
    {
      title: '实验类型',
      dataIndex: 'projectType',
      render:(type)=>{
        switch (type){
          case 1 :
            return '科研'
          case 2 :
            return '科技活动'
          case 3 :
            return '自选课题'
          case 4 :
            return '计算机应用'
          case 5 :
            return '计算机应用'
          default :
            return ' '
        }
      }
    },
    {
      title: '状态',
      render:(project) => {
        let val = 0
        if(project.status>=0&&project.status<=4){
          val = 1
        }else if(project.status>4){
          val = 2
        }else if(project.status===-3){
          val = 0
        }else if(project.status===-2){
          val = 3
        }
        return <span>
          <Badge status={statusMap[val]} text={status[val]} />
          <a style={{marginLeft:15}} onClick={()=>this.showProcessModal(project.projectGroupId)} href="javasctipt:">详情</a>
        </span>;
      },
    },
    {
      title: '计划实验时间',
      render: project => <span>{moment(project.startTime).format('YYYY-MM-DD')+'~'+moment(project.endTime).format('YYYY-MM-DD')}</span>,
    },
    {
      title: '操作',
      dataIndex:'projectGroupId',
      render: (id) => (
        <Fragment>
          <a onClick={() => this.editWarning()}>编辑</a>
          
          <Divider type="vertical" />
          <a onClick={()=>this.handleDetailClick(id)}>查看详情</a>
        </Fragment>
      ),
    },
  ];
  handleDetailClick = (id)=>{
    const {history,dispatch} = this.props
    dispatch({
      type:'detail/fetchDetail',
      payload:{
        projectGroupId:id,
        role:5
      }
    })
    dispatch({
      type:'detail/fetchProcess',
      payload:{
        projectId:id,
        role:5
      }
    })
   // history.push('/tproject/manage/detail',id)}
  }
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
      type:'tprojects/fetch'
    })
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;
    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});
    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };

    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'listTableList/fetch',
      payload: params,
    });
  };

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

  
  handleMenuClick = e => {
    const { dispatch } = this.props;
    const { selectedRows } = this.state;
    if (!selectedRows) return;

    switch (e.key) {
      case 'remove':
        dispatch({
          type: 'listTableList/remove',
          payload: {
            key: selectedRows.map(row => row.key),
          },
          callback: () => {
            this.setState({
              selectedRows: [],
            });
          },
        });
        break;

      default:
        break;
    }
  };

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
      };
      this.setState({
        formValues: values,
      });
      dispatch({
        type: 'listTableList/fetch',
        payload: values,
      });
    });
  };


  handleAdd = fields => {
    const { dispatch } = this.props;
    dispatch({
      type: 'listTableList/add',
      payload: {
        desc: fields.desc,
      },
    });
    message.success('添加成功');
    this.handleModalVisible();
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
            <FormItem label="项目级别">
              {getFieldDecorator('status')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  <Option value="0">普通</Option>
                  <Option value="1">重点</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="状态">
              {getFieldDecorator('status')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  <Option value="0">审核中</Option>
                  <Option value="1">已立项</Option>
                  <Option value="2">已终止</Option>
                  <Option value="3">已驳回</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
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
    const { expandForm } = this.state;
    return expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
  }
  hideModal = ()=>{
    this.setState({
      modalVisible:false
    })
  }
  showProcessModal = (id)=>{
    const {dispatch} = this.props
    dispatch({
      type:'detail/fetchProcess',
      payload:id
    })
    this.setState({
      modalVisible:true
    })
  }

  render() {
    const {
      listTableList: { data },
      loading,
      projects,
      process
    } = this.props;
    console.log('projects',projects)
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
    console.log(process)
    const timeLines = process.map(item=>{
      switch(item.operationType){
        case '1':
          return <Timeline.Item color="green">
          <p>{`${operationUnit[item.operationUnit]}审核通过  ${moment(item.operationTime).format('YYYY-MM-DD')}`}</p>
        </Timeline.Item>
        case '2':
            return <Timeline.Item color='red'>
            <p>{`${operationUnit[item.operationUnit]}已驳回  ${moment(item.operationTime).format('YYYY-MM-DD')}`}</p>
            <p>驳回原因：{item.reason}</p>
          </Timeline.Item>
        case '3':
            return <Timeline.Item color="green">
            <p>{`${operationUnit[item.operationUnit]}上报  ${moment(item.operationTime).format('YYYY-MM-DD')}`}</p>
          </Timeline.Item>
        case '4':
            return <Timeline.Item>
            <p>{`${operationUnit[item.operationUnit]}已修改，请确认  ${moment(item.operationTime).format('YYYY-MM-DD')}`}</p>
            <p>备注： {item.reason}</p>
          </Timeline.Item>
        default: return ''
      }
    

       
    })
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
                新建
              </Button>
              {selectedRows.length > 0 && (
                <span>
                  <Button>取消项目</Button>
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
              dataSource={projects}
              rowKey='projectGroupId'
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
            />
          </div>
          <Modal
            visible={modalVisible}
            onCancel={this.hideModal}
            footer={<Button type='primary'>确认修改</Button>}
            
          >
            {/*01 实验室 23二级单位 45职能部门*/}
            <Timeline>
              {timeLines}
              {/* <Timeline.Item color="green">申请立项 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">
                <p>实验室审核通过,对外公示 2017-08-23</p>
                <p>实验室以上报二级单位 2017-09-12</p>
              </Timeline.Item>
              <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }}/>}>
                <p>正在二级单位审核</p>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>二级单位已驳回 2017-08-23</p>
                <p>驳回原因：未达到要求未达到要求未达到要求未达到要求未达到要求未达到要求未达到要求未达到要求未达到要求未达到要求</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>职能部门修改申请表待确认 2017-09-12</p>
                <p>备注：信息不符合规定，已修改，确认后立项</p>
              </Timeline.Item>
              <Timeline.Item color="gray">
                <p>职能部门待审核</p>
              </Timeline.Item> */}
            </Timeline>,

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
