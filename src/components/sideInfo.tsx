import React, { ReactElement } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MdPhone, MdEmail, MdLocationOn, } from "react-icons/md";
import { FaGithub, FaTwitter } from "react-icons/fa";


interface props {}

const profilePictureQuery = graphql`{
  file(name: {eq: "profilePicture"}){
    childImageSharp {
      fixed(width: 150){
        src
      }
    }
  }
}`

function SideInfo({}: props):ReactElement{
  const {file: {childImageSharp: {fixed: {src: profilePicture}}}} = useStaticQuery(profilePictureQuery)
  return (
    <div className="sm:float-left sm:w-64 p-2 border-4 border-white bg-base-300">
      <img className="ml-4 absolute w-40 h-40 transform xsm:-translate-y-20 rounded-tl-heavy rounded-tr-light rounded-bl-light rounded-br-heavy border-4" src={profilePicture} alt=""/>
      <ul className="p-3 flex flex-wrap justify-center sm:block mt-40 xsm:mt-20 -my-4">
        <li className="flex my-2 ml-4"><MdPhone /><span>0404522807</span></li>
        <li className="flex my-2 ml-4"><MdEmail /><span>ahut10@gmail.com</span></li>
        <li className="flex my-2 ml-4"><MdLocationOn/><span>Mid North Coast, NSW</span></li>
        <li className="flex my-2 ml-4"><FaGithub /><span>mrhut10</span></li>
        <li className="flex my-2 ml-4"><FaTwitter /><span>ahut10</span></li>
      </ul>
    </div>
  )
}

export default SideInfo