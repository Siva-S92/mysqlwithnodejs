import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import BlogPosts from './components/BlogPosts'
import BlogPostForm from './components/BlogPostForm'


function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <BlogPostForm />
    <BlogPosts />
    
    </>
  )
}

export default App
