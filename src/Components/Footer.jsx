import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-10 md:flex-row md:justify-between md:mt-32 md:text-xl md:items-center'>
        <div className='font-lato'>
            <ul className='flex gap-4'>
                <li><a href="#">Facebook</a></li>
                <li><a href="#"></a>Instagram</li>
                <li><a href="#"></a>Twitter</li>
            </ul>
        </div>
        <div className='flex gap-4 items-center text-base md:text-xl'>
            <img src="./assets/Help-Avatar.svg" alt="man" />
            <div className='font-playfair'>
                <p>Have any questions?</p>
                <p className='font-bold'>Talk to a specialist</p>
            </div>
        </div>
    </div>
  )
}

export default Footer