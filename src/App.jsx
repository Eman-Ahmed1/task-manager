import { useState } from 'react'
import './App.css'
import FilterTabs from './components/FilterTabs/FilterTabs'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'

function App() {
  const [tasks, setTasks] = useState([]);

  // add task
  const addTask = (newTask) => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        title: newTask,
        completed: false
      }
    ]);
  }

  // toggleTask 
  const toggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map((item) =>
        item.id === id ?
          {
            ...item,
            completed: !item.completed
          } : item
      )
    )
  }

  // delete
  const deleteTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.filter(item =>
        item.id !== id
      )
    )
  }

  // edit
  const editTask = (id , newTitle) => {
    setTasks(prevTasks =>
      prevTasks.map(item =>
        item.id !== id ? item : 
        {
          ...item,
          title: newTitle
        }
      )
    )
  }
  return (
    <div className="container">
      <Header />
      <TaskForm addTask={addTask} />
      <div className="task-controls">
        <SearchBar />
        <FilterTabs />
      </div>
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  )
}

export default App
