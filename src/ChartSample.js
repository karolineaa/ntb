import React from 'react'
//

import { Chart } from 'react-charts'


function ChartSample() {

      const series = React.useMemo(
        () => ({
          showPoints: false
        }),
        []
      )

    const data = React.useMemo(
        () => [
          {
            label: 'Søknader 2019',
            data: [{ x: 1, y: 4749 }, { x: 2, y: 4927 }, { x: 3, y: 4247 }, { x: 4, y: 4037 }, { x: 5, y: 3893 }, { x: 6, y: 3511 }, { x: 7, y: 3189 },
                { x: 8, y: 3433 }, { x: 9, y: 3700 }, { x: 10, y: 3250 }, { x: 11, y: 2868 }, { x: 12, y: 2809 }, { x: 13, y: 2980 }, { x: 14, y: 3203 }, 
                { x: 15, y: 2871 }, { x: 16, y: 1333 }, { x: 17, y: 2672 }, { x: 18, y: 3105 }, { x: 19, y: 2673 }, { x: 20, y: 1910 }]
          },
          {
            label: ' Søknader 2020',
            data: [{ x: 1, y: 2792 }, { x: 2, y: 4487 }, { x: 3, y: 4120 }, { x: 4, y: 3908 }, { x: 5, y: 4013 }, { x: 6, y: 3790 }, { x: 7, y: 3668 },
                { x: 8, y: 3094 }, { x: 9, y: 3581 }, { x: 10, y: 3285 }, { x: 11, y: 25191 }, { x: 12, y: 200218 }, { x: 13, y: 83198 }, { x: 14, y: 49337 }, 
                { x: 15, y: 19638 }, { x: 16, y: 15629 } ]
          },

          {
            label: 'Søknader denne uken',
            data: [{ x: 16, y: 15629 }, { x: 17, y: 15629 }]
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

export default ChartSample;