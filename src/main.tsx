import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'

const router = createHashRouter([
  {
    path: "/",
    // element: <App key="app" />,
    // errorElement: <Error />,
    children: [
      { path: "",
        element: <App /> },
      { path: "about",
        element: <About /> },
      { path: "projects",
        element: <Projects /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
