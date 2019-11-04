import React, { Component } from 'react'
import {Descriptions,Card} from 'antd'
class Adcice extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {process} = this.props
    return ( 
            <Card

          title="各级部门审核意见"

          style={{
            marginBottom: 24,
          }}
          bordered={false}
          >
            <Descriptions
              title='实验室审核意见'
              column={1}
            >
              <Descriptions.Item>
                skcfdh     
              </Descriptions.Item>
            </Descriptions>
            <Descriptions
              title='二级单位审核意见'
              column={1}
            >
              <Descriptions.Item>
                skcfdh     
              </Descriptions.Item>
              
            </Descriptions>
            <Descriptions
              title='职能部门审核意见'
              column={1}
            >
              <Descriptions.Item>
                skcfdh     
              </Descriptions.Item>
            </Descriptions>

    </Card>
     );
  }
}
 
export default Adcice;