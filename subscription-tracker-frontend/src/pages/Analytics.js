import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
// In src/pages/Analytics.js
import { Card, CardContent } from '../components/ui/card';

const COLORS = ["#845EC2", "#FFC75F", "#F9F871", "#FF6F91", "#2C73D2"];

const sampleSpendData = [
  { month: "Jan", spend: 102 },
  { month: "Feb", spend: 90 },
  { month: "Mar", spend: 110 },
  { month: "Apr", spend: 95 },
  { month: "May", spend: 89 },
  { month: "Jun", spend: 76 },
];

const categoryData = [
  { name: "Streaming", value: 200 },
  { name: "Tools", value: 300 },
  { name: "Cloud", value: 100 },
  { name: "Music", value: 150 },
  { name: "Other", value: 80 },
];

export default function Analytics() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // Replace with actual backend API call
    setSubscriptions([{}, {}, {}, {}, {}, {}, {}, {}]); // dummy 8 active subs
  }, []);

  return (
    <div className="p-6 space-y-6 overflow-auto">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Monthly Spend</h2>
            <p className="text-xl font-semibold">$89.99</p>
            <p className="text-green-500 text-sm">↓ 12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Active Subscriptions</h2>
            <p className="text-xl font-semibold">{subscriptions.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Upcoming Renewals</h2>
            <p className="text-xl font-semibold">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Canceled Subs</h2>
            <p className="text-xl font-semibold">2</p>
          </CardContent>
        </Card>
      </div>

      {/* Line Chart */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-4">Monthly Spending Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sampleSpendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="spend" stroke="#845EC2" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-4">Category Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
