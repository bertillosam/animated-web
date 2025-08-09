import React from 'react'
import ThemeToggle from '../Components/ThemeToggle'
import Background from '../Components/Background'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        <ThemeToggle />
        <Background />
        <Navbar />
    </div>
  )
}

export default Home