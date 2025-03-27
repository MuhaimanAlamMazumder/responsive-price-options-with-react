import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        { id: 1, name: 'Alice', math: 78, physics: 82, chemistry: 79 },
  { id: 2, name: 'Bob', math: 85, physics: 80, chemistry: 83 },
  { id: 3, name: 'Charlie', math: 92, physics: 89, chemistry: 91 },
  { id: 4, name: 'David', math: 74, physics: 77, chemistry: 76 },
  { id: 5, name: 'Eva', math: 88, physics: 85, chemistry: 87 },
  { id: 6, name: 'Frank', math: 81, physics: 79, chemistry: 80 },
  { id: 7, name: 'Grace', math: 95, physics: 92, chemistry: 94 },
  { id: 8, name: 'Henry', math: 69, physics: 72, chemistry: 70 },
  { id: 9, name: 'Ivy', math: 90, physics: 88, chemistry: 89 },
  { id: 10, name: 'Jack', math: 76, physics: 74, chemistry: 75 },
];

    return (
        <div>

            <LChart width={800} height={400} data={mathMarksData}>  <XAxis dataKey="name"/> <YAxis></YAxis>
            <Line dataKey="math" stroke='red'></Line>

            <Line dataKey="physics" stroke='yellow'></Line>

            </LChart>
            
        </div>
    );
};

export default LineChart;