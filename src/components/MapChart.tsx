import { useState } from 'preact/hooks';
import Graph from './Graph';
import Popup from './Popup';
import { Provinsi } from '@/types/Provinsi.types';
// import Preview from './Preview';

const MapChart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [area, setArea] = useState<Provinsi | null>(null);

  return (
    <div className="w-full h-full flex justify-center items-center">
      {isOpen && (
        <Popup setIsOpen={setIsOpen} area={area} />
      )}
      <Graph setIsOpen={setIsOpen} setArea={setArea} />
    </div>
  );
};

export default MapChart;
