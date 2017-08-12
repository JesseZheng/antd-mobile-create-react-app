import React from 'react';
import './App.css';
import { ListView, Popup, SearchBar,RefreshControl } from 'antd-mobile';
import {x} from './dummyData'

let index = x.length - 1;

class App extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.initData = [];
    for (let i = 0; i < 20; i++) {
      this.initData.push(`r${i}`);
    }
    this.state = {
      dataSource: dataSource.cloneWithRows(this.initData),
      refreshing: false,
      focused:false,
      sel:''
    };
  }
  onRefresh = () => {
    this.setState({ focused: true }, () => {
      // console.log('Check focus state', this.state.focused)
      Popup.show(      <SearchBar
        placeholder="Auto focus please"
        focused={this.state.focused}
        autoFocus
      />, { animationType: 'slide-down' });
    })
  };
  onClose = (sel) => {
    this.setState({ sel });
    this.setState({ focused:false });
    console.log('close ran')
    Popup.hide();
  };
  // Popup.show(
  //     <SearchBar
  //       placeholder="手动获取获取光标"
  //       focused={this.state.focused}
  //       onFocus={() => {
  //         this.setState({
  //           focused: false,
  //         });
  //       }}
  //     />, { animationType: 'slide-down' });
  //   this.initData = [`ref${pageIndex++}`, ...this.initData];
  //   this.setState({ focused: true });
  //   console.log('all states', this.state)
  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = x.length - 1;
      }
      const obj = x[index--];
      return (
        <div key={rowID}
          style={{
            padding: '0.08rem 0.16rem',
            backgroundColor: 'white',
          }}
        >
          <h3 style={{ padding: 2, marginBottom: '0.08rem', borderBottom: '1px solid #F6F6F6' }}>
            {obj.player1} : {obj.player1score}
          </h3>
          <div style={{ display: '-webkit-box'}}>
            <img style={{ height: '1.28rem', marginRight: '0.08rem' }} src="https://s-media-cache-ak0.pinimg.com/originals/54/c3/2f/54c32f4f9f2b6dfd4c7036afac460cda.jpg" alt="icon" />
            <div style={{ display: 'inline-block' }}>
              <div style={{ margin: '0.1rem 0 0.2rem 0' }}> {obj.player2score}</div>
              <div><span style={{ fontSize: '1.6em', color: '#FF6E27' }}>{obj.player2}</span>{obj.des}-{rowData}</div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={row}
        renderSeparator={separator}
        initialListSize={5}
        pageSize={5}
        scrollRenderAheadDistance={200}
        scrollEventThrottle={20}
        onScroll={this.onScroll}
        style={{
          height: document.documentElement.clientHeight,
          border: '1px solid #ddd',
          margin: '0.1rem 0',
        }}
        scrollerOptions={{ scrollbars: true }}
        refreshControl={<RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />}
      />
    );
  }
}

export default App;
