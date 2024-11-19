import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Trophy, TrendingUp } from 'lucide-react';

const StudentDashboard = () => {
  const tasks = [
    { id: 1, title: "Academic Essay Writing", deadline: "2024-03-20", difficulty: "Medium" },
    { id: 2, title: "Business Email Composition", deadline: "2024-03-22", difficulty: "Easy" },
    { id: 3, title: "Research Paper Analysis", deadline: "2024-03-25", difficulty: "Hard" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
          <BookOpen className="h-8 w-8 mb-2" />
          <h3 className="text-lg font-semibold">Tasks Completed</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
          <Clock className="h-8 w-8 mb-2" />
          <h3 className="text-lg font-semibold">Active Tasks</h3>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-xl shadow-lg">
          <Trophy className="h-8 w-8 mb-2" />
          <h3 className="text-lg font-semibold">Average Score</h3>
          <p className="text-2xl font-bold">85%</p>
        </div>
        <div className="bg-orange-500 text-white p-6 rounded-xl shadow-lg">
          <TrendingUp className="h-8 w-8 mb-2" />
          <h3 className="text-lg font-semibold">Progress</h3>
          <p className="text-2xl font-bold">Level 4</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Current Tasks</h2>
        <div className="space-y-4">
          {tasks.map((task) => (
            <Link
              key={task.id}
              to={`/task/${task.id}`}
              className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">{task.title}</h3>
                  <p className="text-gray-600">Due: {task.deadline}</p>
                </div>
                <span className={
                  task.difficulty === 'Easy' 
                    ? 'bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm'
                    : task.difficulty === 'Medium'
                    ? 'bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm'
                    : 'bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm'
                }>
                  {task.difficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;