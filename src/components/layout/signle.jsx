import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Header from './header.jsx';

import styles from './main.less';

class Signle extends Component {
  render() {
    return (
      <div className={styles.normal}>
        <Header location={this.props.location} />
        {this.props.children}
      </div>
    );
  }
}

Signle.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default Signle;
