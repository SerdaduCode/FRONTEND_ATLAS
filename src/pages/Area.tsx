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
    <div className="h-screen flex flex-col justify-between relative">
      <div
        style={{
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url('${area?.image}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="z-10 bg-[rgba(0,0,0,0.2)] flex-1">
        <div className="grid grid-cols-2 h-full">
          <div></div>
          <div className="text-white">
            <div className="mt-72 flex flex-col items-center">
              <div className="p-4">
                <h1 className="text-6xl tracking-wider text-center">
                  {area?.name}
                </h1>
                <hr className="m-7" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Laudantium dolor
                  excepturi doloremque maiores corrupti vel,
                  aliquid mollitia quos facilis quam
                  laboriosam, tempora inventore expedita.
                  Consequatur ullam labore est corrupti
                  minima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="z-10 w-full h-10 bg-slate-800 flex justify-center items-center">
        <div>
          <h1 className="text-white">Footer</h1>
        </div>
      </footer>
    </div>
  );
};

export default Area;
