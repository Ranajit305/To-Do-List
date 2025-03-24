import React from 'react';
import { useTodoStore } from '../stores/useTodoStore';
import { ClipboardList } from 'lucide-react';

const Todo = () => {

    const { tasks, deleteTask, updatePriority } = useTodoStore();

    return (
        <div>
            {tasks.length > 0 ? (
                <div className="space-y-4 mt-6">
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100"
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Task Details */}
                                <div className="flex-1 space-y-2 min-w-[200px]">
                                    <p className="text-lg font-semibold text-gray-800">
                                        <span className="text-gray-500">Task:</span> {task.task}
                                    </p>
                                    <p className="text-md">
                                        <span className="text-gray-500">City:</span> {task.city}
                                    </p>
                                    <div className="flex items-center">
                                        <span className="text-gray-500">Type:</span>
                                        <span className='ml-2 px-2 py-1 text-xs rounded-full capitalize bg-blue-100 text-blue-800'>
                                            {task.taskType}
                                        </span>
                                    </div>
                                </div>

                                {/* Weather Info */}
                                {task.taskType === 'outdoor' && (
                                    <div className="w-full md:w-64 bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-medium text-blue-800">Weather</h4>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <div>
                                                <span className="text-gray-600">Temp:</span>
                                                <span className="font-medium ml-1">{task.temperature}°C</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">Condition:</span>
                                                <span className="font-medium ml-1 capitalize">{task.weatherCondition}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">Humidity:</span>
                                                <span className="font-medium ml-1">{task.humidity}%</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">Wind:</span>
                                                <span className="font-medium ml-1">{task.windSpeed} m/s</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className='flex flex-row md:flex-col gap-2 justify-center'>
                                    <select
                                        value={task.priority}
                                        onChange={(e) => updatePriority(task._id, e.target.value)}
                                        className="bg-yellow-100 hover:bg-yellow-200 border border-none px-3 py-1.5 pr-8 rounded-lg text-sm font-medium transition cursor-pointer "
                                    >
                                        <option value="low" className="bg-white text-gray-800">Low</option>
                                        <option value="medium" className="bg-white text-gray-800">Medium</option>
                                        <option value="high" className="bg-white text-gray-800">High</option>
                                    </select>
                                    <button onClick={() => deleteTask(task._id)} className='bg-red-100 hover:bg-red-200 px-3 py-1.5 rounded-lg text-sm font-medium transition'>
                                        X Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                        <ClipboardList className="h-16 w-16 mx-auto" />
                    </div>
                    <p className="text-gray-500 text-lg">No tasks yet</p>
                    <p className="text-gray-400 mt-1">Add your first task to get started</p>
                </div>
            )}
        </div>
    );
};

export default Todo;
