import toast from "react-hot-toast";
import { create } from "zustand"
const API_KEY = import.meta.env.VITE_API_KEY;

export const useTodoStore = create((set) => ({
    user: false,
    isGettingUser: false,
    tasks: [],

    checkAuth: () => {
        try {
            if (localStorage.getItem('user')) {
                const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                set({ tasks: tasks })
                set({ user: localStorage.getItem('user') });
            }
        } catch (error) {
            console.log(error.message);
        }
    },

    login: (name, password) => {
        try {
            set({ user: name });
            localStorage.setItem('user', name);
        } catch (error) {
            console.log(error.message);
        }
    },

    logout: () => {
        try {
            set({ user: false });
            set({ tasks: [] })
            localStorage.removeItem('tasks');
            localStorage.removeItem('user');
        } catch (error) {
            console.log(error.message)
        }
    },

    addTask: async (task, city, taskType) => {
        try {
            let data = null;
            if (taskType === 'outdoor') {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
                const weather = await response.json();
                data = {
                    _id: Date.now(),
                    task,
                    city,
                    taskType,
                    priority: 'low',
                    temperature: weather.main.temp,
                    weatherCondition: weather.weather[0].main,
                    description: weather.weather[0].description,
                    humidity: weather.main.humidity,
                    windSpeed: weather.wind.speed
                }
            } else {
                data = {
                    _id: Date.now(),
                    task,
                    city,
                    taskType,
                    priority: 'low',
                }
            }
            set((state) => ({
                tasks: [data, ...state.tasks],

            }));
            try {
                const oldTasks = JSON.parse(localStorage.getItem('tasks')) || [];
                const updatedTasks = [data, ...oldTasks];
                localStorage.setItem('tasks', JSON.stringify(updatedTasks))
            } catch (error) {
                console.log('Error in localStorage')
            }

            toast.success('Task Created');
        } catch (error) {
            console.log(error.message)
        }
    },

    deleteTask: (taskId) => {
        try {
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            set((state) => ({
                tasks: state.tasks.filter((task) => task._id !== taskId)
            }))
            const updatedTasks = tasks.filter(task => task._id !== taskId);
            console.log(updatedTasks)
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        } catch (error) {
            console.log(error.message);
        }
    },

    updatePriority: (taskId, priority) => {
        try {
            set((state) => ({
                tasks: state.tasks.map(task =>
                    task._id === taskId ? { ...task, priority: priority } : task
                )
            }));

            // Updating localStorage correctly
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const updatedTasks = tasks.map(task =>
                task._id === taskId ? { ...task, priority: priority } : task // Return the task itself if no match
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        } catch (error) {
            console.log(error.message)
        }
    }
}))