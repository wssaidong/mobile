import React from 'react';
import PropTypes from 'prop-types';
import {
  TabBar,
  Button
} from 'antd-mobile';
import {
  connect
} from 'dva';
import {
  routerRedux
} from 'dva/router';

import styles from './footer.less';

function Footer({
  dispatch, childrens, location
}) {
  return (
    <div className={styles.normal}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={false}
      >
        <TabBar.Item
          key="T"
          selectedIcon={
            <Button size="small">淘</Button>
          }
          selected={location.pathname === '/'}
          onPress={() => dispatch(routerRedux.push('/'))}
          data-seed="T"
        >
          {childrens}
        </TabBar.Item>

      </TabBar>
    </div>
  );
}

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  childrens: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Footer);
