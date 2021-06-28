import React from 'react';
import './App.css';
// import GrandParent from './components/GrandParent'
import DataFetching from './components/DataFetching';
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={'Nabendu'}>
        <ChannelContext.Provider value={'TheWebDev'}>
          <GrandParent />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <DataFetching />
    </div>
  );
}

export default App;
