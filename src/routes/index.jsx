import React, {Component} from 'react';
import {
  Icon, Card, WingBlank, WhiteSpace, Flex
} from 'antd-mobile';
import {
  connect
} from 'dva';

import styles from './index.less';

import Signle from '../components/layout/signle.jsx';

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

  refresh = () => {
    this.props.dispatch({
      type: 'gain/getRandomInfo',
      payload: null
    });
  }


  render() {
    return (
      <Signle location={this.props.location}>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              thumb={this.state.info.image}
              thumbStyle={{width: '100%'}}
            />
            <Card.Body>
              <div>{this.state.info.desc}</div>
            </Card.Body>
          </Card>

          <WhiteSpace size="lg" />
          <footer className={styles.footer}>
            <Flex justify="center">
              <Icon type="search" size="md" onClick={this.refresh} />
            </Flex>
          </footer>
        </WingBlank>
      </Signle>
    );
  }
}

export default Index;
