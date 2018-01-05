import React, {Component} from 'react';
import {
  TabBar
} from 'antd-mobile';
import {
  connect
} from 'dva';
import {
  routerRedux
} from 'dva/router';

import styles from './footer.less';

@connect(state => ({
}))
class Footer extends Component {
  render() {
    return (
      <div className={styles.normal}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={false}
        >
          <TabBar.Item
            title="发现"
            key="发现"
            icon={
              <i className="iconfont icon-faxian1" />
            }
            selectedIcon={
              <i className="iconfont icon-faxian1" />
            }
            badge={0}
            selected={this.props.location.pathname === '/index'}
            onPress={() => this.props.dispatch(routerRedux.push('/index'))}
            data-seed="faxian"
          >
            {this.props.location.pathname === '/index' ? this.props.childrens : null}
          </TabBar.Item>
          <TabBar.Item
            title="热点"
            key="热点"
            icon={
              <i className="iconfont icon-redian" />
            }
            selectedIcon={
              <i className="iconfont icon-redian" />
            }
            badge={0}
            selected={this.props.location.pathname === '/' || this.props.location.pathname === '/recommend'}
            onPress={() => this.props.dispatch(routerRedux.push('/recommend'))}
            data-seed="redian"
          >
            {
              this.props.location.pathname === '/' ||
              this.props.location.pathname === '/recommend' ? this.props.childrens : null}
          </TabBar.Item>
          <TabBar.Item
            title="详情"
            key="详情"
            icon={
              <i className="iconfont icon-xiangqing" />
            }
            selectedIcon={
              <i className="iconfont icon-xiangqing" />
            }
            badge={0}
            selected={this.props.location.pathname === '/osc/auth'}
            onPress={() => this.props.dispatch(routerRedux.push('/osc/auth'))}
            data-seed="redian"
          >
            {this.props.location.pathname === '/osc/auth' ? this.props.childrens : null}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Footer;
