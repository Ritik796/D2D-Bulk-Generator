import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import style from '../../../Styles/Common/Header/Header.module.css'

const Header = ({ title }) => {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.headerInfo}`}>
        <div className={`${style.backAction}`}>
          <FaArrowLeft size={20} color='white' />
        </div>
        <div className={`${style.headerTitle}`}>
          <h5>{title ? title : "Bulk Generator"}</h5>
        </div>
      </div>
    </div>
  )
}

export default Header