import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { Typography } from '@material-ui/core';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}


const data = [
  createData('2008', 0),
  createData('2009', 30),
  createData('2010', 75),
  createData('2011', 45),
  createData('2012', 10),
  createData('2013', 35),
  createData('2014', 70),
  createData('2015', 85),
 
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Typography component="p" variant="subtitle1" color="primary">Total Sales</Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.secondary.main} dot={false} />

        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}