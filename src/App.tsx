import { useState } from 'react'
import './App.css'
import Home from './pages/Public/Home/Home'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import NoPage from './pages/Public/NoPage/NoPage'
import TransfertOperation from './pages/Public/TransfertOperation/TransfertOperation'

const App = () => {
return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/operations/transfert" element={<TransfertOperation />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
  </BrowserRouter>
)

}

export default App
