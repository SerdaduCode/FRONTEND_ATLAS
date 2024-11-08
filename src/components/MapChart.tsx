import { useState } from 'preact/hooks';
import Graph from './Graph';
import Popup from './Popup';
// import Preview from './Preview';

const MapChart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [area, setArea] = useState({
    id: null,
    name: '',
    lat: null,
    lon: null,
    nickname: '',
    image: '',
  });

  // const mapChartOption = () => {
  //   {
  //     return {
  //       chart: {
  //         map: topology,
  //         // height: (9 / 16) * 70 + '%',
  //         height: 700,
  //         backgroundColor: '#a6dff2',
  //       },

  //       title: {
  //         text: '',
  //       },

  //       // subtitle: {
  //       //   text: 'Source map: <a href="https://code.highcharts.com/mapdata/countries/id/id-all.topo.json">Indonesia</a>',
  //       // },

  //       mapNavigation: {
  //         enabled: true,
  //         buttonOptions: {
  //           verticalAlign: 'bottom',
  //         },
  //         enableButtons: true,
  //       },

  //       colorAxis: {
  //         visible: false,
  //         min: 0,
  //       },

  //       plotOptions: {
  //         series: {
  //           point: {
  //             events: {
  //               click: function (e) {
  //                 // alert(`${e.point.name}`);
  //                 console.debug(e.point);
  //                 setIsOpen(true);
  //                 setName(e.point.name);
  //               },
  //             },
  //           },
  //         },
  //       },

  //       series: [
  //         {
  //           // Use the gb-all map with no data as a basemap
  //           name: 'Indonesia',
  //           borderColor: '#A0A0A0',
  //           nullColor: 'rgba(200, 200, 200, 0.3)',
  //         },
  //         {
  //           name: 'Separators',
  //           type: 'mapline',
  //           nullColor: '#707070',
  //           enableMouseTracking: false,
  //           accessibility: {
  //             enabled: true,
  //           },
  //         },

  //         // KOTA
  //         {
  //           type: 'mappoint',
  //           name: 'Kota',
  //           color: '#000',
  //           data: kota,
  //           dataLabels: {
  //             enabled: true,
  //             padding: 8,
  //             style: {
  //               fontSize: '0.7rem',
  //             },
  //             align: 'right',
  //             verticalAlign: 'middle',
  //           },
  //           showInLegend: false,
  //           tooltip: {
  //             headerFormat: '',
  //             pointFormat:
  //               '<b>{point.name}</b><br>Lat: {point.lat}, Lon: ' +
  //               '{point.lon}',
  //           },
  //           cursor: 'pointer',
  //           zIndex: 2,
  //         },

  //         // PROVINSI
  //         {
  //           data: provinsi,
  //           name: 'Provinsi',
  //           color: 'rgb(246, 241, 241)',
  //           colorAxis: {
  //             min: 0,
  //             max: 1,
  //             stops: [
  //               [0, '#FFFFFF'], // Start color (white)
  //               [1, '#FFFFFF'], // End color (white)
  //             ],
  //           },
  //           states: {
  //             hover: {
  //               color: '#BADA55',
  //             },
  //             select: {
  //               color: '#a4edba',
  //               borderColor: 'black',
  //               dashStyle: 'dot',
  //             },
  //           },
  //           dataLabels: {
  //             enabled: false,
  //             format: '{point.name}',
  //           },
  //           showInLegend: false,
  //           allowPointSelect: false, // 'true' states select will active
  //           cursor: 'pointer',
  //         },
  //       ],
  //     };
  //   }
  // };

  // const chartOptions = mapChartOption();

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
