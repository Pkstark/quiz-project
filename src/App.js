import React, {useState,} from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import styled, { theme } from 'styled-components';
import QuizOne from './Adddition/img.svg';
import QuizTwo from './Adddition/img1.svg';
import QuizThree from './Adddition/img2.svg';
import QuizFour from './Adddition/img3.svg';
import QuizFive from './Adddition/img4.svg';

import Start from './components/Start';
import Question from './components/Question';
import Answer  from './components/Answer';
import Results from './components/Results';
import quizData from './data/quiz.json' ;
import Login from './components/Login';

const App = () => {
  const [ step,  setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(3);
  }

  const quizStartHandler = () => {
    setStep(3);
  }

  const startQuiz = () => {
    setStep(2);
  }

  const ColumnRight = styled.div``;

  const Image = styled (motion.img)``;

  return (
<div className='pk'>
    <div className="container">  
    <ColumnRight>
      <Image className='bg  img-fluid' src={QuizOne} alt="quiz" 
        whileTap={{ scale : 1.5}}
        drag={true}
        dragConstraints={{left:0, right:100, top:0, bottom: 200}}
        initial={{opacity:0, y: -100}}
        animate={{opacity : 1, y : 0, transition : {duration : 1}}}
        
        />
      <Image className='bg1 img-fluid' src={QuizTwo} alt="quiz"
        whileTap={{ scale : 1.5}}
        drag={true}
        dragConstraints={{left:0, right:50, top:200, bottom: 0}}
        initial={{opacity:0, x:-100 }}
        animate={{opacity : 1, x : 0, transition : {duration : 1}}}

      />
      <Image className='bg2 img-fluid' src={QuizThree} alt="quiz"
        whileTap={{ scale : 1.5}}
        drag={true}
        dragConstraints={{left:0, right:0, top:0, bottom: 0}}
        initial={{opacity:0, y: 100}}
        animate={{opacity : 1, y : 3, transition : {duration : 1}}}
      
      />
      <Image className='bg3 img-fluid' src={QuizFour} alt="quiz"
      whileTap={{ scale : 1.5}}
      drag={true}
      dragConstraints={{left:50, right:50, top:100, bottom: 0}}
      initial={{opacity:0, y: 100}}
      animate={{opacity : 1, y : 0, transition : {duration : 1}}}
      />
      <Image className='bg4 img-fluid' src={QuizFive} alt="quiz"
        whileTap={{ scale : 1.5}}
        drag={true}
        dragConstraints={{left:0, right:100, top:0, bottom: 200}}
        initial={{opacity:0, x: 100}}
        animate={{opacity : 1, x : 0, transition : {duration : 1}}}
      
      />
    </ColumnRight>

      { step === 3 && <Question 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        names = "QuizApp"
        name={name}
        setName={setName}
      />}
      { step === 2 && <Start onQues={quizStartHandler}
      names = "QuizApp"
      name={name}
      setName={setName}
      />}

      {step === 4 && <Answer 
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={()=>setShowModel (true)}
        names = "QuizApp"
        name={name}
        setName={setName}
      />}

      {showModel && <Results 
        onClose={() => setShowModel (false)}
        results={answers}
        data={quizData.data}
        name={name}
        setName={setName}
      />}
      {step === 1 && <Login onQues1={startQuiz} name={name} setName={setName} setEmail={setEmail}/>}
    </div>
    </div>
  );
}

export default App;
