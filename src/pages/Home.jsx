import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground  from '../components/starBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import { Toaster } from 'sonner'
import Footer from '../components/Footer'

function Home() {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            {/* theme toggle */}
            <ThemeToggle />
            {/* Background effects */}
            <StarBackground />
            {/* navbar */}
            <Navbar />        
            {/* main content */}
            <main>
                <HeroSection />
                <AboutMe />
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
                <Toaster position="top-center" richColors />
            </main>

            {/* footer */}
            <Footer />
    





        </div>
    )
}

export default Home
