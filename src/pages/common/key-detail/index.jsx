import {
  Badge,
  Button,
  Card,
  Statistic,
  Descriptions,
  Divider,
  Dropdown,
  Icon,
  Menu,
  Popover,
  Steps,
  Table,
  Tooltip,
  Empty,
  Tabs,
  Modal,
  Input,
  Upload,
  message,
} from 'antd';
import { GridContent, PageHeaderWrapper, RouteContext } from '@ant-design/pro-layout';
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { connect } from 'dva';
import Achievement from './components/achievement';
import styles from './style.less';
import moment from 'moment';
import { json } from 'body-parser';
import BaseInfo from '../detail-components/BaseInfo';
import Advice from '../detail-components/Advice';
import Member from '../detail-components/Member';
import Process from '../detail-components/Process'
import { statusType, operationType, operationUnit, suggestGroupType } from '@/utils/constant';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import Preview from '../detail-components/Preview';
import History from '../detail-components/History'

const { TabPane } = Tabs;
const { TextArea } = Input;

function getHeaderStatus(num) {
  if (num === -2) {
    return '已驳回';
  } else if (num === -3) {
    return '已终止';
  } else if (num >= 0 && num <= 5) {
    return '立项审核中';
  } else if (num === 6) {
    return '中期检查';
  } else {
    return '项目结题';
  }
}

@connect(({ detail }) => ({
 
  detail: detail.baseInfo,
  role: detail.role,
  process: detail.process,
  text: '',
}))
class Advanced extends Component {
  state = {
    operationKey: 'tab1',
    tabActiveKey: 'detail',
    mVisible: false,
    projectId: '',
    approvalType: 1,
    isPreview: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
  }
  handleModalOk = () => {
    const {
      dispatch,
      role,
      detail: { id },
    } = this.props;
    const { approvalType } = this.state;
    console.log(role, approvalType);
    this.setState({
      mVisible: false,
    });
    dispatch({
      type: 'approval/key',
      payload: {
        unit: role,
        data: [
          {
            projectId: id,
            reason: this.state.text,
          },
        ],
        type: approvalType,
        isDetail: true,
      },
    });
  };
  handleApprovalClick = type => {
    this.setState({
      mVisible: true,
      approvalType: type,
    });
  };
  handleReportClick = () => {
    const { dispatch, role, detail } = this.props;
    const { approvalType, projectId } = this.state;
    console.log(role, approvalType);
    dispatch({
      type: 'approval/key',
      payload: {
        unit: role,
        data: [detail.projectGroupId],
        type: 2,
        isDetail: true,
      },
    });
  };
  handleModalCancel = () => {
    this.setState({
      mVisible: false,
    });
  };

  onOperationTabChange = key => {
    this.setState({
      operationKey: key,
    });
  };

  onTabChange = tabActiveKey => {
    this.setState({
      tabActiveKey,
    });
  };

  onTextChange = e => {
    this.setState({
      text: e.target.value,
    });
  };
  handleKeyProjectApply = () => {
    const { dispatch, detail } = this.props;
    dispatch({
      type: 'approval/apply',
      payload: {
        projectId: detail.id,
      },
    });
  };

 
  render() {
    const {
      operationKey,
      tabActiveKey,
      mVisible,
      projectId,
      approvalType,
      text,
      isPreview,
    } = this.state;
    const {  loading, detail, process } = this.props;
    console.log(detail);
    const extra = (
      <div className={styles.moreInfo}>
        <Statistic style={{ textAlign: 'left', marginRight: 30 }} title="状态" value={'未提交'} />
        <Statistic style={{ textAlign: 'left' }} title="状态" value={statusType[detail.status]} />
        <Statistic title="参与人数" value={detail.stuMembers ? detail.stuMembers.length : 0} />
      </div>
    );
    const action = (
      <div>
        <Button
          type="primary"
          style={{ marginRight: 15 }}
          onClick={() => this.handleKeyProjectApply()}
        >
          提交重点申请
        </Button>
        <Button
          type="primary"
          style={{ marginRight: 15 }}
          onClick={() => this.handleApprovalClick(1)}
        >
          审批通过
        </Button>
        <Button style={{ marginRight: 15 }} onClick={() => this.handleReportClick()}>
          上报
        </Button>
        <Button style={{ marginRight: 15 }} onClick={() => this.handleApprovalClick(0)}>
          驳回
        </Button>
        <Button onClick={() => this.props.history.goBack()}>返回</Button>
      </div>
    );
    console.log(process);

    

    return (
      <PageHeaderWrapper
        title={`项目名称：${detail.projectName}`}
        extra={action}
        className={styles.pageHeader}
        content={<BaseInfo detail={detail}></BaseInfo>}
        extraContent={extra}
        tabActiveKey={tabActiveKey}
        onTabChange={this.onTabChange}
        tabList={[
          {
            key: 'detail',
            tab: '详情',
          },
          {
            key: 'achievement',
            tab: '成果',
          },
        ]}
      >
        <Modal
          visible={mVisible}
          title={approvalType === 0 ? '驳回原因' : '审核意见'}
          onOk={this.handleModalOk}
          onCancel={this.handleModalCancel}
        >
          <TextArea
            placeholder={approvalType === 0 ? '驳回理由' : '审核意见'}
            style={{ height: 200 }}
            value={text}
            onChange={this.onTextChange}
          ></TextArea>
        </Modal>
        {tabActiveKey === 'achievement' ? (
          <Achievement />
        ) : (
          <>
            <TabPane key="detail">detail</TabPane>
            <TabPane key="rule">rule</TabPane>

            <div className={styles.main}>
              <GridContent>
                {/* <Process/> */}
                <Preview fileUrl={detail.fileUrl}/>
                <Member memberList={detail.list} />
                <Advice process={process} />
                <History process={process}/>
              </GridContent>
            </div>
          </>
        )}
      </PageHeaderWrapper>
    );
  }
}

export default Advanced;
