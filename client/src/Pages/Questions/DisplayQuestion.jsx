import React from 'react'
import QuestionsDetails from './QuestionsDetails'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import  "./QuestionsDetails.css" 
const DisplayQuestion = () => {
  return (
    <div>
      <div className="home-container-1">
        <LeftSidebar />
        <div className="home-container-2">
        <QuestionsDetails/>
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default DisplayQuestion
