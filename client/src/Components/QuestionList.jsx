import React, { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Question from './Question'
import "./Question.css"
import { getPaginatedQuestion } from "../actions/question.js"
import { useDispatch, useSelector } from 'react-redux';
import 'react-loading-skeleton/dist/skeleton.css'
import QuestionSkeleton from './Skeleton/QuestionSkeleton';
const QuestionList = () => {
  
  let questionList = useSelector( (state) => state.questionsReducer );
  
  questionList = questionList.data;
  const dispatch = useDispatch();
  const currentPage = useRef();

  const [limit, setLimit] = useState(5);
  const [pageCount, setPageCount] = useState(1);


  useEffect(() => {
    currentPage.current = 1;
    dispatch(getPaginatedQuestion(setPageCount, currentPage.current, limit));
  }, [dispatch,limit]);


//pagination
  function handlePageClick(e) {
    currentPage.current = e.selected + 1;
    dispatch(getPaginatedQuestion(setPageCount, currentPage.current, limit));
  }

// function for change data limit per page
  function changeLimit() {
    currentPage.current = 1;
    dispatch(getPaginatedQuestion(setPageCount, currentPage.current, limit));
  }

  return (

    <div className='question-list-page'>
      <div className="set-limit">
        <input type='number' placeholder="Limit" onChange={e => setLimit(e.target.value)} />
        <button className='' onClick={changeLimit}>Set Limit</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {questionList === null? (
                <QuestionSkeleton/>

        ) : (

          <div className="question-list">


            {questionList?.map((question) => (

              <Question key={question.id} question={question} />

            ))}
          </div>
        )}
      </div>

      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
        onPageChange={handlePageClick}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        forcePage={currentPage.current - 1}
      />
    </div>
  )
}

export default QuestionList
