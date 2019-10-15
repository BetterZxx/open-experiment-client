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
} from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

class BasicForm extends Component {
  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'formBasicForm/submitRegularForm',
          payload: values,
        });
      }
    });
  };

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
    return (
      <PageHeaderWrapper content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。">
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
              {getFieldDecorator('date', {
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
                  initialValue: '1',
                })(
                  <Radio.Group>
                    <Radio value="1">科研</Radio>
                    <Radio value="2">科技活动</Radio>
                    <Radio value="3">自选课题</Radio>
                    <Radio value="4">计算机应用</Radio>
                    <Radio value="5">人文素质</Radio>
                  </Radio.Group>,
                )}
                
              </div>
            </FormItem>
            <FormItem {...formItemLayout} label="建议审分组">
              <div>
                {getFieldDecorator('suggestGroupType', {
                  initialValue: '1',
                })(
                  <Radio.Group>
                    <Radio value="1">A组-石工地勘</Radio>
                    <Radio value="2">B组-化工材料</Radio>
                    <Radio value="3">C组-机械力学</Radio>
                    <Radio value="4">D组-电气及制作</Radio>
                    <Radio value="5">E组-软件与数学</Radio>
                    <Radio value="5">F组-经管法艺体人文</Radio>
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
              })(<Input placeholder="请输入适应专业" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="适应年级">
              {getFieldDecorator('limitGrade', {
                rules: [
                  {
                    required: true,
                    message: '请输入适应年级',
                  },
                ],
              })(<Input placeholder="请输入适应年级" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="适应学院">
              {getFieldDecorator('limitCollege', {
                rules: [
                  {
                    required: true,
                    message: '请输入适应学院',
                  },
                ],
              })(<Input placeholder="请输入适应学院" />)}
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
            <FormItem {...formItemLayout} label="计划实验时间">
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
            {/* <FormItem
              {...formItemLayout}
              label={
                <span>
                  客户
                  <em className={styles.optional}>
                    （选填）
                    <Tooltip title="目标的服务对象">
                      <Icon
                        type="info-circle-o"
                        style={{
                          marginRight: 4,
                        }}
                      />
                    </Tooltip>
                  </em>
                </span>
              }
            >
              {getFieldDecorator('client')(
                <Input placeholder="请描述你服务的客户，内部客户直接 @姓名／工号" />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  邀评人
                  <em className={styles.optional}>（选填）</em>
                </span>
              }
            >
              {getFieldDecorator('invites')(
                <Input placeholder="请直接 @姓名／工号，最多可邀请 5 人" />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  权重
                  <em className={styles.optional}>（选填）</em>
                </span>
              }
            >
              {getFieldDecorator('weight')(<InputNumber placeholder="请输入" min={0} max={100} />)}
              <span className="ant-form-text">%</span>
            </FormItem>
            <FormItem {...formItemLayout} label="目标公开" help="客户、邀评人默认被分享">
              <div>
                {getFieldDecorator('public', {
                  initialValue: '1',
                })(
                  <Radio.Group>
                    <Radio value="1">公开</Radio>
                    <Radio value="2">部分公开</Radio>
                    <Radio value="3">不公开</Radio>
                  </Radio.Group>,
                )}
                <FormItem
                  style={{
                    marginBottom: 0,
                  }}
                >
                  {getFieldDecorator('publicUsers')(
                    <Select
                      mode="multiple"
                      placeholder="公开给"
                      style={{
                        margin: '8px 0',
                        display: getFieldValue('public') === '2' ? 'block' : 'none',
                      }}
                    >
                      <Option value="1">同事甲</Option>
                      <Option value="2">同事乙</Option>
                      <Option value="3">同事丙</Option>
                    </Select>,
                  )}
                </FormItem>
              </div>
            </FormItem> */}
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
