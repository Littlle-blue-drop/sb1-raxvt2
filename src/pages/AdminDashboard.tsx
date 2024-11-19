import React from 'react';
import { FileText, Users, Settings, Plus } from 'lucide-react';

const AdminDashboard = () => {
  const materials = [
    { id: 1, title: "Advanced Essay Structure", type: "Template", lastUpdated: "2024-03-15" },
    { id: 2, title: "Business Writing Guide", type: "Resource", lastUpdated: "2024-03-14" },
    { id: 3, title: "Academic Vocabulary List", type: "Resource", lastUpdated: "2024-03-16" }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Add New Material
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <FileText className="h-8 w-8 text-indigo-600" />
              <h3 className="text-lg font-semibold mt-2">Learning Materials</h3>
            </div>
            <span className="text-2xl font-bold">45</span>
          </div>
          <div className="text-sm text-gray-600">
            12 materials added this month
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Users className="h-8 w-8 text-green-600" />
              <h3 className="text-lg font-semibold mt-2">Total Users</h3>
            </div>
            <span className="text-2xl font-bold">156</span>
          </div>
          <div className="text-sm text-gray-600">
            24 new users this month
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Settings className="h-8 w-8 text-orange-600" />
              <h3 className="text-lg font-semibold mt-2">System Status</h3>
            </div>
            <span className="text-green-600 font-semibold">Operational</span>
          </div>
          <div className="text-sm text-gray-600">
            Last checked: 5 minutes ago
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Learning Materials</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3">Title</th>
                <th className="text-left py-3">Type</th>
                <th className="text-left py-3">Last Updated</th>
                <th className="text-left py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((material) => (
                <tr key={material.id} className="border-b border-gray-100">
                  <td className="py-3">{material.title}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      material.type === 'Template' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {material.type}
                    </span>
                  </td>
                  <td className="py-3">{material.lastUpdated}</td>
                  <td className="py-3">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">Edit</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;