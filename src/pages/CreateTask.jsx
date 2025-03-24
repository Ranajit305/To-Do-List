import React, { useState } from 'react';
import { useTodoStore } from '../stores/useTodoStore';
import { useNavigate } from 'react-router-dom';
import { Edit, MapPin, Home, Sun } from 'lucide-react';

const CreateTask = () => {

    const navigate = useNavigate();
    const { addTask } = useTodoStore();

    const [task, setTask] = useState('');
    const [city, setCity] = useState('');
    const [taskType, setTaskType] = useState('indoor');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task, city, taskType);
        setTask('');
        setCity('');
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center p-4 pt-0">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Create New Task</h2>
                    <p className="text-gray-500">Organize your activities with weather awareness</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Task Input */}
                    <div className="space-y-1">
                        <label htmlFor="task" className="block text-sm font-medium text-gray-700">
                            Task
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="task"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                placeholder="Morning jog in the park"
                                className="block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm outline-blue-500 transition"
                                required
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <Edit className='h-4 w-4 text-gray-400' />
                            </div>
                        </div>
                    </div>

                    {/* City Input */}
                    <div className="space-y-1">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="New York"
                                className="block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm outline-blue-500 transition"
                                required
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <MapPin className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Task Type Selection */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Activity Type</label>
                        <div className="grid grid-cols-2 gap-3">
                            {/* Indoor Option */}
                            <label className={`p-4 border rounded-lg cursor-pointer transition-all ${taskType === 'indoor' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                <input
                                    type="radio"
                                    name="taskType"
                                    value="indoor"
                                    checked={taskType === 'indoor'}
                                    onChange={() => setTaskType('indoor')}
                                    className="hidden"
                                />
                                <div className="flex flex-col items-center">
                                    <div className={`p-2 rounded-full mb-2 ${taskType === 'indoor' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                                        <Home className="w-6 h-6" />
                                    </div>
                                    <span className={`font-medium ${taskType === 'indoor' ? 'text-blue-700' : 'text-gray-700'}`}>Indoor</span>
                                </div>
                            </label>

                            {/* Outdoor Option */}
                            <label className={`p-4 border rounded-lg cursor-pointer transition-all ${taskType === 'outdoor' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                <input
                                    type="radio"
                                    name="taskType"
                                    value="outdoor"
                                    checked={taskType === 'outdoor'}
                                    onChange={() => setTaskType('outdoor')}
                                    className="hidden"
                                />
                                <div className="flex flex-col items-center">
                                    <div className={`p-2 rounded-full mb-2 ${taskType === 'outdoor' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                                        <Sun className="w-6 h-6" />
                                    </div>
                                    <span className={`font-medium ${taskType === 'outdoor' ? 'text-blue-700' : 'text-gray-700'}`}>Outdoor</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md transition duration-200 font-medium cursor-pointer"
                    >
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;
