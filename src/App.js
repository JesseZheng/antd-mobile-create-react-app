import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tabs, Button, WhiteSpace } from 'antd-mobile';

const TabPane = Tabs.TabPane;



function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}

class App extends Component {
  render() {
    return (
      <div className="App">
            <Tabs defaultActiveKey="2" onChange={callback} onTabClick={handleTabClick}>
      <TabPane tab="Tabe 1" key="1">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          <Button type="primary"> antd-mobile Rocks! </Button>
        </div>
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          Content!
        </div>
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          More
        </div>
      </TabPane>
    </Tabs>
    <WhiteSpace />
      </div>
    );
  }
}

export default App;
