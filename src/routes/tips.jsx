import React, {Component} from 'react';

import {withUserAgent} from 'react-useragent';


class Tips extends Component {
  componentDidMount() {
    if (this.props.ua.os != null) {
      window.location.href = '/';
    }
  }
  render() {
    return (
      <div>
        请用手机打开！
      </div>
    );
  }
}

export default withUserAgent(Tips);
