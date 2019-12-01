import React from 'react';
import { getAuthors } from '../services/authors'
import { Table } from 'antd';

export class Authors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {authors: []};
    getAuthors().then((response) => {
      if(!response.data.length) throw new Error('authors don\'t find');

      this.setState({authors: response.data});
    })
      .catch(function (error) {
        // handle error
        console.log(error);
        return [];
      })
  }

  render() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'ID',
        key: 'ID',
      },
      {
        title: 'FirstName',
        dataIndex: 'FirstName',
        key: 'FirstName',
      },
      {
        title: 'LastName',
        dataIndex: 'LastName',
        key: 'LastName',
      }
    ];
    return (
        <Table dataSource={this.state.authors} columns={columns} rowKey={record => record.uid} />
    )
  }
}