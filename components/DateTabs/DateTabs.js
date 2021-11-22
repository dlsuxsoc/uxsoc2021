import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactDOM from 'react-dom';
import React from 'react';
import styles from "./DateTabs.module.scss";

const DateTabs = () => (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>
            <p>2022</p>
          </Tab>
          <Tab>
            <p>2021</p>
          </Tab>
          <Tab>
            <p>2020</p>
          </Tab>
          <Tab>
            <p>2019</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <h2>2022 events</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>2021 events</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>2020 events</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>2019 events</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
);

export default DateTabs;