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
  Input
} from 'antd';
import { GridContent, PageHeaderWrapper, RouteContext } from '@ant-design/pro-layout';
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { connect } from 'dva';
import Achievement from './components/achievement'
import styles from './style.less';
import moment from 'moment';
import { json } from 'body-parser';
import {statusType} from '@/utils/constant'

const { Step } = Steps;
const { TabPane } = Tabs;
const ButtonGroup = Button.Group;
const {TextArea} = Input
const menu = (
  <Menu>
    <Menu.Item key="1">选项一</Menu.Item>
    <Menu.Item key="2">选项二</Menu.Item>
    <Menu.Item key="3">选项三</Menu.Item>
  </Menu>
);
const mobileMenu = (
  <Menu>
    <Menu.Item key="1">操作一</Menu.Item>
    <Menu.Item key="2">操作二</Menu.Item>
    <Menu.Item key="3">选项一</Menu.Item>
    <Menu.Item key="4">选项二</Menu.Item>
    <Menu.Item key="">选项三</Menu.Item>
  </Menu>
);
const projectType = ['科研','科技活动','自选课题','计算机应用','人文素质']
const suggestGroupType = ['A组-石工地勘','B组-化工材料','C组-机械力学','E组-软件与数学','F组-经管法艺体人文']
const major = ['软件工程','网络工程','物联网工程']
const status = ['申请项目','立项审核','中期检查','结题','已驳回','已终止']
const operationType = ['同意','拒绝','上报','修改']
const operationUnit = [,,,,'实验室主任','二级单位','职能部门']
function getHeaderStatus(num){
  if(num===-2){
    return '已驳回'
  }else if(num===-3){
    return '已终止'
  }else if(num>=0&&num<=5){
    return '立项审核中'
  }else if(num===6){
    return '中期检查'
  }else{
    return '项目结题'
  }
}
function getContentStatus(num){
  if(num<=5){
    return 1
  }else if(num===6){
    return 2
  }else{
    return 3
  }
}

// const action = (
//   <RouteContext.Consumer>
//     {({ isMobile }) => {
//       if (isMobile) {
//         return (
//           <Dropdown.Button
//             type="primary"
//             icon={<Icon type="down" />}
//             overlay={mobileMenu}
//             placement="bottomRight"
//           >
//             主操作
//           </Dropdown.Button>
//         );
//       }

//       return (
//         <Fragment>
//           <ButtonGroup>
//             <Button>操作一</Button>
//             <Button>操作二</Button>
//             <Dropdown overlay={menu} placement="bottomRight">
//               <Button>
//                 <Icon type="ellipsis" />
//               </Button>
//             </Dropdown>
//           </ButtonGroup>
//           <Button type="primary">主操作</Button>
//         </Fragment>
//       );
//     }}
//   </RouteContext.Consumer>
// );


const desc1 = (
  <div className={classNames(styles.textSecondary, styles.stepDescription)}>
    
    <div>2016-12-12 12:32</div>
  </div>
);
const popoverContent = (
  <div
    style={{
      width: 160,
    }}
  >
    吴加号
    <span
      className={styles.textSecondary}
      style={{
        float: 'right',
      }}
    >
      <Badge
        status="default"
        text={
          <span
            style={{
              color: 'rgba(0, 0, 0, 0.45)',
            }}
          >
            未响应
          </span>
        }
      />
    </span>
    <div
      className={styles.textSecondary}
      style={{
        marginTop: 4,
      }}
    >
      耗时：2小时25分钟
    </div>
  </div>
);

const customDot = (dot, { status }) => {
  if (status === 'process') {
    return (
      <Popover placement="topLeft" arrowPointAtCenter content={popoverContent}>
        {dot}
      </Popover>
    );
  }

  return dot;
};
const columns = [
  {
    title: '操作类型',
    dataIndex: 'operationType',
    render:(type)=>{
      return operationType[type-1]
    }
  },
  {
    title: '操作单位',
    dataIndex: 'operationUnit',
    render:(unit)=>{
      return operationUnit[unit]
    }
  },
  {
    title: '操作时间',
    dataIndex: 'operationTime',
    render:(time)=>{
      return moment(time).format('YYYY-MM-DD HH:MM')
    }
  },
  {
    title: '备注',
    dataIndex: 'reason',
  },
];

