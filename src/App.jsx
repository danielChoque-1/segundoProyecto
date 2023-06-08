import { useState } from 'react'
import './App.css'
import AxiosGet from './components/AxiosGet'
import AxiosPost from './components/AxiosPost'

function App() {


  return (
    <>
    <AxiosPost/>
    <AxiosGet/>
    </>
  )
}

export default App


