import { useRoute } from 'preact-iso';
import { useEffect, useState } from 'preact/hooks';
import { RiCloseLargeLine } from 'react-icons/ri';
import Footer from '@/components/Footer';
import { kota, provinsiData, data } from '@/data/data';
import { Provinsi } from '@/components/MapChart';

const Area = () => {
  const [dataProvinsi, setDataProvinsi] =
    useState<Provinsi | null>(null);
  const { params } = useRoute();

  useEffect(() => {
    const result = data.provinces.find(
      (k) => k.id === Number(params.id),
    );

    setDataProvinsi(result);
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
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url('${dataProvinsi?.logoUrl}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>

      <a
        href="/"
        className="z-20 absolute right-0 p-8 text-white hover:text-yellow-500 transition"
      >
        <RiCloseLargeLine size={40} />
      </a>

      <div className="z-10 bg-[rgba(0,0,0,0.2)] flex-1">
        <div className="grid md:grid-cols-2 h-full">
          <div></div>
          <div className="text-white">
            <div className="md:mt-72 flex flex-col items-center">
              <div className="p-4">
                <h1 className="text-6xl tracking-wider text-center">
                  {dataProvinsi?.name}
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
      <Footer />
    </div>
  );
};

export default Area;
