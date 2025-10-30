
import './App.css'
import Quiz from './components/quiz'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Startquiz from "./components/Startquiz"
const router = createBrowserRouter([
  { path: "/", element: <Startquiz/> },     // default page = Start
  { path: "/quiz", element: <Quiz /> }   // quiz page
]);


function App() {


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
