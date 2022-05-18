import React from 'react'
import Chart from './Chart'
// var data = [
//   {
//     label: 'somethingA',
//     values: [
//       { x: 'SomethingA', y: 10 },
//       { x: 'SomethingB', y: 4 },
//       { x: 'SomethingC', y: 3 },
//     ],
//   },
// ]

const TestDataset = {
  series: [
    {
      label: 'First-Series',
      data: [1, 2, 3,9,1,4]
    },
    {
      label: 'Second-Series',
      data: [3.5, 4, 5,6,11,3]
    },
    {
      label: 'Third-Series',
      data: [3, 4.7, 5.2,9,11,3]
    },
  ],
  xAxis: {
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  chart: {
    type: 'Scatter Plot',
    grouped: true,
  },
}

export default () => <Chart key="123" dataset={TestDataset} />
