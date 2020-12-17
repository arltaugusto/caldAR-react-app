import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import MainLayout from './Components/MainLayout/MainLayout';

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
