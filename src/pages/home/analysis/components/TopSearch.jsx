import { Card, Col, Icon, Row, Table, Tooltip,List,Pagination } from 'antd';
import React from 'react';
import numeral from 'numeral';
import { MiniArea } from './Charts';
import NumberInfo from './NumberInfo';
import Trend from './Trend';
import styles from '../style.less';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const TopSearch = ({ loading, visitData2, searchData, dropdownGroup }) => (
  <Card
    loading={loading}
    bordered={false}
    title="公告栏"
    extra={dropdownGroup}
    style={{
      height: '100%',
    }}
  >
    <List
      renderItem={item => (
        <List.Item>
          <div style={{width:'100%'}}>
            <Icon style={{marginRight:15}} type='right'></Icon>
            <span className={styles.announceListSpan}>{item}</span>
            <span style={{float:'right'}}>12-05</span>
          </div>
        </List.Item>
      )}
      dataSource={data}
      footer={<Pagination style={{float:'right'}} size='small' defaultCurrent={1} total={50} />}
    
    >

    </List>
    
  </Card>
);

export default TopSearch;
