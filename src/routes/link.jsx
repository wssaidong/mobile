import React, {Component} from 'react';
import {
  List, Carousel
} from 'antd-mobile';
import {
  connect
} from 'dva';


import Main from '../components/layout/main.jsx';

const Item = List.Item;

@connect(state => ({
  link: state.link
}))
class LinkInfo extends Component {
  state = {
    info: [],
    data: ['', '', ''],
    imgHeight: 176
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'link/getRecommendLink',
      payload: null
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.link.info) {
      this.setState({
        info: nextProps.link.info,
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
      });
    }
  }

  render() {
    return (
      <Main location={this.props.location}>
        <div>
          <Carousel
            autoplay={false}
            infinite
            selectedIndex={1}
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(ii => (
              <a
                key={ii}
                href="https://mp.weixin.qq.com/s/4WsaM3rbqLFSsjEy_z9PxA"
                style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
              >
                <img
                  src="http://ob5tof7al.bkt.clouddn.com/17-12-19/57686334.jpg"
                  alt=""
                  style={{width: '100%', verticalAlign: 'top'}}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({imgHeight: 'auto'});
                  }}
                />
              </a>
            ))}
          </Carousel>
          {
            this.state.info ? (
              <List>
                {
                  this.state.info.map((item) => {
                    return (
                      <Item multipleLine align="top" wrap onClick={() => { window.open(item.url); }} key={item.id}>
                        {item.title}
                      </Item>
                    );
                  })
                }
              </List>
            ) : null
          }
        </div>
      </Main>
    );
  }
}

export default LinkInfo;
