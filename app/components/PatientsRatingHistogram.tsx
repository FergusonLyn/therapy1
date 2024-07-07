"use client";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components you need
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the type for tooltip item
import { TooltipItem, ChartData, ChartOptions } from 'chart.js';

const PatientsRatingHistogram = () => {
  const data: ChartData<'bar', number[]> = {
    labels: ['Yes', 'No'],
    datasets: [
      {
        label: 'Patients\' Rating',
        data: [12, 5], // Example data, replace with your own
        backgroundColor: ['#4caf50', '#f44336'],
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<'bar'>) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='rounded-md bg-white border-2 border-gray-200 shadow-sm m-3 p-4'>
      <div className='flex flex-row'>
        <h1 className='font-semibold text-lg m-2'>Patients' Rating</h1>
      </div>
      <hr />
      <div className='mt-4'>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default PatientsRatingHistogram;
