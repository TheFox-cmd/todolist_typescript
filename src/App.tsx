import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import Todolist from './todolist';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Todolist />
    </Provider>
  );
};

export default App;