@connect(({ profileAdvanced, loading,detail }) => ({
  profileAdvanced,
  detail:detail.baseInfo,
  role:detail.role,
  loading: loading.effects['profileAdvanced/fetchAdvanced'],
  process:detail.process,
  text:''
}))
class Advanced extends Component {
  state = {
    operationKey: 'tab1',
    tabActiveKey: 'detail',
    mVisible:false,
    projectId:'',
    approvalType:1
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profileAdvanced/fetchAdvanced',
    });
  }
  handleModalOk = ()=>{
    const {dispatch,role,detail:{projectGroupId}} = this.props
    const {approvalType} = this.state
    console.log(role,approvalType)
    this.setState({
      mVisible:false
    })
    dispatch({
      type:'approval/normal',
      payload:{
        unit:0,
        data:[
          {
            projectId:projectGroupId,
            reason:this.state.text
          }
        ],
        type:approvalType,
        isDetail:true

      }
    })
  }
  handleApprovalClick = (type)=>{
    this.setState({
      mVisible:true,
      approvalType:type
    })
    
  }
  handleReportClick = ()=>{
    const {dispatch,role,detail} = this.props
    const {approvalType,projectId} = this.state
    console.log(role,approvalType)
    dispatch({
      type:'approval/normal',
      payload:{
        unit:0,
        data:[
            detail.projectGroupId,
        ],
        type:2,
        isDetail:true
      }
    })
  }
  handleModalCancel = ()=>{
    this.setState({
      mVisible:false
    })
  }

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
  
  onTextChange = (e)=>{
    console.log(e)
    this.setState({
      text:e.target.value
    })

  }
  render() {
    const { operationKey, tabActiveKey,mVisible,projectId,approvalType,text } = this.state;
    const { profileAdvanced, loading,detail,process } = this.props;
    console.log(detail)
    const { advancedOperation1, advancedOperation2, advancedOperation3 } = profileAdvanced;
    const extra = (
      <div className={styles.moreInfo}>
        <Statistic style={{textAlign:"left"}} title="状态" value={statusType[detail.status]} />
        <Statistic title="参与人数" value={detail.stuMembers.length}/>
      </div>
    );
    const action = (<div>
      <Button type='primary'style={{marginRight:15}} onClick={()=>this.handleApprovalClick(1)}>审批通过</Button>
      <Button style={{marginRight:15}} onClick={()=>this.handleReportClick()}>上报</Button>
      <Button style={{marginRight:15}} onClick={()=>this.handleApprovalClick(0)}>驳回</Button>
      <Button onClick={()=>this.props.history.goBack()}>返回</Button>
    </div>)
    console.log(process)
    const description = (
      <RouteContext.Consumer>
        {({ isMobile }) => (
          <Descriptions className={styles.headerList} size="small" column={isMobile ? 1 : 2}>
            <Descriptions.Item label="创建人">{detail.creatorName}</Descriptions.Item>
            <Descriptions.Item label="开放实验室">{detail.labName}</Descriptions.Item>
            <Descriptions.Item label="地点">{detail.address}</Descriptions.Item>
            <Descriptions.Item label="实验类型">
              {
                projectType[detail.projectType-1]
              }
            </Descriptions.Item>
            <Descriptions.Item label="实验时间">{`${moment(detail.startTime).format('YYYY-MM-DD')}~${moment(detail.startTime).format('YYYY-MM-DD')}`}</Descriptions.Item>
            <Descriptions.Item label="项目级别">{detail.experimentType===1?'普通':'重点'}</Descriptions.Item>
            <Descriptions.Item label="建议审分组">
              {
                suggestGroupType[detail.suggestGroupType-1]
              }
            </Descriptions.Item>
            <Descriptions.Item label="适应专业">{JSON.parse(detail.limitMajor).map(item=>major[item-1]).join('、')}</Descriptions.Item>
            <Descriptions.Item label="适宜学生数">{detail.fitPeopleNum}</Descriptions.Item>
            <Descriptions.Item label="成果及考核方式">{detail.achievementCheck}</Descriptions.Item>
            <Descriptions.Item label="计划实验小时">{detail.totalHours}</Descriptions.Item>
            <Descriptions.Item label="开放实验条件">{detail.experimentCondition}</Descriptions.Item>
           
          </Descriptions>
        )}
      </RouteContext.Consumer>
    );
    const tDescriptions = detail.guideTeachers.map((item,key)=>{
        return <div key={key}>
          
            <Descriptions
              style={{
                marginBottom: 16,
              }}
            >
              <Descriptions.Item label='姓名'>{item.realName}</Descriptions.Item>
              <Descriptions.Item label="电话">{item.mobilePhone}</Descriptions.Item>
              <Descriptions.Item label="QQ">{item.qqNum}</Descriptions.Item>
              <Descriptions.Item label="所属学院">{item.major}</Descriptions.Item>
              <Descriptions.Item label="员工号">
                {item.code}
              </Descriptions.Item>
              <Descriptions.Item label="职称">
                {item.realName}
              </Descriptions.Item>
            </Descriptions>
            <Divider
              style={{
                margin: '16px 0',
              }}
            />
        </div>
      })
      const sDecriptions = detail.stuMembers.map((item,key)=>{
        return <div key={key}>
         
          <Descriptions
                  style={{
                    marginBottom: 16,
                  }}
                
                >
                  <Descriptions.Item label="姓名">{item.name}</Descriptions.Item>
                  <Descriptions.Item label="电话">{item.phone}</Descriptions.Item>
                  <Descriptions.Item label="email">{item.qq}</Descriptions.Item>
                  <Descriptions.Item label="所属学院">{item.dept}</Descriptions.Item>
                  <Descriptions.Item label="描述">
                    这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...
                  </Descriptions.Item>
                </Descriptions>
                <Divider
                  style={{
                    margin: '16px 0',
                  }}
                />
        </div>
      })
      
   
    return (
      <PageHeaderWrapper
        title={`项目名称：${detail.projectName}`}
        extra={action}
        className={styles.pageHeader}
        content={description}
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
            title={approvalType===0?'驳回原因':'审核意见'}
            onOk={this.handleModalOk}
            onCancel={this.handleModalCancel}
            
          >
            <TextArea 
            placeholder={approvalType===0?'驳回理由':'审核意见'}
            style={{height:200}}
            value={text}
            onChange={this.onTextChange}
            ></TextArea>
          </Modal>
        {tabActiveKey==='achievement'?<Achievement/>:<>
        <TabPane key='detail'>
        detail
        </TabPane>
        <TabPane key='rule'>
        rule
        </TabPane>
        
        <div className={styles.main}>
          <GridContent>
            <Card
              title="项目进度"
              style={{
                marginBottom: 24,
              }}
            >
              <RouteContext.Consumer>
                {({ isMobile }) => (
                  <Steps
                    direction={isMobile ? 'vertical' : 'horizontal'}
                   
                    current={getContentStatus(detail.status)}
                  >
                    <Step title="申请项目" description={desc1} />
                    <Step title="立项审核" description={desc1} />
                    <Step title="中期检查" />
                    <Step title="结题" />
                  </Steps>
                )}
              </RouteContext.Consumer>
            </Card>
            <Card
              title="项目主要内容"
              style={{
                marginBottom: 24,
              }}
            >
              {detail.mainContent}
              
            </Card>
            <Card
              title="人员信息"
              style={{
                marginBottom: 24,
              }}
              bordered={false}
            >
              <Card style={{marginBottom:20}} type="inner" title="指导老师" bordered={false}>
                
                {tDescriptions}
              </Card>
              <Card type="inner" title="学生" bordered={false}>
                
                {sDecriptions}
              </Card>
            </Card>
           
              <Card

              title="实验室审核意见"
              
              style={{
                marginBottom: 24,
              }}
              bordered={false}
              >
              {process[0]&&process[0].operationType==='1'?process[0].reason:<Empty/>}
              </Card>
              <Card
              style={{
                marginBottom: 24,
              }}
              bordered={false}
              title="二级单位审核意见"
              >
              {process[2]&&process[2].operationType==='1'?process[2].reason:<Empty/>}
              </Card>
              <Card         
              style={{
                marginBottom: 24,
              }}
              bordered={false}  
              title="职能部门审核意见"
              >
              {process[4]&&process[4].operationType==='1'?process[4].reason:<Empty/>}
              </Card>
   
            <Card
              className={styles.tabsCard}
              bordered={false}
              title='操作历史'
            >
              <Table
                pagination={false}
                loading={loading}
                rowKey='operationTime'
                dataSource={process}
                columns={columns}
              />
            </Card>
          </GridContent>
        </div>
        </>
        }
      </PageHeaderWrapper>
    );
  }
}

export default Advanced;
