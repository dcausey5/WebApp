import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Line } from 'react-chartjs-2';
import {faker} from "@faker-js/faker";


import './index.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const Database = () => {

  

  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male"},
  ]
  const pdata = [
    {
        name: 'MongoDb',
        student: 11,
        fees: 120
    },
    {
        name: 'Javascript',
        student: 15,
        fees: 12
    },
    {
        name: 'PHP',
        student: 5,
        fees: 10
    },
    {
        name: 'Java',
        student: 10,
        fees: 5
    },
    {
        name: 'C#',
        student: 9,
        fees: 4
    },
    {
        name: 'C++',
        student: 10,
        fees: 8
    },
];
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const options = {
  responsive: true,
  plugins: {
    
    
    title: {
      display: true,
      text: 'Chart.js Line Chart',
      
    },
  },
};
const data1 = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  return (
    <>
    <h1>Welcome To Database</h1>

      <div className="container contact-page">
        <div className="text-zone">
        <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })}
      </table>
      </div>
      </div>

<div className='piechart'>

<Line  data={data1} />;
           

        

        </div>
      
      <Loader type="pacman" />
    </>
  )
}

export default Database
