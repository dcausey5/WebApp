import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Line } from 'react-chartjs-2';
import {faker} from "@faker-js/faker";
import LineGraph from 'react-line-graph'
import {Image, ScrollView, Text} from 'react-native';
import{LineChart,Legend,XAxis,YAxis,CartesianGrid,ResponsiveContainer,Tooltip} from 'recharts';

import './index.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'




const Database = () => {

  const query6 ={
    
  }

  const query5 =[
    { AssaultWeapons: 8, AssaultWeaponsMassShooting: 8, Handguns: 26 ,HandgundsMassshooting: 24  , Year: 2013    },
    { AssaultWeapons: 60, AssaultWeaponsMassShooting: 35, Handguns: 689 ,HandgundsMassshooting: 264  , Year: 2014    },
    { AssaultWeapons: 350, AssaultWeaponsMassShooting: 203, Handguns: 5102 ,HandgundsMassshooting: 1386  , Year: 2015    },
    { AssaultWeapons: 549, AssaultWeaponsMassShooting: 339, Handguns: 7190 ,HandgundsMassshooting: 1576  , Year: 2016    },
    { AssaultWeapons: 704, AssaultWeaponsMassShooting: 453, Handguns: 6948 ,HandgundsMassshooting: 1899  , Year: 2017   },
    { AssaultWeapons: 206, AssaultWeaponsMassShooting: 150, Handguns: 1466,HandgundsMassshooting: 462  , Year: 2018  },
    


  ]

  const query3 = [
    { state: "Illinois ", Murder: 2906, Massshooting: 142 ,Domestic:402  , Gangrelated:1502   , TotalFatalties:16335},
    { state: "California", Murder: 4618, Massshooting: 184 ,Domestic:412  , Gangrelated:1290   , TotalFatalties:15298},
    { state: "Florida", Murder: 3074, Massshooting: 7108 ,Domestic: 744 , Gangrelated:  95 , TotalFatalties:14079},
    { state: "Texas", Murder: 3981, Massshooting: 94 ,Domestic :  749  , Gangrelated: 139   , TotalFatalties: 12506},
    { state: "Ohio", Murder: 2069, Massshooting: 60 ,Domestic :  570  , Gangrelated: 121   , TotalFatalties: 9505},
    { state: "New York", Murder: 1432, Massshooting: 73 ,Domestic :  255  , Gangrelated: 216   , TotalFatalties: 8857},
    { state: "Pennslyvania", Murder: 1959, Massshooting: 65 ,Domestic :  409  , Gangrelated: 32   , TotalFatalties: 8299},
    { state: "Georgia", Murder: 2024, Massshooting: 37 ,Domestic :  415  , Gangrelated: 94   , TotalFatalties: 8165},
    { state: "North Carolina", Murder: 1848, Massshooting: 57 ,Domestic :  401  , Gangrelated: 60   , TotalFatalties: 8107},
    { state: "Lousisiana", Murder: 1805, Massshooting: 60 ,Domestic :  263  , Gangrelated: 19   , TotalFatalties: 7503},
    { state: "Tennessee", Murder: 1537, Massshooting: 34 ,Domestic :  448  , Gangrelated: 128   , TotalFatalties: 7050},
    { state: "South Carolina", Murder: 1319, Massshooting: 48 ,Domestic :  343  , Gangrelated: 28   , TotalFatalties: 6404},
    { state: "Missouri", Murder: 1761, Massshooting: 54 ,Domestic :  260  , Gangrelated: 10   , TotalFatalties: 6092},
    { state: "Michigan", Murder: 1281, Massshooting: 13 ,Domestic :  358  , Gangrelated: 56   , TotalFatalties: 5706},
    { state: "Massachusetts", Murder: 417, Massshooting: 41 ,Domestic :  107  , Gangrelated: 148   , TotalFatalties: 5561},
    { state: "Virginia", Murder: 1200, Massshooting: 39 ,Domestic :  259  , Gangrelated: 39   , TotalFatalties: 5495},
    { state: "Indiana", Murder: 1317, Massshooting: 33 ,Domestic :  385  , Gangrelated: 85   , TotalFatalties: 5442},
    { state: "Maryland", Murder: 1425, Massshooting: 33 ,Domestic :  96  , Gangrelated: 17   , TotalFatalties: 5374},
    { state: "Alabama", Murder: 1575, Massshooting: 45 ,Domestic :  287  , Gangrelated: 7   , TotalFatalties: 5108},
    { state: "New Jersey", Murder: 994, Massshooting: 10 ,Domestic :  103  , Gangrelated: 44   , TotalFatalties: 4438},
    { state: "Wisconsin", Murder: 696, Massshooting: 22 ,Domestic :  186  , Gangrelated: 44   , TotalFatalties: 3870},
    { state: "Kentucky", Murder: 849, Massshooting: 26 ,Domestic :  248  , Gangrelated: 11   , TotalFatalties: 3381},
    { state: "Mississippi", Murder: 985, Massshooting: 14 ,Domestic :  155  , Gangrelated: 6   , TotalFatalties: 3181},
    { state: "Oklahoma", Murder: 755, Massshooting: 19 ,Domestic :  178  , Gangrelated: 49   , TotalFatalties: 3123},
    { state: "Washington", Murder: 663, Massshooting: 25 ,Domestic :  220  , Gangrelated: 160   , TotalFatalties: 3039},
    { state: "District of Columbia", Murder: 25, Massshooting: 12 ,Domestic :  8  , Gangrelated: 1   , TotalFatalties: 2953},
    { state: "Colorado", Murder: 626, Massshooting: 15 ,Domestic :  117  , Gangrelated: 59   , TotalFatalties: 2809},
    { state: "Connecticut", Murder: 276, Massshooting: 9 ,Domestic :  92  , Gangrelated: 46   , TotalFatalties: 2664},
    { state: "Arkansas", Murder: 657, Massshooting: 3 ,Domestic :  110  , Gangrelated: 6   , TotalFatalties: 2328},
    { state: "Iowa", Murder: 231, Massshooting: 13 ,Domestic :  74  , Gangrelated: 37   , TotalFatalties: 2258},
    { state: "Minnesota", Murder: 362, Massshooting: 16 ,Domestic :  83  , Gangrelated: 36   , TotalFatalties: 2176},
    { state: "Arizona", Murder: 884, Massshooting: 5 ,Domestic :  135  , Gangrelated: 270   , TotalFatalties: 2059},
    { state: "Oregon", Murder: 340, Massshooting: 15 ,Domestic :  127  , Gangrelated: 270   , TotalFatalties: 1988},
    { state: "Kansas", Murder: 431, Massshooting: 10 ,Domestic :  79 , Gangrelated: 31   , TotalFatalties: 1775},
    { state: "Nevada", Murder: 645, Massshooting: 10 ,Domestic: 123 , Gangrelated: 56   , TotalFatalties: 1595},
    { state: "Delaware", Murder: 192, Massshooting: 7 ,Domestic :  17  , Gangrelated: 9   , TotalFatalties: 1521},
    { state: "New Mexico", Murder: 394, Massshooting: 10 ,Domestic :  92  , Gangrelated: 11   , TotalFatalties: 1505},
    { state: "Nebraska", Murder: 176, Massshooting: 4 ,Domestic :  48  , Gangrelated: 15   , TotalFatalties: 1478},
    { state: "West Virginia", Murder: 274, Massshooting: 3 ,Domestic :  143  , Gangrelated: 1   , TotalFatalties: 1225},
    { state: "Alaska", Murder: 218, Massshooting: 1 ,Domestic :  107  , Gangrelated: 3   , TotalFatalties: 982},
    { state: "Utah", Murder: 214, Massshooting: 5 ,Domestic :  77  , Gangrelated: 73   , TotalFatalties: 907},
    { state: "New Hampshire", Murder: 74, Massshooting: 0 ,Domestic :  60  , Gangrelated: 6   , TotalFatalties: 833},
    { state: "Maine", Murder: 80, Massshooting: 2 ,Domestic :  108  , Gangrelated: 0   , TotalFatalties: 811},
    { state: "Rhode Island", Murder: 54, Massshooting: 4 ,Domestic :  23  , Gangrelated: 51   , TotalFatalties: 602},
    { state: "Idaho", Murder: 126, Massshooting: 0 ,Domestic :  42  , Gangrelated: 10   , TotalFatalties: 689},
    { state: "Montana", Murder: 110, Massshooting: 1 ,Domestic :  62  , Gangrelated: 1   , TotalFatalties: 523},
    { state: "North Dakota", Murder: 54, Massshooting: 0 ,Domestic :  26  , Gangrelated: 2   , TotalFatalties: 512},
    { state: "South Dakota", Murder: 68, Massshooting: 1 ,Domestic :  19  , Gangrelated: 0   , TotalFatalties: 446},
    { state: "Vermont", Murder: 44, Massshooting: 0 ,Domestic :  39  , Gangrelated: 2   , TotalFatalties: 432},
    { state: "Wyoming", Murder: 52, Massshooting: 0 ,Domestic :  20  , Gangrelated: 0   , TotalFatalties: 265},
    { state: "Hawaii", Murder: 52, Massshooting: 0 ,Domestic :  15  , Gangrelated: 2   , TotalFatalties: 265},


  ]
 
const query1 = [
  {month: 1,
    injuriesandfatalities:2013},
  {month:1,
    injuriesandfatalities: 2014},
  {month:1,
    injuriesandfatalities:2015},
  {month:1,injuriesandfatalities:2016},
  {month:1,injuriesandfatalities:2017}
,{month:1,injuriesandfatalities:2018},
{month:2,injuriesandfatalities:2013},
{month:2,injuriesandfatalities:2014},
{month:2,injuriesandfatalities:2015},
{month:2,injuriesandfatalities:2016},
{month:2,injuriesandfatalities:2017},
{month:2,injuriesandfatalities:2018}
,{month:3,injuriesandfatalities:2013},
{month:3,injuriesandfatalities:2014},
{month:3,injuriesandfatalities:2015},
{month:3,injuriesandfatalities:2016},
{month:3,injuriesandfatalities:2017},
{month:3,injuriesandfatalities:2018}
,{month:4,injuriesandfatalities:2013},
{month:4,injuriesandfatalities:2014},
{month:4,injuriesandfatalities:2015},
{month:4,injuriesandfatalities:2016},
{month:4,injuriesandfatalities:2017},
{month:5,injuriesandfatalities:2013},
{month:5,injuriesandfatalities:2014}
,{month:5,injuriesandfatalities:2015}
,{month:5,injuriesandfatalities:2016},
{month:5,injuriesandfatalities:2017},
{month:6,injuriesandfatalities:2013},
{month:6,injuriesandfatalities:2014},
{month:6,injuriesandfatalities:2015},
{month:6,injuriesandfatalities:2016}
,{month:6,injuriesandfatalities:2017},
{month:7,injuriesandfatalities:2013},
{month:7,injuriesandfatalities:2014},
{month:7,injuriesandfatalities:2015},
{month:7,injuriesandfatalities:2016},
{month:7,injuriesandfatalities:2017},
{month:8,injuriesandfatalities:2013}
,{month:8,injuriesandfatalities:2014},{month:8,injuriesandfatalities:2015},{month:8,injuriesandfatalities:2016},{month:8,injuriesandfatalities:2017},{month:9,injuriesandfatalities:2013},{month:9,injuriesandfatalities:2014},{month:9,injuriesandfatalities:2015}
,{month:9,injuriesandfatalities:2015},{month:9,injuriesandfatalities:2016},{month:9,injuriesandfatalities:2017},{month:10,injuriesandfatalities:2014},{month:10,injuriesandfatalities:2015},{month:10,injuriesandfatalities:2016},{month:10,injuriesandfatalities:2017},{month:11,injuriesandfatalities:2013},
{month:11,injuriesandfatalities:2014},{month:11,injuriesandfatalities:2015},{month:11,injuriesandfatalities:2016},{month:11,injuriesandfatalities:2017},{month:12,injuriesandfatalities:2013},{month:12,injuriesandfatalities:2014},{month:12,injuriesandfatalities:2015},{month:12,injuriesandfatalities:2016},{month:12,injuriesandfatalities:2017}
];

  return (
    <>
    <div className='database-container'>
   <table>
        <tr>
          <th>State</th>
          <th>Murder</th>
          <th>Massshooting</th>
          <th>Domestic</th>
          <th>Gangrelated</th>
          <th>TotalFatalties</th>

        </tr>
        {query3.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.state}</td>
              <td>{val.Murder}</td>
              <td>{val.Massshooting}</td>
              <td>{val.Domestic}</td>
              <td>{val.Gangrelated}</td>
              <td>{val.TotalFatalties}</td>
            </tr>
          )
        })}
      </table>
      <table>
        <tr>
          <th>AssaultWeapons</th>
          <th>AssaultWeaponsMassShooting</th>
          <th>Handguns</th>
          <th>HandgundsMassshooting</th>
          <th>HandgundsMassshooting</th>
          <th>TotalFatalties</th>

        </tr>
        {query3.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.state}</td>
              <td>{val.Murder}</td>
              <td>{val.Massshooting}</td>
              <td>{val.Domestic}</td>
              <td>{val.Gangrelated}</td>
              <td>{val.Year}</td>
            </tr>
          )
        })}
      </table>


  <ResponsiveContainer width="50%" aspect={3}>
                <LineChart data={query1} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="month" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="injuriesandfatalities"
                        stroke="red" activeDot={{ r: 8 }} />
                    
                </LineChart>
            </ResponsiveContainer>
      <Loader type="pacman" />
      </div>
      
  </>
    
  )
}

export default Database