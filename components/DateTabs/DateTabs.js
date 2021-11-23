import ReactDOM from 'react-dom';
import React from 'react';
import styles from "./DateTabs.module.scss";

const DateTabs = ({setEventItems, events}) => (

    <div className="App">

      <div>
        <div className={`${styles.dates}`} onClick={()=>setEventItems(events.year2)} >
          <p className={`${styles.date} hover:border-green`} >2022</p>
        </div>
        <div  className={`${styles.dates}`} onClick={()=>setEventItems(events.year1)}>
          <p className={`${styles.date} hover:border-green`} >2021</p>
        </div>
        <div  className={`${styles.dates}`} onClick={()=>setEventItems([{title: "hello", description: "world"}])}>
          <p className={`${styles.date} hover:border-green`}>2020</p>
        </div>
        <div className={`${styles.dates}`} onClick={()=>setEventItems([{title: "hello", description: "world"}])}>
          <p className={`${styles.date} hover:border-green`}>2019</p>
        </div>
      </div>
      {/* <Tabs>
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
      </Tabs> */}
    </div>
);

export default DateTabs;