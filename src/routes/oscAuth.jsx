import React, {Component} from 'react';

import {
  Button
} from 'antd-mobile';

import Main from '../components/layout/main.jsx';

class OscAuth extends Component {
  render() {
    return (
      <Main location={this.props.location}>
        <div>
          <img
            alt=""
            width="100%"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513597985199&di=55c02b43e3e16653190571318dfbcf51&imgtype=0&src=http%3A%2F%2Farticles.csdn.net%2Fuploads%2Fallimg%2F160728%2F1U131AI-0.JPG"
          />
          <div style={{marginTop: '30px'}}>
            <Button size="large" type="primary" onClick={() => { window.location.href = 'http://api.laystall.top/ms/auth/osc/grant'; }}>
              授权
            </Button>
          </div>

        </div>
      </Main>
    );
  }
}

export default OscAuth;
