import './App.css'
import FilterTabs from './components/FilterTabs/FilterTabs'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'

function App() {
  return (
      <div className="container">
        <Header />
        <TaskForm />
        <div className="task-controls">
          <SearchBar />
          <FilterTabs />
        </div>
        <TaskList />
      </div>
  )
}

export default App
