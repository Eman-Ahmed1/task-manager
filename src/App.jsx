import { useState , useEffect } from 'react'
import './App.css'
import FilterTabs from './components/FilterTabs/FilterTabs'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'

// save tasks to localStorage
const saveTasks = (tasks)=>{
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

// get tasks from localStorage
const getTasks = () =>{
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) :[];
}
function App() {
  const [tasks, setTasks] = useState(getTasks);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(()=>{
    saveTasks(tasks);
  },[tasks])

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
  const editTask = (id, newTitle) => {
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

  // search task
  const filteredTasks = tasks.filter(item => {
    const searchMatches = item.title.toLowerCase().includes(search.toLowerCase());

    let filterMatches;

    if (filter === "all") {
      filterMatches = true;
    } else if (filter === "active") {
      filterMatches = !item.completed;
    } else if (filter === "completed") {
      filterMatches = item.completed;
    }
    
    return searchMatches && filterMatches;
  }

  )

  // search funcrion
  const onSearch = (value) => {
    setSearch(value);
  }

  // filter tabs
  const onFilter = (value) => {
    setFilter(value);
  }

  // Clear
  const onClear = () =>{
    setTasks(prevTasks => prevTasks.filter(item => !item.completed))
  }

  return (
    <div className="container">
      <Header />
      <TaskForm addTask={addTask} />

      <div className="task-controls">
        <SearchBar
          onSearch={onSearch}
          search={search}
        />
        <FilterTabs
          onFilter={onFilter}
          filter={filter}
        />
      </div>

      <TaskList

        tasks={tasks}
        filteredTasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
        onClear={onClear}
      />
    </div>
  )
}

export default App
