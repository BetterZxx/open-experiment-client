import React, { Component } from 'react';
import { Descriptions, Card, Divider } from 'antd';
class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { memberList } = this.props;
    return (
      <Card
        title="人员信息"
        style={{
          marginBottom: 24,
        }}
        bordered={false}
      >
        <Card style={{ marginBottom: 20 }} type="inner" title="指导老师" bordered={false}>
          {memberList
            .filter(item => item.memberRole === 1)
            .map((item, key) => {
              return (
                <div key={key}>
                  <Descriptions
                    style={{
                      marginBottom: 16,
                    }}
                  >
                    <Descriptions.Item label="姓名">{item.realName}</Descriptions.Item>
                    <Descriptions.Item label="电话">{item.mobilePhone}</Descriptions.Item>
                    <Descriptions.Item label="QQ">{item.qqNum}</Descriptions.Item>
                    <Descriptions.Item label="所属学院">{item.major}</Descriptions.Item>
                    <Descriptions.Item label="员工号">{item.code}</Descriptions.Item>
                    <Descriptions.Item label="职称">{item.realName}</Descriptions.Item>
                  </Descriptions>
                  <Divider
                    style={{
                      margin: '16px 0',
                    }}
                  />
                </div>
              );
            })}
        </Card>
        <Card type="inner" title="学生" bordered={false}>
          {memberList
            .filter(item => item.memberRole !== 1)
            .map((item, key) => {
              return (
                <div key={key}>
                  <Descriptions
                    style={{
                      marginBottom: 16,
                    }}
                  >
                    <Descriptions.Item label="姓名">{item.realName}</Descriptions.Item>
                    <Descriptions.Item label="电话">{item.mobilePhone}</Descriptions.Item>
                    <Descriptions.Item label="email">{item.qqNum}</Descriptions.Item>
                    <Descriptions.Item label="所属学院">{item.major}</Descriptions.Item>
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
              );
            })}
        </Card>
      </Card>
    );
  }
}

export default Member;
