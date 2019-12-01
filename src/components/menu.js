import React from 'react';
import { Menu } from 'antd';

export class GeneralMenu extends React.Component {

  handleClick = e => {
    this.props.page(e.key);
  };

  render() {
    return (<Menu
      onClick={this.handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['Authors']}
      mode="inline">
        <Menu.Item key="Authors">Authors</Menu.Item>
        <Menu.Item key="Books">Books</Menu.Item>
      </Menu>)
  }
}
