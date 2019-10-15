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
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['待审核', '审核中', '已通过','已拒绝'];

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
    detailModalVisible:false
  };

  columns = [
    {
      title: '项目名称',
      dataIndex: 'name',
    },
    {
      title: '申请人',
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
      title: '专业',
      dataIndex: 'status1',
    },
    {
      title: '年级',
      dataIndex: 'status4',
    },
    {
      title: '项目角色',
      dataIndex: 'status2',
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
        </span>;
      },
    },
    {
      title: '申请时间',
      dataIndex: 'updatedAt',
      sorter: true,
      render: val => <span>{moment(val).format('YYYY-MM-DD')}</span>,
    },
    {
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={this.showDetailModal}>详情</a>
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
      type: 'listTableList/fetch',
    });
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
              {getFieldDecorator('name')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="学院">
              {getFieldDecorator('status')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  <Option value="0">关闭</Option>
                  <Option value="1">运行中</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="建议审分组">
              {getFieldDecorator('status4')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  <Option value="0">A组-石工勘探</Option>
                  <Option value="1">B组-化工材料</Option>
                  <Option value="2">C组-机械力学</Option>
                  <Option value="3">D组-电气及制作</Option>
                  <Option value="4">E组-软件与数学</Option>
                  <Option value="5">F组-经管法艺体人文</Option>
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
            <FormItem label="申报日期">
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
            <FormItem label="预申请资金">
              {getFieldDecorator('status3')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  <Option value="0">500</Option>
                  <Option value="1">2500</Option>
                  <Option value="2">3000</Option>
                  <Option value="3">5000</Option>
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
  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

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
            <FormItem label="项目名称">
              {getFieldDecorator('status')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  <Option value="0">XXX项目</Option>
                  <Option value="1">XXX项目</Option>
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
                  <Option value="0">待审核</Option>
                  <Option value="1">已通过</Option>
                  <Option value="2">已拒绝</Option>
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
  showDetailModal = ()=>{
    this.setState({
      detailModalVisible:true
    })
  }
  hideDetailModal = ()=>{
    this.setState({
      detailModalVisible:false
    })
  }
  render() {
    const {
      listTableList: { data },
      loading,
    } = this.props;
    const { selectedRows, modalVisible, updateModalVisible, stepFormValues,detailModalVisible } = this.state;
    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="remove">设为组长</Menu.Item>
        <Menu.Item key="approval">删除成员</Menu.Item>
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
      <PageHeaderWrapper>
        <Card 
        bordered={false}
        >
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
                增添成员
              </Button>
              {selectedRows.length > 0 && (
                <span>
                  <Button type='primary'>通过</Button>
                  <Button>拒绝</Button>
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
          <Modal
          visible={detailModalVisible}
          onCancel={this.hideDetailModal}
          width={700}
          >
            <Descriptions column={2} >
              <Descriptions.Item label='姓名'>
                XXX
              </Descriptions.Item>
              <Descriptions.Item label='学号'>
                2017XXX  
              </Descriptions.Item>
              <Descriptions.Item label='申请项目'>
                XXX项目
              </Descriptions.Item>
              <Descriptions.Item label='项目层次'>
                重点
              </Descriptions.Item>
              <Descriptions.Item label='QQ'>
                X1111112
              </Descriptions.Item>
              <Descriptions.Item label='联系电话'>
                18222222XXX
              </Descriptions.Item>
              <Descriptions.Item label='专业'>
                软件工程
              </Descriptions.Item>
              <Descriptions.Item label='年级'>
                2017级
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
              <Descriptions.Item span={3} label='个人特长'>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
              </Descriptions.Item>
              <Descriptions.Item span={3} label='已修课程及具备知识'>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
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
