import React from 'react'
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import LinkedinIcon from "../assets/svg/linkedin-icon.svg"
import TwitterIcon from "../assets/svg/twitter-icon.svg"
import GithubIcon from "../assets/svg/github-icon.svg"

const Footer = () => {
  return (
    <footer className='p-3 bg-white shadow-lginnert'>
        <div className='container mx-auto'>
            <div className='flex flex-wrap justify-between items-center'>
                <div>
                    <p className='font-open text-[15px]'>Powered with 💙 by <span className='text-[#4f65f1] font-semibold'>&copy;nickyamc</span></p>
                </div>
                <div className='flex items-center gap-2'>
                    <a href='https://www.linkedin.com/in/nick-macedo/'><img src={LinkedinIcon} className='w-6 h-6 hover:brightness-75' /></a>
                    <a href='https://twitter.com/_nickyamc'><img src={TwitterIcon} className='w-6 h-6 hover:brightness-75' /></a>
                    <a href='https://github.com/nickyamc'><img src={GithubIcon} className='w-6 h-6 hover:brightness-75' /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
