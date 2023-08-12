import React from 'react'
import Skeleton from 'react-loading-skeleton'

const QuestionSkeleton = () => {
  return (
    <div>
    <div style={{ display: "flex", width: "100%", height: "100px", backgroundColor: "#FDF7E2", borderBottom: "1px solid black" }}>
      <div className="answer-vote"> <div className="question-col col-1">
        <Skeleton  height={'10px'} width={'10px'} baseColor='#9EC0E2'></Skeleton>
        <Skeleton height={'10px'} width={'20px'} baseColor='#9EC0E2'>  </Skeleton>
      </div>
        <div className="question-col col-2">
          <Skeleton height={'10px'} width={'10px'} baseColor='#9EC0E2'>  </Skeleton>
          <Skeleton height={'10px'} width={'20px'} baseColor='#9EC0E2'>  </Skeleton>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Skeleton height={'10px'} width={'40px'} baseColor='#9EC0E2'></Skeleton>
          <Skeleton height={'10px'} width={'40px'} baseColor='#9EC0E2'></Skeleton>
          <Skeleton height={'10px'} width={'40px'} baseColor='#9EC0E2'></Skeleton>
        </div>
        <Skeleton height={'13px'} width={'80%'} baseColor='#9EC0E2'></Skeleton>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "20px" }} >
            <Skeleton height={'20px'} width={'50px'} baseColor='#9EC0E2'></Skeleton>
            <Skeleton height={'20px'} width={'50px'} baseColor='#9EC0E2'></Skeleton>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Skeleton height={'10px'} width={'50px'} baseColor='#9EC0E2'></Skeleton>
            <Skeleton height={'10px'} width={'50px'} baseColor='#9EC0E2'></Skeleton>
          </div>
        </div>




      </div>
    </div>
    <div style={{ display: "flex", width: "100%", height: "100px", backgroundColor: "#FFFF", borderBottom: "1px solid black" }}>
      <div className="answer-vote"> <div className="question-col col-1">
        <Skeleton  height={'10px'} width={'10px'} baseColor='#9EC0E2'></Skeleton>
        <Skeleton height={'10px'} width={'20px'} baseColor='#9EC0E2'>  </Skeleton>
      </div>
        <div className="question-col col-2">
          <Skeleton height={'10px'} width={'10px'} baseColor='#9EC0E2'>  </Skeleton>
          <Skeleton height={'10px'} width={'20px'} baseColor='#9EC0E2'>  </Skeleton>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Skeleton height={'10px'} width={'40px'} baseColor='#9EC0E2'></Skeleton>
          <Skeleton height={'10px'} width={'40px'} baseColor='#9EC0E2'></Skeleton>
          <Skeleton height={'10px'} width={'40px'} baseColor='#9EC0E2'></Skeleton>
        </div>
        <Skeleton height={'13px'} width={'80%'} baseColor='#9EC0E2'></Skeleton>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "20px" }} >
            <Skeleton height={'20px'} width={'50px'} baseColor='#9EC0E2'></Skeleton>
            <Skeleton height={'20px'} width={'50px'} baseColor='#9EC0E2'></Skeleton>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Skeleton height={'10px'} width={'50px'} baseColor='#9EC0E2'></Skeleton>
            <Skeleton height={'10px'} width={'50px'} baseColor='#9EC0E2'></Skeleton>
          </div>
        </div>

      </div>
    </div>

    <div style={{ display: "flex", width: "100%", height: "100px", backgroundColor: "#FDF7E2", borderBottom: "1px solid black" }}>
      <div className="answer-vote"> <div className="question-col col-1">
        <Skeleton  height={'10px'} width={'10px'} baseColor='#9EC0E2'></Skeleton>
        <Skeleton height={'10px'} width={'20px'} baseColor='#9EC0E2'>  </Skeleton>
      </div>
        <div className="question-col col-2">
          <Skeleton height={'10px'} width={'10px'} baseColor='#9EC0E2'>  </Skeleton>
          <Skeleton height={'10px'} width={'20px'} baseColor='#9EC0E2'>  </Skeleton>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Skeleton height={'10px'} width={'40px'} baseColor='#9EC0E2'></Skeleton>
          <Skeleton height={'10px'} width={'40px'} baseColor='#9EC0E2'></Skeleton>
          <Skeleton height={'10px'} width={'40px'} baseColor='#9EC0E2'></Skeleton>
        </div>
        <Skeleton height={'13px'} width={'80%'} baseColor='#9EC0E2'></Skeleton>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "20px" }} >
            <Skeleton height={'20px'} width={'50px'} baseColor='#9EC0E2'></Skeleton>
            <Skeleton height={'20px'} width={'50px'} baseColor='#9EC0E2'></Skeleton>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Skeleton height={'10px'} width={'50px'} baseColor='#9EC0E2'></Skeleton>
            <Skeleton height={'10px'} width={'50px'} baseColor='#9EC0E2'></Skeleton>
          </div>
        </div>




      </div>
    </div>

  </div>
  )
}

export default QuestionSkeleton
