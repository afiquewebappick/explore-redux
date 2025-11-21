import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIssues } from './features/issues/issuesSlice';

// const fetchIssues = async () => {
//   const res = await fetch('/issues.json');
//   return res.json();
// };

// const issuesPromise = fetchIssues();

function App() {
  const { issues, isLoading } = useSelector((state) => state.issues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIssues());
  }, [dispatch]);

  const [tasks, setTasks] = useState([]);
  const [resolves, setResolves] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(issues);
  }, [issues]);

  const handleTasks = (issue) => {
    setTasks([...tasks, issue]);
  };

  const handleResolves = (issue) => {
    toast('Task Resolved');
    const newTasks = tasks.filter((task) => task.id !== issue.id);
    const newTickets = tickets.filter((ticket) => ticket.id !== issue.id);
    setTasks([...newTasks]);
    setResolves([...resolves, issue]);
    setTickets([...newTickets]);
  };

  if (isLoading) {
    return <h2 className="text-3xl font-bold text-center mt-20">Loading...</h2>;
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner tasks={tasks} resolves={resolves}></Banner>
      <Services
        tasks={tasks}
        handleTasks={handleTasks}
        resolves={resolves}
        handleResolves={handleResolves}
        tickets={tickets}
      ></Services>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
