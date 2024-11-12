import { useState, useEffect, useRef } from 'preact/hooks';
import Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';
// import HighchartsExporting from 'highcharts/modules/exporting';
// import irelandMap from '@highcharts/map-collection/countries/ie/ie-all.topo.json';
import { topology, provinsi, data } from '@/data/data';

if (typeof Highcharts === 'object') {
  // HighchartsExporting(Highcharts);
}

const Graph = ({ setIsOpen, setArea }) => {
  const map = useRef(null);
  const [mapOptions, setMapOptions] = useState({
    chart: {
      map: topology,
      // height: (9 / 16) * 100 + '%',
      // height: null,
      height: 600,
      // backgroundColor: '#a6dff2',
      backgroundColor: '#fff',
    },

    title: {
      text: '',
    },

    // subtitle: {
    //   text: 'Source map: <a href="https://code.highcharts.com/mapdata/countries/id/id-all.topo.json">Indonesia</a>',
    // },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom',
      },
      enableButtons: true,
    },

    colorAxis: {
      visible: false,
      min: 0,
    },

    plotOptions: {
      series: {
        point: {
          events: {
            click: function (e) {
              // alert(`${e.point.name}`);
              console.debug(e.point);
              console.debug(e.point._i);

              const provinsi = data.provinces.find(
                (key) => key.id === e.point._i,
              );

              console.debug(provinsi);

              if (provinsi) {
                setArea(provinsi);

                setIsOpen(true);

                return;
              }
            },
          },
        },
      },
    },

    series: [
      {
        name: 'Indonesia',
        borderColor: '#000',
        nullColor: 'rgba(200, 200, 200, 0.3)',
        backgroundColor: '#E1D89F',
      },

      {
        name: 'Separators',
        type: 'mapline',
        nullColor: '#707070',
        enableMouseTracking: false,
        accessibility: {
          enabled: false,
        },
      },

      // KOTA
      // {
      //   type: 'mappoint',
      //   name: 'Kota',
      //   color: '#000',
      //   data: kota,
      //   dataLabels: {
      //     enabled: true,
      //     padding: 8,
      //     style: {
      //       fontSize: '0.7rem',
      //     },
      //     align: 'right',
      //     verticalAlign: 'middle',
      //   },
      //   showInLegend: false,
      //   tooltip: {
      //     // headerFormat: '',
      //     pointFormat: '',
      //   },
      //   cursor: 'pointer',
      //   zIndex: 2,
      //   enableMouseTracking: true,
      // },

      // PROVINSI
      {
        data: provinsi,
        name: 'Provinsi',
        color: '#77B070',
        borderColor: '#fff',
        colorAxis: {
          min: 0,
          max: 1,
          stops: [
            [0, '#FFFFFF'], // Start color (white)
            [1, '#FFFFFF'], // End color (white)
          ],
        },
        states: {
          hover: {
            color: '#5C9954',
          },
          select: {
            color: '#a4edba',
            borderColor: 'black',
            dashStyle: 'dot',
          },
        },
        dataLabels: {
          enabled: false,
          format: '{point.name}',
          style: {
            textOverflow: 'ellipsis',
            fontSize: '0.8rem',
            textOutline: 'none',
            border: 'solid white',
          },
        },
        showInLegend: false,
        allowPointSelect: false, // 'true' states select will active
        cursor: 'pointer',
      },
    ],
  });

  useEffect(() => {
    const handleResize = () => {
      const chart = map.current?.chart;

      if (chart) {
        const width = window.innerWidth;
        let zoomLevel;

        if (width < 1000) {
          zoomLevel = 6;
          // chart.mapView.zoomBy(0.3); // Moderate zoom on medium screens
          chart.mapView.zoom = zoomLevel;
        } else {
          chart.mapView.fitToBounds();
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full">
      <HighchartsReact
        highcharts={Highcharts}
        options={mapOptions}
        constructorType={'mapChart'}
        ref={map}
      />
    </div>
  );
};

export default Graph;
