import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, HelpCircle, Send } from 'lucide-react';

const WritingTask = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');

  const task = {
    title: "Academic Essay Writing",
    description: "Write a 500-word essay on the impact of artificial intelligence on modern education.",
    requirements: [
      "Minimum 500 words",
      "Include at least 3 scholarly references",
      "Follow APA format",
      "Provide specific examples"
    ],
    deadline: "2024-03-20",
    timeLimit: "120 minutes"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold">{task.title}</h1>
            <p className="text-gray-600 mt-2">{task.description}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-orange-600">
              <Clock className="h-5 w-5 mr-1" />
              <span>{task.timeLimit}</span>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Get Help
            </button>
          </div>
        </div>

        <div className="border-t border-b border-gray-200 py-4 my-4">
          <h2 className="font-semibold mb-2">Requirements:</h2>
          <ul className="list-disc list-inside space-y-1">
            {task.requirements.map((req, index) => (
              <li key={index} className="text-gray-600">{req}</li>
            ))}
          </ul>
        </div>

        <div className="text-sm text-gray-600">
          Deadline: {task.deadline}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="Start writing your essay here..."
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
          >
            <Send className="h-5 w-5" />
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WritingTask;