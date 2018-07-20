import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button } from 'antd-mobile';
import Content from './home/index';
import { Link } from 'react-router';
import { Router, Route, Switch } from 'dva/router';
function IndexPage() {
  function handel() {
    console.log(12321);
  }
  return (
    <div>
      <Button>Start</Button>
      <Content name='梁怡' onDelete={handel}></Content>
    </div>

  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
