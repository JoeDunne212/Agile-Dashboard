import React from 'react'
import Navbar from '../components/NavBar/navbar';
import Footer from '../components/footer.tsx';
import TeamCardRow from '../components/Layout/TeamCardRow.jsx';
import TeamCard from '../components/Layout/TeamCard.jsx';
import imgPath from '../img/cat.jpg'
const Teams = (props) => {
  return (
    <div className="bg-neutral-800 text-white flex flex-col h-screen">
      <Navbar></Navbar>
      <body className='flex-1 overflow-auto w-full bg-neutral-600 justify-center align-bottom'>
     
     
      <div className='bg- bg-max-w-4xl mt-24 w-full h-80 text-center'>
        
            <div className='flex justify-center bg-white'>
                <TeamCard name='Team A' url={imgPath}></TeamCard>
                <TeamCard name='Team B' url={imgPath}></TeamCard>
                <TeamCard name='Team C' url={imgPath}></TeamCard>
            </div>
            <div className='flex justify-center bg-white'>
              <TeamCard name='Team D' url={imgPath}></TeamCard>
              <TeamCard name='Team E' url={imgPath}></TeamCard>
              <TeamCard name='Team F' url={imgPath}></TeamCard>
            </div>
        </div>
        
        
      </body>
      <Footer></Footer>
    </div>
  )
}

export default Teams;