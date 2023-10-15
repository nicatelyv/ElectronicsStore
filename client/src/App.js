import React, { useContext } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import { DarkModeContext } from './context/DarkMode'

function App() {
    const { darkMode } = useContext(DarkModeContext)

    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <RouterProvider router={router} />
        </div>
    )
}

export default App