import React from 'react'
//

import { Chart } from 'react-charts'


function Chart2() {

      const series = React.useMemo(
        () => ({
          showPoints: false
        }),
        []
      )

    const data = React.useMemo(
        () => [
          {
            label: 'Antall søknader fra 09.03.2020',
            data: [{ x: 9.03, y: 731 }, { x: 10.03, y: 1438 }, { x: 11.03, y: 2208 }, { x: 12.03, y: 4098}, { x: 13.03, y: 13761 }, { x: 14.03, y: 20582}, { x: 15.03, y: 25191 },
                { x: 16.03, y: 52067}, { x: 17.03, y: 115747 }, { x: 18.03, y: 156361}, { x: 19.03, y: 187477 }, { x: 20.03, y: 211036 }, { x: 21.03, y: 217589 }, { x: 22.03, y: 225409}, 
                { x: 23.03, y: 245840}, { x: 24.03, y: 261727 }, { x: 25.03, y: 276377 }, { x: 26.03, y: 289367 }, { x: 27.03, y: 301177 }, { x: 28.03, y: 304644 }, { x: 29.03, y: 308607 },
                { x: 30.03, y: 11868}, { x: 31.03, y: 8550 }, { x: 1.04, y: 9521 }, { x: 2.04, y: 8045 }, { x: 3.04, y: 7221 }, { x: 4.04, y: 1980  },
                { x: 5.04, y: 310759 }, { x: 6.04, y: 315875}, { x: 7.04, y: 319443 }, { x: 8.04, y: 323011 }, { x: 9.04, y: 324554 }, { x: 10.04, y:  325866 }, { x: 11.04, y: 327046  }, 
                { x: 12.04, y: 328187 }, { x: 13.04, y: 330467 }, { x: 14.04, y: 335862 }, { x: 15.04, y: 339989}, { x: 16.04, y: 343816} ]
          },
        ],
        []
      )
    
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )
    
      return (
        <div
          style={{
            width: '23em',
            height: '19em'
          }}
        >
            <Chart data={data} series={series} axes={axes} tooltip dark />

        </div>
      )
}

export default Chart2;