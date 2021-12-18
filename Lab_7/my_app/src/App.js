// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRouter from "./routing/PublicRouter";
import PrivateRouter from "./routing/PrivateRouter";
import Main from "./containers/Main/";
import UserList from "./containers/UserList/UserList";
import FriendList from "./containers/FriendList/FriendList";
import Auth from "./containers/Auth/Auth";
import Profile from "./containers/Profile/";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRouter exact path="/" component={Main} />
        <PublicRouter exact path="/users" component={UserList} />
        <PublicRouter path="/friends" component={FriendList} />
        <PublicRouter path="/sign-in" component={Auth} />
        <PrivateRouter path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;