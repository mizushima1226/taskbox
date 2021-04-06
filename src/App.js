import './App.css';

import { Provider } from "react-redux";
import store from "./lib/redux";

import { PureInboxScreen } from "./components/InboxScreen";


function App() {
  return (
    <Provider store={store}>
      <PureInboxScreen />
    </Provider>
  );
}

export default App;
