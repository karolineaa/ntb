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
                label: 'Oslo',
                data: [{ x: 11, y: 898 }, { x: 12, y: 2712 }, { x: 13, y: 1941 }, { x: 14, y: 1464 }, { x: 15, y: 662 }, { x: 16, y: 493 }]
            },

            {
                label: 'Rogaland',
                data: [{ x: 11, y: 370 }, { x: 12, y: 1075 }, { x: 13, y: 756 }, { x: 14, y: 612 }, { x: 15, y: 246 }, { x: 16, y: 225 }]
              },
            
            {
                label: 'Møre og Romsdal',
                data: [{ x: 11, y: 202 }, { x: 12, y: 614 }, { x: 13, y: 483 }, { x: 14, y: 361}, { x: 15, y: 164 }, { x: 16, y: 151 }]
            }, 
            
            {
                label: 'Nordland',
                data: [{ x: 11, y: 155 }, { x: 12, y: 475 }, { x: 13, y: 378 }, { x: 14, y: 305}, { x: 15, y: 137 }, { x: 16, y: 133}]
            },

            {
                label: 'Viken',
                data: [{ x: 11, y: 978 }, { x: 12, y: 3076 }, { x: 13, y: 2356 }, { x: 14, y: 1901 }, { x: 15, y: 804 }, { x: 16, y: 646 }]
            },

            {
                label: 'Innlandet',
                data: [{ x: 11, y: 242}, { x: 12, y: 805 }, { x: 13, y: 615 }, { x: 14, y: 516 }, { x: 15, y: 189 }, { x: 16, y: 183 }]
            },

            {
                label: 'Vestfold og Telemark',
                data: [{ x: 11, y: 285 }, { x: 12, y: 1008}, { x: 13, y: 770}, { x: 14, y: 670}, { x: 15, y: 241 }, { x: 16, y: 229}]
            },

            {
                label: 'Agder',
                data: [{ x: 11, y: 202 }, { x: 12, y: 665 }, { x: 13, y: 532}, { x: 14, y: 415 }, { x: 15, y: 176 }, { x: 16, y: 168 }]
            },

            {
                label: 'Vestland',
                data: [{ x: 11, y: 468 }, { x: 12, y: 1542 }, { x: 13, y: 1031 }, { x: 14, y: 896 }, { x: 15, y: 371}, { x: 16, y: 284}]
            },

            {
                label: 'Trøndelag',
                data: [{ x: 11, y: 351 }, { x: 12, y: 1057 }, { x: 13, y: 827 }, { x: 14, y: 670 }, { x: 15, y: 262 }, { x: 16, y: 271 }]
            },

            {
                label: 'Troms og Finnmark',
                data: [{ x: 11, y: 185}, { x: 12, y: 594}, { x: 13, y: 381}, { x: 14, y: 397 }, { x: 15, y: 158 }, { x: 16, y: 127 }]
            },

            {
                label: 'Ukjent',
                data: [{ x: 11, y: 177 }, { x: 12, y: 636 }, { x: 13, y: 491}, { x: 14, y: 404 }, { x: 15, y: 213 }, { x: 16, y:166 }]
            }  
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