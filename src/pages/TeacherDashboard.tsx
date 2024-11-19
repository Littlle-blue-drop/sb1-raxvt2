import React from 'react';
import { Users, BookOpen, LineChart, MessageSquare } from 'lucide-react';

const TeacherDashboard = () => {
  const students = [
    { id: 1, name: "Emma Thompson", progress: 85, tasksCompleted: 12, lastSubmission: "2024-03-15" },
    { id: 2, name: "James Wilson", progress: 72, tasksCompleted: 8, lastSubmission: "2024-03-14" },
    { id: 3, name: "Sarah Davis", progress: 93, tasksCompleted: 15, lastSubmission: "2024-03-16" }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
          <Users className="h-8 w-8 mb-2" />
          <h3 className="text-lg font-semibold">Total Students</h3>
          <p className="text-2xl font-bold">24</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
          <BookOpen className="h-8 w-8 mb-2" />
          <h3 className="text-lg font-semibold">Active Tasks</h3>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-xl shadow-lg">
          <LineChart className="h-8 w-8 mb-2" />
          <h3 className="text-lg font-semibold">Class Average</h3>
          <p className="text-2xl font-bold">83%</p>
        </div>
        <div className="bg-orange-500 text-white p-6 rounded-xl shadow-lg">
          <MessageSquare className="h-8 w-8 mb-2" />
          <h3 className="text-lg font-semibold">Pending Reviews</h3>
          <p className="text-2xl font-bold">7</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Student Progress</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3">Student Name</th>
                <th className="text-left py-3">Progress</th>
                <th className="text-left py-3">Tasks Completed</th>
                <th className="text-left py-3">Last Submission</th>
                <th className="text-left py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-gray-100">
                  <td className="py-3">{student.name}</td>
                  <td className="py-3">
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-blue-500 rounded-full h-2"
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <span>{student.progress}%</span>
                    </div>
                  </td>
                  <td className="py-3">{student.tasksCompleted}</td>
                  <td className="py-3">{student.lastSubmission}</td>
                  <td className="py-3">
                    <button className="text-indigo-600 hover:text-indigo-800">
                      View Details
                    </button>
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

export default TeacherDashboard;