import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
function App() {
    return (
        <div className="App">
            <Route path='/Welcome'><Welcome /></Route>
            <Route path='/Products'><Products /></Route>
        </div>
    );
}

export default App;
