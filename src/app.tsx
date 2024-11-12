import {
  LocationProvider,
  Route,
  Router,
} from 'preact-iso';
import './app.css';
import Home from './pages/Home';
import Area from './pages/Area';

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={Home} />
        {/* <Route path="/kota/:id" component={Area} /> */}
        <Route path="/provinsi/:id" component={Area} />
      </Router>
    </LocationProvider>
  );
}
