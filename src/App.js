import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTask] = useState(
      [
        {id: 1, text: "Doctor Appoinment", day: "June, 06, 2021", reminder: true},
        {id: 2, text: "Meeting at School,", day: "August, 01, 2020", reminder: true},
        {id: 3, text: "Food Shopping,", day: "April, 10, 2021", reminder: true}
      ]
    );

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
