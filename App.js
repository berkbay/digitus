
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './src/store/reducers';
import AppNavigator from './src/navigations/AppNavigator';

const store = createStore(reducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );d
}

export default App;

