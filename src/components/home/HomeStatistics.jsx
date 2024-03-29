import React from 'react';

import { Statistic, Row, Col } from 'antd';
const Countdown = Statistic.Countdown;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

function onFinish() {
  console.log('finished!');
}


export default class HomeStatistics extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row gutter={16} style={{ textAlign: 'center' }}>
          <Col span={12}>
            <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
          </Col>
          <Col span={12}>
            <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
          </Col>
          <Col span={24} style={{ marginTop: 32 }}>
            <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
          </Col>
        </Row>
      </div>
    );
  }
}