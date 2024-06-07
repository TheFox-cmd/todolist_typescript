import { Provider } from 'react-redux';
import store from './components/store';
import Page from './page';

const App: React.FC = () => {
  /**
   * TODO: Concepts
   * * 1. Signup with direct login
   * * 2. Persist todolist for each user
   * * 3. CSS 
   * ! 4. somehow stores string type "undefined" as a token when issues with login 
   * ! 5. notifying issues should not post to backend, probably caused the "undefined"
   */

  return (
    <Provider store={store}>
      <Page/>
    </Provider>
  );
};

export default App;
