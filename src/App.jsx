import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./assets/css/app.min.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
// About page
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // Fetch one task
  const fetchTask = async id => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Add Task
  async function addTask(task) {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();

    setTasks([...tasks, data]);
  }

  // Delete Task
  async function deleteTask(id) {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(
      tasks.filter(task => {
        return task.id !== id;
      })
    );
  }

  // Set Reminder
  async function toggleReminder(id) {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  // Toggle add
  function toggleAdd() {
    setShowAddTask(!showAddTask);
  }

  return (
    <Router>
      <div className="app">
        <Header
          title="Todo List"
          btnClick={toggleAdd}
          addFormState={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            exact
            Component={props => (
              <>
                <div className="container-wide">
                  <AddTask onAdd={addTask} visible={showAddTask} />
                  {tasks.length > 0 ? (
                    <Tasks
                      tasks={tasks}
                      onDelete={deleteTask}
                      onToggle={toggleReminder}
                    />
                  ) : (
                    <h3>You currently have no tasks!</h3>
                  )}
                </div>
              </>
            )}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
