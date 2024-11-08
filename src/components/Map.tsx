import MapChart from './MapChart';

const Map = () => {
  return (
    <>
      <div className="h-screen">
        <div className="h-full flex flex-col justify-between items-center">
          <div className="w-full h-14 bg-slate-800 flex items-center justify-between shadow-md">
            <h1 className="text-xl text-neutral-50 font-bold pl-8">
              Atlas
            </h1>
            <h1 className="text-xl text-neutral-50 font-bold pr-8">
              About
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-10">
            <div className="w-full flex flex-col justify-center items-center">
              <section className="w-full">
                <MapChart />
                {/* <div>Map</div> */}
              </section>
            </div>
          </div>
          <footer className="w-full h-10 bg-slate-800 flex justify-center items-center">
            <div>
              <h1 className="text-white">Footer</h1>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Map;
