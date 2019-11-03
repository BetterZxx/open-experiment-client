import {
  Button,
  Card,
  DatePicker,
  Form,
  Icon,
  Input,
  InputNumber,
  Radio,
  Select,
  Tooltip,
  TreeSelect

} from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import moment from 'moment'
import {majorCollege,grade,suggestGroupType,experimentType, funds} from '@/utils/constant'
import styles from './style.less';


const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { TreeNode } = TreeSelect;
let id = 0;

class BasicForm extends Component {
  state={}
  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
       
        console.log(values)
        let payload = {
          ...values,
          limitCollege:JSON.stringify(values.limitCollege),
          limitGrade:JSON.stringify(values.limitGrade),
          limitMajor:JSON.stringify(values.limitMajor),
          startTime:values.time[0].format('YYYY-MM-DD'),
          endTime:values.time[1].format('YYYY-MM-DD'),
          stuCodes:values.names,
          teacherCodes:['31']
        }
        delete payload.names
        delete payload.keys
        delete payload.time
        if(form.getFieldValue('isOpenTopic') === '1')
          delete payload.stuCodes

         dispatch({
          type: 'applyForm/submitRegularForm',
          payload,
        });
        console.log(payload)
      }
    });
  };
  onChange = value => {
    console.log(value);
    this.setState({ value });
  };
  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };
  renderTreeNode = (majorCollege)=>{
    return majorCollege.map(item=>{
      return <TreeNode value={item.cId+'c'} title={item.cName} key={item.cId+'c'} selectable={false}>
        {
          item.majors.map(element=>{
            return <TreeNode value={element.mId} key={element.mId} title={element.mName}>
            </TreeNode>
          })
        }
      </TreeNode>
    })


  }
  render() {
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 7,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 12,
        },
        md: {
          span: 10,
        },
      },
    };
    const formItemLayout1 = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const submitFormLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 10,
          offset: 7,
        },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <Form.Item
        
        label={index === 0 ? '学生学号' : ''}
        required={false}
        key={indexx}
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "请输入添加成员的学号或者删除该项",
            },
          ],
        })(<Input placeholder="请输入学生学号" style={{width:'80%',marginRight:8}} />)}
        {keys.length > 1 ? (
          <Icon
            className={styles.dynamicDeleteButton}
            type="minus-circle-o"
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));
    return (
      <PageHeaderWrapper content="此表单为立项申请表，由指导老师填写">
        <Card bordered={false}>
          <Form
            onSubmit={this.handleSubmit}
            hideRequiredMark
            style={{
              marginTop: 8,
            }}
          >
            
            <FormItem {...formItemLayout} label="项目名称">
              {getFieldDecorator('projectName', {
                rules: [
                  {
                    required: true,
                    message: '请输入项目名称',
                  },
                ],
              })(<Input placeholder="项目名称" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="起止日期">
              {getFieldDecorator('time', {
                rules: [
                  {
                    required: true,
                    message: '请选择起止日期',
                  },
                ],
              })(
                <RangePicker
                  style={{
                    width: '100%',
                  }}
                  placeholder={['开始日期', '结束日期']}
                />,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="实验室名称">
              {getFieldDecorator('labName', {
                rules: [
                  {
                    required: true,
                    message: '请输入实验室名称',
                  },
                ],
              })(<Input placeholder="请输入实验室名称" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="地点">
              {getFieldDecorator('address', {
                rules: [
                  {
                    required: true,
                    message: '请输入项目地点',
                  },
                ],
              })(<Input placeholder="请输入项目地点" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="开放实验条件">
              {getFieldDecorator('experimentCondition', {
                rules: [
                  {
                    required: true,
                    message: '请输入开放实验条件',
                  },
                ],
              })(
                <TextArea
                  style={{
                    minHeight: 32,
                  }}
                  placeholder="请输入开放实验条件"
                  rows={4}
                />,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="实验类型">
              <div>
                {getFieldDecorator('experimentType', {
                 
                })(
                  <Radio.Group>
                    {Object.keys(experimentType).map(item=>{
                      return <Radio key={item} value={item}>{experimentType[item]}</Radio>
                    })}
                  </Radio.Group>,
                )}
                
              </div>
            </FormItem>
            <FormItem {...formItemLayout} label="建议审分组">
              <div>
                {getFieldDecorator('suggestGroupType', {
                  
                })(
                  <Radio.Group>
                    {Object.keys(suggestGroupType).map(item=>{
                      return <Radio value={item} key={item}>
                        {suggestGroupType[item]}
                      </Radio>
                    })}
                  </Radio.Group>,
                )}
                
              </div>
            </FormItem>
            <FormItem {...formItemLayout} label="项目级别">
              <div>
                {getFieldDecorator('projectType', {
                  initialValue: '1',
                })(
                  <Radio.Group>
                    <Radio value="1">普通</Radio>
                    <Radio value="2">重点</Radio>
                  </Radio.Group>,
                )}
                
              </div>
            </FormItem>
            <FormItem {...formItemLayout} label="适应专业">
              {getFieldDecorator('limitMajor', {
                rules: [
                  {
                    required: true,
                    message: '请输入适应专业',
                  },
                ],
                initialValue:this.state.value
              })(<TreeSelect                     
                placeholder="请选择适应专业"
                allowClear
                multiple={true}
                onChange={this.onChange}
              >             
                {this.renderTreeNode(majorCollege)}
              </TreeSelect>)}
            </FormItem>
            <FormItem {...formItemLayout} label="限选年级">
              {getFieldDecorator('limitGrade', {
                rules: [
                  {
                    required: true,
                    message: '请输入适应年级',
                  },
                ]
              })(<Select
                mode="multiple"
                placeholder="请选择适应学院"
              >
                {grade.map(item=>{
                  return <Option key={item} value={item}>{item}级</Option>
                })}
              </Select>)}
            </FormItem>
            <FormItem {...formItemLayout} label="限选学院">
              {getFieldDecorator('limitCollege', {
                rules: [
                  {
                    required: true,
                    message: '请输入适应学院',
                  },
                ],
              })(<Select
                mode="multiple"
                placeholder="请选择适应学院"
              >
                {majorCollege.map(item=>{
                  return <Option value={item.cId} key={item.cId}>{item.cName}</Option>
                })}
              </Select>)}
            </FormItem>
            <FormItem {...formItemLayout} label="适宜学生数">
              {getFieldDecorator('fitPeopleNum', {
                rules: [
                  {
                    required: true,
                    message: '请输入适宜学生数',
                  },
                ],
              })(<Input placeholder="请输入适宜学生数" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="预申请金额">
              {getFieldDecorator('applyFunds', {
                rules: [
                  {
                    required: true,
                    message: '请选择预申请金额',
                  },
                ],
              })(<Select
                placeholder="请选择预申请金额"
              >
                {funds.map(item=>{
                  return <Option key={item} value={item}>{item}元</Option>
                })}
              </Select>)}
            </FormItem>
            <FormItem {...formItemLayout} label="计划实验时间/h">
              {getFieldDecorator('totalHours', {
                rules: [
                  {
                    required: true,
                    message: '请输入计划实验时间',
                  },
                ],
              })(<Input placeholder="请输入计划实验时间" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="成果形式及考核方式">
              {getFieldDecorator('achievementCheck', {
                rules: [
                  {
                    required: true,
                    message: '请输入成果形式及考核方式',
                  },
                ],
              })(
                <TextArea
                  style={{
                    minHeight: 32,
                  }}
                  placeholder="请输入成果形式及考核方式"
                  rows={4}
                />,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="主要内容">
              {getFieldDecorator('mainContent', {
                rules: [
                  {
                    required: true,
                    message: '请输入项目主要内容',
                  },
                ],
              })(
                <TextArea
                  style={{
                    minHeight: 32,
                  }}
                  placeholder="请输入项目主要内容"
                  rows={4}
                />,
              )}
            </FormItem>
  
            <FormItem {...formItemLayout} label="目标公开">
              <div>
                {getFieldDecorator('isOpenTopic', {
                  initialValue: '1',
                })(
                  <Radio.Group>
                    <Radio value="1">公开</Radio>
                    <Radio value="2">不公开</Radio>
                    <Radio value="3">部分公开</Radio>
                  </Radio.Group>,
                )}
                
                
                <FormItem 
                  style={{
                    margin: '8px 0',
                    display: getFieldValue('isOpenTopic') === '3'||getFieldValue('isOpenTopic') === '2' ? 'block' : 'none',
                  }}
                >
                  {formItems}
                  <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                    <Icon type="plus" /> 添加成员
                  </Button>
                </FormItem>
              </div>
            </FormItem>
            <FormItem
              {...submitFormLayout}
              style={{
                marginTop: 32,
              }}
            >
              <Button type="primary" htmlType="submit" loading={submitting}>
                提交
              </Button>
              <Button
                onClick={this.handleSubmit}
                style={{
                  marginLeft: 8,
                }}
              >
                保存
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(
  connect(({ loading }) => ({
    submitting: loading.effects['formBasicForm/submitRegularForm'],
  }))(BasicForm),
);
