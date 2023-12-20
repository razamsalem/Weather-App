import React from 'react'
import { Routes, Route } from 'react-router'
import { WeatherIndex } from './views/WeatherIndex'

function App() {

  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<WeatherIndex />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
