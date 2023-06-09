import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const PieChartComp = () => {
  const data = [
    { name: 'Basic Tees', value: 55 },
    { name: 'Custom Short Pants', value: 31 },
    { name: 'Super Hoodies', value: 14 },
  ];

  const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];

  return (
    <div style={{ margin: '20px' }}>
    <PieChart width={150} height={150}>
    <Pie
      data={data}
      dataKey="value"
      cx="50%"
      cy="50%"
      outerRadius={70}
      fill="#8884d8"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
  </div>
  );
};

export default PieChartComp;
