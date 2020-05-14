import React, { PureComponent } from 'react';
import {  PieChart, Pie, Sector, Cell,} from 'recharts';


const data = [
  { name: 'Group A', value: 80 },
  { name: 'Group B', value: 20},
];
const COLORS = ['#342ead', '#ececec'];


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

  render() {
    return (
      <PieChart width={190} height={200} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={70}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}