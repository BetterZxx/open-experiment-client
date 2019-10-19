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
const status = ['待审核', '待上报', '已上报', '已驳回'];

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
    tabActiveKey:'auth'
  };

  columns = [
    {
      title: '项目名称',
      dataIndex: 'name',
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
          {/* <a onClick={() => this.editWarning()}>编辑</a>
          
          <Divider type="vertical" /> */}
          <a onClick={()=>{this.props.history.push('/projects/auth/lab/projects/detail')}}>查看详情</a>
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
            <FormItem label="限选专业">
              {getFieldDecorator('status')(
                <Select
                  placeholder="请选择"
                  style={{
                    width: '100%',
                  }}
                >
                  <Option value="0">软件工程</Option>
                  <Option value="1">网络工程</Option>
                  <Option value="2">物联网工程</Option>
                  <Option value="3">XXX</Option>
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
  showModal = ()=>{
    this.setState({
      modalVisible:true
    })
  }
  onTabChange = tabActiveKey => {
    this.setState({
      tabActiveKey,
    });
  };

  render() {
    const {
      listTableList: { data },
      loading,
    } = this.props;
    const { selectedRows, modalVisible, updateModalVisible, stepFormValues, tabActiveKey } = this.state;
   
    const parentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleModalVisible,
    };
    const updateMethods = {
      handleUpdateModalVisible: this.handleUpdateModalVisible,
      handleUpdate: this.handleUpdate,
    };
    const btnDisable = selectedRows.length===0
    return (
      <PageHeaderWrapper
      tabActiveKey={tabActiveKey}
      onTabChange={this.onTabChange}
      tabList={[
        {
          key: 'auth',
          tab: '待审批',
        },
        {
          key: 'report',
          tab: '待上报',
        },
        {
          key: 'reported',
          tab: '已上报',
        },
        {
          key: 'reject',
          tab: '已驳回',
        },
      ]}
      >
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            {tabActiveKey!=='reported'&&tabActiveKey!=='reject'&&<div className={styles.tableListOperator}>
             
              {tabActiveKey==='auth'&&<Button type="primary" disabled={btnDisable} onClick={()=>{}}>
                批准
              </Button>}
              {tabActiveKey==='report'&&<span> 
                <Button disabled={btnDisable} type="primary" onClick={()=>{}}>
                  上报
                </Button>
                <Button disabled={btnDisable} onClick={()=>{}}>
                  修改审批意见
                </Button>
              </span>}
              <Button disabled={btnDisable}>驳回</Button> 
            </div>}
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
              <Timeline.Item color="green">
                <p>实验室已上报 2017-08-23</p>
                <p>审核意见：符合要求审核通过。。。。</p>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>实验室已驳回，操作人：XXX 2017-08-23</p>
                <p>驳回原因：未达到要求未达到要求未达到要求未达到要求未达到要求未达到要求未达到要求未达到要求未达到要求未达到要求</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>实验室待上报 2017-09-12</p>
                <p>审核意见：符合要求审核通过。。。。</p>
              </Timeline.Item>
              <Timeline.Item color="gray">
                <p>实验室待待审核</p>
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
