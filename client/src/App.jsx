import { useState } from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/layouts/Home'
import NotFound from './components/layouts/NotFound'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
