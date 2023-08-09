import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Question from './Question'
import "./Question.css"
import { getPaginatedQuestion } from "../actions/question.js"
import { useDispatch, useSelector } from 'react-redux';
const QuestionList = () => {
   let questionList = useSelector((state)=>state.questionsReducer);
   questionList= questionList.data;
 const  dispatch = useDispatch();
 
  const [limit,setLimit]=useState(5);
  const [pageCount,setPageCount]=useState(1);
  const currentPage=useRef();

  useEffect(() => {
    currentPage.current=1;
    console.log("hello");
    // getAllUser();
    dispatch(getPaginatedQuestion(setPageCount,currentPage.current, limit));
  }, []);

   //pagination
   function handlePageClick(e) {
    console.log(e);
   currentPage.current=e.selected+1;
   dispatch( getPaginatedQuestion(setPageCount,currentPage.current, limit));
   

  }
  function changeLimit(){
    currentPage.current=1;
    console.log("hello")
    dispatch(getPaginatedQuestion(setPageCount, currentPage.current, limit));
  }

  return (
    <div className='question-list-page'>
    <div className="set-limit">
    <input type='number' placeholder="Limit" onChange={e=>setLimit(e.target.value)}/>

    
          <button className='' onClick={changeLimit}>Set Limit</button>
    </div>
 
    <div class="question-list">
   
    {questionList?.map((question)=>(

                 <Question key={question.id} question={question}/>

      ))}
    </div>

 
    <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            forcePage={currentPage.current-1}
          />
        


    
    </div>
  )
}

export default QuestionList
