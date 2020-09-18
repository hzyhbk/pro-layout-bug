import React from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from './Layout';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className='App'>
      <Layout />
    </div>
  );
}

export default hot(App);
