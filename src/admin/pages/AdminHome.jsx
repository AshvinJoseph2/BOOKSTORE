import React from 'react'
import AdminHeader from '../components/AdminHeader';
import Footer from '../../components/Footer';
import AdminSidebar from '../components/AdminSidebar';
import { FaBook, FaUsers } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { ResponsiveContainer, BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, PieChart, Pie } from 'recharts';


function AdminHome() {
  // #region Sample data
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
    },
  ];

  // #region Sample data
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
  ];


  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <div className="md:grid grid-cols-3">
            <div className="md:px-5 my-5 md:my-0">
              {/* card-1 */}
              <div className="bg-blue-200 px-4 py-8 flex  items-center rounded  text-5xl">
                <FaBook />
                <div className="text-center ms-10 md:ms-5">
                  <h1 className="text-lg">Total No of Books</h1>
                  <h1 className='text-2xl'>100+</h1>
                </div>
              </div>
            </div>
            <div className="md:px-5 my-5 md:my-0">
              {/* card-2 */}
              <div className="bg-blue-200 px-4 py-8 flex items-center rounded  text-5xl">
                <FaUsers />
                <div className="text-center ms-10 md:ms-5">
                  <h1 className="text-lg">Users</h1>
                  <h1 className='text-2xl'>100+</h1>
                </div>
              </div>
            </div>
            <div className="md:px-5 my-5 md:my-0">
              {/* card-3 */}
              <div className="bg-blue-200 px-4 py-8 flex items-center justify-center rounded  text-5xl">
                <FaPeopleGroup />
                <div className="text-center ms-10 md:ms-5">
                  <h1 className="text-lg">Employees</h1>
                  <h1 className='text-2xl'>100+</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="md:grid grid-cols-2 p-5 mt-10">
            <div>
              Bar Purchasing Ratio
            </div>
            <div>
              Growth Ratio - (Yearly)
            </div>
          </div>

          {/* charts */}
          <div className="md:grid grid-cols-2 px-5">
            <div >
              {/* Bar chart  */}
              <ResponsiveContainer width={'450'} height={'300'}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis width="auto" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div>
              {/* Pie chart */}
              <ResponsiveContainer width={'450'} height={'300'}>
                <PieChart>
                  <Pie
                    data={data01}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="50%"
                    fill="#8884d8"
                  
                  />
                  <Pie
                    data={data02}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    fill="#82ca9d"
                    label
                    
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminHome