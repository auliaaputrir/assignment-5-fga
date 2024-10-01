import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Awards from '../pages/Awards'
import Education from '../pages/Education'
import Experience from '../pages/Experience'
import Interest from '../pages/Interest'
import Skills from '../pages/Skills'

import MainLayout from './MainLayout'

const router = createBrowserRouter([
    
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'experience',
                element: <Experience/>
            },
            {
                path: 'education',
                element: <Education/>
            },
            {
                path: 'skills',
                element: <Skills/>
            },
            {
                path: 'interest',
                element: <Interest/>
            },
            {
                path: 'awards',
                element: <Awards/>
            },
        ],
      },

])
export default router;