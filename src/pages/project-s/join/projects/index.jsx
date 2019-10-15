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
  TreeSelect
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
const {TreeNode} = TreeSelect

const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['终止', '审核', '立项', '驳回'];

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
  };

  columns = [
    {
      title: '项目名称',
      dataIndex: 'name',
    },
    {
      title: '指导老师',
      dataIndex: 'name1',
    },
    {
      title: '实验室',
      dataIndex: 'desc',
    },
    {
      title: '项目级别',
      dataIndex: 'callNo',
      align: 'right',
      render: val => `${val} 万`,
      // mark to display a total number
      needTotal: true,
    },
    {
      title: '已选学生数',
      dataIndex: 'status1',
    },
    {
      title: '实验类型',
      dataIndex: 'status2',
    },
    {
      title: '状态',
      dataIndex: 'status',
      filters: [
        {
          text: status[0],
          value: '0',
        },
        {
          text: status[1],
          value: '1',
        },
        {
          text: status[2],
          value: '2',
        },
        {
          text: status[3],
          value: '3',
        },
      ],

      render:(val) => {
        return <span>
          <Badge status={statusMap[val]} text={status[val]} />
          <a style={{marginLeft:15}} onClick={this.showModal} href="javasctipt:">详情</a>
        </span>;
      },
    },
    {
      title: '计划实验时间',
      dataIndex: 'updatedAt',
      sorter: true,
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={()=>this.props.history.push('/sproject/join/all/apply')}>申请参与</a>
          
          <Divider type="vertical" />
          <a onClick={()=>{this.props.history.push('/tproject/manage/detail')}}>查看详情</a>
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
      type: 'listTableList/fetch',
    });
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
  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
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
            <FormItem label="开放学院">
              {getFieldDecorator('status')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  <Option value="0">计科院</Option>
                  <Option value="1">电信院</Option>
                  <Option value="2">石工院</Option>
                  <Option value="3">材料院</Option>
                  <Option value="4">艺术院</Option>
                  <Option value="5">化工院</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="适应专业">
              {getFieldDecorator('status')(
                <TreeSelect              
                value={this.state.value}               
                placeholder="请选择适应专业"
                allowClear
                multiple={true}
                onChange={this.onChange}
              >             
                <TreeNode value="0" title="计科院" key="0-1-1" selectable={false}>
                  <TreeNode value="0-1" title="软件工程" key="random"/>
                  <TreeNode value="0-2" title="网络工程" key="random1" />
                  <TreeNode value="0-3" title="物联网工程" key="random2" />
                  <TreeNode value="0-4" title="计算机科学与技术" key="random4" />
                </TreeNode>
                <TreeNode value="1" title="石工院" key="0-1-2" selectable={false}>
                  <TreeNode value="1-1" title="石油工程" key="random5" />
                  <TreeNode value="1-2" title="石油与天然气工程" key="random6" />
                  <TreeNode value="1-3" title="油气储运工程" key="random7" />
                </TreeNode>
              </TreeSelect>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="项目名称">
              {getFieldDecorator('name')(<Input placeholder="请输入" />)}
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
            <FormItem label="实验日期">
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
            <FormItem label="项目类型">
              {getFieldDecorator('status3')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  <Option value="0">科研</Option>
                  <Option value="1">科技活动</Option>
                  <Option value="2">自选课题</Option>
                  <Option value="3">计算机应用</Option>
                  <Option value="4">人文素质</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="项目级别">
              {getFieldDecorator('status3')(
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
          
        </Row>
        <div
          style={{
            float:'right',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              float: 'right',
              marginBottom: 24,
            }}
          >
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
            <FormItem label="开放学院">
              {getFieldDecorator('status')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  <Option value="0">计科院</Option>
                  <Option value="1">电信院</Option>
                  <Option value="2">石工院</Option>
                  <Option value="3">材料院</Option>
                  <Option value="4">艺术院</Option>
                  <Option value="5">化工院</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="适应专业">
              {getFieldDecorator('status')(
                <TreeSelect              
                value={this.state.value}               
                placeholder="请选择适应专业"
                allowClear
                multiple={true}
                onChange={this.onChange}
              >             
                <TreeNode value="0" title="计科院" key="0-1-1" selectable={false}>
                  <TreeNode value="0-1" title="软件工程" key="random"/>
                  <TreeNode value="0-2" title="网络工程" key="random1" />
                  <TreeNode value="0-3" title="物联网工程" key="random2" />
                  <TreeNode value="0-4" title="计算机科学与技术" key="random4" />
                </TreeNode>
                <TreeNode value="1" title="石工院" key="0-1-2" selectable={false}>
                  <TreeNode value="1-1" title="石油工程" key="random5" />
                  <TreeNode value="1-2" title="石油与天然气工程" key="random6" />
                  <TreeNode value="1-3" title="油气储运工程" key="random7" />
                </TreeNode>
              </TreeSelect>
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

  renderForm() {
    const { expandForm } = this.state;
    return expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
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

  render() {
    const {
      listTableList: { data },
      loading,
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
      <PageHeaderWrapper
      >
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            <div className={styles.tableListOperator}>
              
            </div>
            <StandardTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
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
            <Timeline>
              <Timeline.Item color="green">申请立项 2015-09-01</Timeline.Item>
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
              </Timeline.Item>
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
