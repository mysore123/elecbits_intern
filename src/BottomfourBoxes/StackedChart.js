import React, { PureComponent } from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {Typography} from '@material-ui/core';
const data = [
  {
    name: '2005', Desktop: 30, Tablet: 210,Mobile:310,
  },
  {
    name: '2006', Desktop: 50, Tablet: 130,Mobile:207,
  },
  {
    name: '2007', Desktop: 80, Tablet:180,Mobile:220,
  },
  {
    name: '2008', Desktop: 50, Tablet: 130,Mobile:210,
  },
  {
    name: '2009', Desktop: 75, Tablet: 180,Mobile:300, 
  },
  {
    name: '2010', Desktop: 50, Tablet: 130,Mobile:230,
  },
  {
    name: '2011', Desktop: 29, Tablet: 85,Mobile:170, 
  },
  {
    name: '2012', Desktop: 45, Tablet: 135,Mobile:180,
  },
  {
    name: '2013', Desktop: 50, Tablet: 80, Mobile:165,
  },
  {
    name: '2014', Desktop: 65, Tablet: 138,Mobile:210, 
  },
  {
    name: '2015', Desktop: 70, Tablet:195 ,Mobile:310,
  },
];

export default class Stackedchart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
   
    return (
    <div>
        <Typography className="stackchart" color="primary">
            Sales Analytics
        </Typography>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,  left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Desktop" stackId="a" fill="#eb4559" />
        <Bar dataKey="Tablet" stackId="a" fill="#342ead" /> 
        <Bar dataKey="Mobile" stackId="a" fill="#ececec" /> 
      </BarChart>
      </div>
    );
  }
}
