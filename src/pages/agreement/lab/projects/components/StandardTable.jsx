import React, { Component } from 'react';
import { Table } from 'antd';
class StandardTable extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedRowKeys: [], }
  }
  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    const currySelectedRowKeys = selectedRowKeys;
    const { onSelectRow } = this.props;

    if (onSelectRow) {
      onSelectRow(selectedRows);
    }
    this.setState({
      selectedRowKeys: currySelectedRowKeys,
    });
  };
  render() { 
    const {selectedRows,onSelectRow,...rest} = this.props
    const {selectedRowKeys} = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
    };
    return ( <Table
    rowSelection={rowSelection}
    {...rest}
    /> );
  }
}
 
export default StandardTable;