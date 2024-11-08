import { kota } from '@/data/data';
import { useRoute } from 'preact-iso';
import { useEffect, useState } from 'preact/hooks';

const Area = () => {
  const [area, setArea] = useState(null);
  const { params } = useRoute();

  useEffect(() => {
    const data = kota.find(
      (k) => k.id === Number(params.id),
    );

    setArea(data);
  }, []);

  return (
    <div>
      <h2>Detail - {params.id}</h2>
      <h2>Name - {area?.name}</h2>
    </div>
  );
};

export default Area;
