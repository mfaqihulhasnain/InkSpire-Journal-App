"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft, Sparkles, Cloud, Star } from 'lucide-react'

const FloatingElement = ({ children, delay = 0, duration = 3 }) => {
  return (
    <div 
      className="absolute animate-bounce opacity-20"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  )
}

const NotFound = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden'>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} duration={4}>
          <div className="top-20 left-20">
            <Sparkles size={24} className="text-gray-300" />
          </div>
        </FloatingElement>
        <FloatingElement delay={1} duration={5}>
          <div className="top-32 right-32">
            <Cloud size={32} className="text-gray-200" />
          </div>
        </FloatingElement>
        <FloatingElement delay={2} duration={3.5}>
          <div className="bottom-40 left-16">
            <Star size={20} className="text-gray-300" />
          </div>
        </FloatingElement>
        <FloatingElement delay={0.5} duration={6}>
          <div className="bottom-20 right-20">
            <Sparkles size={28} className="text-gray-200" />
          </div>
        </FloatingElement>
      </div>

      {/* Parallax Effect Element */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
        }}
      >
        <div className="w-full h-full bg-gray-400 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        
        {/* 404 Number with Enhanced Styling */}
        <div className="relative mb-8">
          <h1 
            className='text-8xl md:text-9xl gradient-title select-none'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
              transform: isHovering ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            404
          </h1>
          <div className="absolute inset-0 text-8xl md:text-9xl font-black text-gray-600/10 blur-sm -z-10">
            404
          </div>
        </div>

        {/* Enhanced Typography */}
        <div className="space-y-6 mb-12">
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 animate-fade-in'>
            Oops! Page Not Found
          </h2>
          <div className="max-w-md mx-auto">
            <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-delay'>
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry though – let's get you back on track!
            </p>
          </div>
        </div>

        {/* Enhanced Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button 
              variant="journal" 
              size="lg"
              className="group relative px-8 py-3 overflow-hidden font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              <span>Go Home</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group px-8 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            <span>Go Back</span>
          </Button>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
          <div className="flex items-center justify-center mb-4">
            <Search className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-semibold">
              Need Help?
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Try searching for what you need or explore our main sections.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/about">
              <Button variant="ghost" size="sm" className="rounded-full">
                About
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="sm" className="rounded-full">
                Contact
              </Button>
            </Link>
            <Link href="/help">
              <Button variant="ghost" size="sm" className="rounded-full">
                Help
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  )
}

export default NotFound