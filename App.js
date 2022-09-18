import AppNavigation from './src/components/NavigationFile';
import { Provider } from "react-redux";
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};