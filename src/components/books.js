import React from 'react';
import getBooks from '../services/books'
import { getAuthorsOfBook } from '../services/authors'
import { Table } from 'antd';
const { Column } = Table;

export class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {books: [], authors: [], book: ''};
    getBooks().then((response) => {
      if(!response.data.length) throw new Error('books don\'t find');
      this.setState({books: response.data});
    })
      .catch(function (error) {
        // handle error
        console.log(error);
        return [];
      })
  }
  showAuthors(id) {
    const book = this.state.books.find((element, index) => {
      return element.ID === id ? true : false
    });
    this.setState({book: book.Title});
    getAuthorsOfBook(id).then((response) => {
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
    return (
      <div>
        <Table dataSource={this.state.books}>
          <Column title="Id" dataIndex="ID" key="ID" />
          <Column title="Title" dataIndex="Title" key="Title" />
          <Column title="Description" dataIndex="Description" key="Description" />
          <Column
            title="Action"
            key="action"
            render={(record) => {
              return ( <span>
                <span onClick={() => this.showAuthors(record.ID)}>Show authors</span>
              </span>
             )}}
          />
        </Table>
        {this.state.authors.length ? <div>
            <p>Authors of {this.state.book}</p>
            <ul>
            {this.state.authors.map((item, i) => {
              return <li key={i}>{item.FirstName} {item.LastName}</li>
            })}
            </ul>
          </div>
          : ''}
      </div>
    )
  }
}