import React, { useRef, useState } from 'react'
import'./Quiz.css'
import { Data } from '../assets/Data';
import { data } from 'react-router-dom';

const Quiz = () => {

    let [index,setindex] = useState(0) ;
    let [question,setquestion]= useState(Data[index]);
    let[lock,setlock]=useState(false);
    let Option1= useRef(null);
    let Option2= useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);
    let[score,setscore]=useState(0);
    let [result,setresult]= useState(false);

    let Option_array=[Option1,Option2,Option3,Option4];

const checkans = (e, ans) => {

    if(lock===false){
         if (question.ans === ans) {
    e.target.classList.add("correct");
    setlock(true)
    setscore(prev=>prev+1);
  } else {
    e.target.classList.add("incorrect");
    setlock(true)
    Option_array[question.ans-1].current.classList.add("correct"); 
  }
    }
 
};

const next=()=>{

    if(lock===true){
        if(index===Data.length-1){
            setresult(true);
            return 0;
        }
        setindex(++index);
        setquestion(Data[index])
        setlock(false)
        Option_array.map((Option)=>{
            Option.current.classList.remove("correct");
             Option.current.classList.remove("incorrect");
             return null;
        })
    }

}

const reset=()=>{
    setindex(0);
    setquestion(Data[0]);
    setscore(0);
    setlock(false);
    setresult(false);
}

     return (
    <>
    <div className="container">
        <h1>Quiz</h1>
        <hr />


        {result?<>  </>:<>
        
            <h2> {index+1}.{question.question}</h2>  
        <ul>
            <li  ref={Option1}   onClick={(e)=>{checkans(e,1)}}>{question.Option1}</li>
            <li ref={Option2}    onClick={(e)=>{checkans(e,2)}}>{question.Option2}</li>
            <li  ref={Option3}    onClick={(e)=>{checkans(e,3)}}>{question.Option3}</li>
            <li  ref={Option4}   onClick={(e)=>{checkans(e,4)}}>{question.Option4}</li>
        </ul>
        <button onClick={next}  >Next</button>

        <div className="index">{index+1} of {Data.length} questions</div>
        
        </>}



      {result?<>
       <h2> you score {score} out of {Data.length}  </h2>

        <button onClick={reset}  >reset</button>
    
      </>:<></>}

    </div>
    
    </>
  )
}

export default Quiz



// import React, { useRef, useState } from 'react'
// import './Quiz.css'
// import { Data } from '../assets/Data';

// const Quiz = () => {
//   let [index, setindex] = useState(0);
//   let [lock, setlock] = useState(false);
//   let [score, setscore] = useState(0);
//   let [result, setresult] = useState(false);
//   let [quizStarted, setQuizStarted] = useState(false); // 🔹 new state

//   let Option1 = useRef(null);
//   let Option2 = useRef(null);
//   let Option3 = useRef(null);
//   let Option4 = useRef(null);

//   let Option_array = [Option1, Option2, Option3, Option4];

//   const question = Data[index]; // derive question

//   const checkans = (e, ans) => {
//     if (lock === false) {
//       if (question.ans === ans) {
//         e.target.classList.add("correct");
//         setlock(true);
//         setscore(prev => prev + 1);
//       } else {
//         e.target.classList.add("incorrect");
//         setlock(true);
//         Option_array[question.ans - 1].current.classList.add("correct");
//       }
//     }
//   };

//   const next = () => {
//     if (lock === true) {
//       if (index === Data.length - 1) {
//         setresult(true);
//         return;
//       }
//       setindex(prev => prev + 1);
//       setlock(false);
//       Option_array.forEach((Option) => {
//         Option.current.classList.remove("correct");
//         Option.current.classList.remove("incorrect");
//       });
//     }
//   };

//   const reset = () => {
//     setindex(0);
//     setscore(0);
//     setlock(false);
//     setresult(false);
//     setQuizStarted(false); // go back to start page
//   };

//   return (
//     <div className="container">
//       <h1>Quiz</h1>
//       <hr />

//       {/* 🔹 Start Page */}
//       {!quizStarted ? (
//         <div className="start-page">
//           <h2>Welcome to the Quiz!</h2>
//           <p>Click below to start.</p>
//           <button onClick={() => setQuizStarted(true)}>Start Quiz</button>
//         </div>
//       ) : (
//         <>
//           {/* Quiz Section */}
//           {result ? (
//             <>
//               <h2>You scored {score} out of {Data.length}</h2>
//               <button onClick={reset}>Reset</button>
//             </>
//           ) : (
//             <>
//               <h2>{index + 1}. {question.question}</h2>
//               <ul>
//                 <li ref={Option1} onClick={(e) => checkans(e, 1)}>{question.Option1}</li>
//                 <li ref={Option2} onClick={(e) => checkans(e, 2)}>{question.Option2}</li>
//                 <li ref={Option3} onClick={(e) => checkans(e, 3)}>{question.Option3}</li>
//                 <li ref={Option4} onClick={(e) => checkans(e, 4)}>{question.Option4}</li>
//               </ul>
//               <button onClick={next}>Next</button>
//               <div className="index">{index + 1} of {Data.length} questions</div>
//             </>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Quiz;
