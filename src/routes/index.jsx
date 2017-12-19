import React, {Component} from 'react';
import {
  connect
} from 'dva';
import {
  ListView
} from 'antd-mobile';

import Main from '../components/layout/main.jsx';

@connect(state => ({
  osc: state.osc
}))
class Index extends Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.state = {
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight
    };
  }

  componentWillMount() {
    pageIndex = 0;
    data = [];
    dataBlobs = {};
    sectionIDs = [];
    rowIDs = [];
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'osc/findTweetlist',
      payload: {page: pageIndex, pageSize: 5}
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.osc.tweetlist) {
      if (this.props.osc.tweetlist
        && nextProps.osc.tweetlist.number === this.props.osc.tweetlist.number
      ) {
        console.log('in same page');
        pageIndex = nextProps.osc.tweetlist.number;
      }
      data = nextProps.osc.tweetlist.content;
      genData(pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
        height: document.documentElement.clientHeight
      });
    }
  }

  onEndReached = (event) => {
    console.log('reach end');
    if (this.state.isLoading) {
      return;
    }
    this.setState({isLoading: true});
    this.props.dispatch({
      type: 'osc/findTweetlist',
      payload: {page: pageIndex, pageSize: 5}
    });
  }

  render() {
    console.log('data', data);
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED'
        }}
      />
    );

    let index = 0;
    const row = (rowData, sectionID, rowID) => {
      const obj = data[index++];
      return (
        <div style={{padding: '0 15px'}}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6'
            }}
          >{obj.author}
          </div>
          <div style={{display: 'flex', padding: '15px 0'}}>
            <img style={{height: '64px', marginRight: '15px'}} src={obj.imgSmall ? obj.imgSmall : obj.portrait} alt="" />
            <div style={{lineHeight: 1}}>
              <div style={{marginBottom: '8px', fontWeight: 'bold', wordBreak: 'break-all'}}>{obj.body}</div>
            </div>
          </div>
        </div>

      );
    };

    return (
      <Main location={this.props.location}>
        <ListView
          dataSource={this.state.dataSource}
          renderFooter={() => (<div style={{padding: 30, textAlign: 'center'}}>{this.state.isLoading ? '疯狂加载中' : '加载成功'}</div>)}
          renderBodyComponent={() => <Body />}
          renderRow={row}
          renderSeparator={separator}
          style={{
            height: this.state.height,
            overflow: 'auto'
          }}
          pageSize={4}
          onEndReached={this.onEndReached}
        />
      </Main>
    );
  }
}
let data = [];

const NUM_SECTIONS = 1;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

let dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs[ii] = sectionName;
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
  pageIndex++;
}

function Body(props) {
  return (
    <div className="am-list-body">
      {props.children}
    </div>
  );
}

export default Index;
