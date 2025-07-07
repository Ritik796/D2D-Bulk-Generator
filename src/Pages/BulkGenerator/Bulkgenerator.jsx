import React from 'react'
import style from '../../Styles/BulkGenerator/BulkGenerator.module.css'
import Header from '../../Components/Common/Header/Header'

const Bulkgenerator = () => {
  return (
    <div className={`${style.container}`}>
        <div>
            <Header/>
        </div>
        <div>Body</div>
    </div>
  )
}

export default Bulkgenerator