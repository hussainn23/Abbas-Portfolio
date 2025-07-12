import  { useState } from 'react'
import Hero from './Hero'
import ChannelGrid from './ChannelGrid'
import Testimonials from './Testimonials'

const Home = () => {
      const [activeSection, setActiveSection] = useState('home');
    
      const handleNavigate = (section: string) => {
        setActiveSection(section);
      };
  return (
    <div>
         <Hero onNavigate={handleNavigate} />
        <ChannelGrid />
        <Testimonials />
    </div>
  )
}

export default Home