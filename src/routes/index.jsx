import React, {Component} from 'react';
import {
  connect
} from 'dva';

import styles from './index.less';

import Main from '../components/layout/main.jsx';

@connect(state => ({
  gain: state.gain
}))
class Index extends Component {
  state = {
    info: {
      image: '',
      desc: ''
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'gain/getRandomInfo',
      payload: null
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gain.info) {
      this.setState({
        info: nextProps.gain.info
      });
    }
  }

  render() {
    return (
      <Main location={this.props.location}>
        <div className={styles.normal}>
          <div className={styles.content}>
            {this.state.info.desc}
          </div>
        </div>
      </Main>
    );
  }
}

export default Index;
