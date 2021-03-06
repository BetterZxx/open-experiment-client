import { Card, Col, DatePicker, Row, Tabs } from 'antd';
import React from 'react';
import numeral from 'numeral';
import { Bar } from './Charts';
import styles from '../style.less';

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
const rankingListData = [];
// tabBarExtraContent={
        //   <div className={styles.salesExtraWrap}>
        //     <div className={styles.salesExtra}>
        //       <a className={isActive('today')} onClick={() => selectDate('today')}>
        //         今日
        //       </a>
        //       <a className={isActive('week')} onClick={() => selectDate('week')}>
        //         本周
        //       </a>
        //       <a className={isActive('month')} onClick={() => selectDate('month')}>
        //         本月
        //       </a>
        //       <a className={isActive('year')} onClick={() => selectDate('year')}>
        //         全年
        //       </a>
        //     </div>
        //     <RangePicker
        //       value={rangePickerValue}
        //       onChange={handleRangePickerChange}
        //       style={{
        //         width: 256,
        //       }}
        //     />
        //   </div>
        // }
const applyData = [
  {
    x:'计科院',
    y:124
  },
  {
    x:'电信院',
    y:12
  },
  {
    x:'石工院',
    y:66
  },
  {
    x:'化工院',
    y:110
  },
  {
    x:'材料院',
    y:56
  },
  {
    x:'法院',
    y:89
  },
  {
    x:'艺术院',
    y:30
  },
]
const rankListData = applyData.map(item=>{
  return {
    title:item.x,
    total:item.y
  }
})

for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: '工专路 {no} 号店',
    total: 323234,
  });
}

const SalesCard = ({
  rangePickerValue,
  salesData,
  isActive,
  handleRangePickerChange,
  loading,
  selectDate,
}) => (
  <Card
    loading={loading}
    bordered={false}
    bodyStyle={{
      padding: 0,
    }}
  >
    <div className={styles.salesCard}>
      <Tabs
        
        size="large"
        tabBarStyle={{
          marginBottom: 24,
        }}
      >
        <TabPane tab="申报数" key="sales">
          <Row type="flex">
            <Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesBar}>
                <Bar height={295} title="各学院申报情况" data={applyData} />
              </div>
            </Col>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesRank}>
                <h4 className={styles.rankingTitle}>学院申报排名</h4>
                <ul className={styles.rankingList}>
                  {rankListData.map((item, i) => (
                    <li key={item.title}>
                      <span className={`${styles.rankingItemNumber} ${i < 3 ? styles.active : ''}`}>
                        {i + 1}
                      </span>
                      <span className={styles.rankingItemTitle} title={item.title}>
                        {item.title}
                      </span>
                      <span className={styles.rankingItemValue}>
                        {numeral(item.total).format('0,0')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="立项数" key="views">
          <Row>
            <Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesBar}>
                <Bar height={292} title="各学院立项情况" data={applyData} />
              </div>
            </Col>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesRank}>
                <h4 className={styles.rankingTitle}>学院立项排名</h4>
                <ul className={styles.rankingList}>
                  {rankListData.map((item, i) => (
                    <li key={item.title}>
                      <span className={`${styles.rankingItemNumber} ${i < 3 ? styles.active : ''}`}>
                        {i + 1}
                      </span>
                      <span className={styles.rankingItemTitle} title={item.title}>
                        {item.title}
                      </span>
                      <span>{numeral(item.total).format('0,0')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  </Card>
);

export default SalesCard;
