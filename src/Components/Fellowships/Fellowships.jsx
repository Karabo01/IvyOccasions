import React from 'react'
import './Fellowships.css'
import program_1 from '../../assets/birthday.jpeg'
import program_2 from '../../assets/babyShower.jpeg'
import program_3 from '../../assets/grad.jpeg'
import program_4 from '../../assets/Wedding.jpeg'

import program_icon_1 from '../../assets/cake-icon.jpeg'
import program_icon_2 from '../../assets/baby-icon.jpeg'
import program_icon_3 from '../../assets/grad-icon.jpeg'
import program_icon_4 from '../../assets/wedding-icon.jpeg'
import { Button } from 'react-scroll'
import { Link } from 'react-scroll'

const Fellowships = () => {
  return (
    <div className='programs'>
            <div className='program'>
            <img src={program_1} alt="" />
                <div className="caption">
                <img src={program_icon_1} alt="" />
                    <h2> Birthday Parties </h2>
                    <button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>I WANT THIS!</Link></button>
                </div>
            </div>
            <div className='program'>
            <img src={program_2} alt="" />
                <div className="caption">
                <img src={program_icon_2} alt="" />
                    <h2> Baby Showers </h2>
                    <button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>I WANT THIS!</Link></button>
                </div>
            </div>
            <div className='program'>
                <img src={program_3} alt="" />
                <div className="caption">
                <img src={program_icon_3} alt="" />
                    <h2> Graduations </h2>
                    <button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>I WANT THIS!</Link></button>
                </div>
            </div>
            <div className='program'>
                <img src={program_4} alt="" />
                <div className="caption">
                <img src={program_icon_4} alt="" />
                    <h2> Weddings </h2>
                    <button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>I WANT THIS!</Link></button>
                </div>
            </div>
    
        
    </div>
  )
}

export default Fellowships