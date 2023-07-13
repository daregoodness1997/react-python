import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
);

interface ChartProps {
  label?: string;
  labels?: string[];
  children?: React.ReactNode;

  data: any;
  datasets: any;
}

const Cart: React.FC<ChartProps> = ({
  label,
  labels,
  data,
  children,
  datasets,
}) => {
  const [homelessness, setHomelessness] = useState<number[] | null>();
  const [violentCrimes, setViolentCrimes] = useState<number[] | null>();
  const [drugCrimes, setDrugCrimes] = useState<number[] | null>();
  const [theftCrimes, setTheftCrimes] = useState<number[] | null>();
  const [list, setList] = useState<number[] | null>();


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
   
  };

  useEffect(() => {
    const tempData: any[] = [];

    Object.keys(data).forEach((key) => {
      const property = data[key];

      if (Array.isArray(property)) {
        property.forEach((item) => {
          const year = item.year;
          const number = item.number;

          tempData.push({ year, number, key });
        });
      } else {
        tempData.push({ key, value: key });
      }
    });

    setList(tempData);
  }, []);

  useEffect(() => {
    const tempHomelessnessList = [];
    const tempVolentCrimesList = [];
    const tempDrugCrimesList = [];
    const tempTheftCrimesList = [];
    // const formattedData = formatData()
    const homelessnessData = data.homelessness;
    for (let i = 0; i < homelessnessData.length; i++) {
      const pair = homelessnessData[i];
      // const year = pair.year;
      const number = pair.number;
      tempHomelessnessList.push(number);

      setHomelessness(tempHomelessnessList);
    }

    const violentCrimes = data.violentCrimes;
    for (let i = 0; i < violentCrimes.length; i++) {
      const pair = violentCrimes[i];
      // const year = pair.year;
      const number = pair.number;
      tempVolentCrimesList.push(number);

      setViolentCrimes(tempVolentCrimesList);
    }
    const drugCrimes = data.drugCrimes;
    for (let i = 0; i < drugCrimes.length; i++) {
      const pair = drugCrimes[i];
      // const year = pair.year;
      const number = pair.number;
      tempDrugCrimesList.push(number);
      setDrugCrimes(tempDrugCrimesList);
    }
    const theftCrimes = data.theftCrimes;
    for (let i = 0; i < theftCrimes.length; i++) {
      const pair = theftCrimes[i];
      // const year = pair.year;
      const number = pair.number;
      tempTheftCrimesList.push(number);

      setTheftCrimes(tempTheftCrimesList);
    }
  }, []);

  const chartdata = {
    labels,
    datasets: datasets,
  };
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>{label}</h3>
        {children}
      </div>

      <Line options={options} data={chartdata} />
    </div>
  );
};

export default Cart;
