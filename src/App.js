import 'antd/dist/antd.css';
import React, { useState } from 'react';
import './App.css';
import { Row, Col } from 'antd';
import {GeneralMenu} from './components/menu';
import { Authors } from './components/authors';
import { Books } from './components/books';

function App() {
  const [page, setPage] = useState('Authors');

  return (
    <Row>
      <Col span={6}>
        <GeneralMenu page={setPage} />
      </Col>
      <Col span={18}>
        {page === 'Authors' ? <Authors /> : <Books  />}
      </Col>
    </Row>
  );
}

export default App;
