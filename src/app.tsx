import {
  LocationProvider,
  Route,
  Router,
  useRoute,
} from 'preact-iso';
import Map from './components/Map';
import './app.css';
import { kota } from './data/data';
import { useEffect, useState } from 'preact/hooks';

function Detail() {
  const { params } = useRoute();
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataKota = kota.find(
      (k) => k.id === Number(params.id),
    );
    setData(dataKota);
  }, []);

  return (
    <>
      <h2>Detail - {params.id}</h2>
      <h2>Name - {data?.name}</h2>
    </>
  );
}

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={Map} />
        <Route path="/map/:id" component={Detail} />
      </Router>
    </LocationProvider>
  );
}
