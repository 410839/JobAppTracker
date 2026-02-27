import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom';
import GetJobDetails from './pages/jobDetailsPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<GetJobDetails/>}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
