import React, { useState , useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


const Question = ({data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep, names, name }) => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();

    const nextClickHandler = (e) => {
        if(selected === ''){
            return setError('Please Select the Answer')
        }
        onAnswerUpdate(prevState => [...prevState, {qus : data.question, ans : selected }]);
        setSelected('');
        if(activeQuestion < numberOfQuestions - 1 ){
            onSetActiveQuestion(activeQuestion + 1);
        }else{
            onSetStep (4);
        }
    }

    useEffect (() => {
        const checkedIn = radiosWrapper.current.querySelector('input:checked');
        if(checkedIn) {
            checkedIn.checked = false;
        }
    },[data]);

    const changeHandler = (e) => {
        setSelected(e.target.value);
        
        if (error) {
            setError ("");
        }
    }

    const fadeLeft = {
        hidden:{opacity : 0, x:-100},
        visible : { opacity: 1, x: 0}
      }

      const fadeRight = {
        hidden:{opacity : 0, x:100},
        visible : { opacity: 1, x: 0}
      }

    return(
        <>
        <motion.p 
        variants = {fadeRight}
        initial = 'hidden'
        animate = 'visible'
        transition = {{duration : 1}}

        className="add">{names}</motion.p>
         <motion.p 
         variants = {fadeRight}
         initial = 'hidden'
         animate = 'visible'
         transition = {{duration : 1}}

         className="username">Welcome {name}</motion.p><br/><br/>
            <motion.div 
            variants = {fadeLeft}
            initial = 'hidden'
            animate = 'visible'
            transition = {{duration : 1}}
      
            className="style">
                <h4 className="text-center style4">{data.question}</h4>
                <hr className='style5'/>
                <div ref={radiosWrapper}>
                    {data.choices.map((choice, i) => (
                        <label className="style1" key={i}>
                            <motion.input 
                            whileHover={{ scale: 1}} 
                            type="radio" name="answer" value={choice} onChange={changeHandler}/>&nbsp;&nbsp;&nbsp;{choice}
                        </label>
                    ))}
                </div><br/>
                {error && <p className="text-center style3">{error}</p>}<br/>
                <motion.button 
                whileHover={{ scale: 1.05}}
                whileTap={{scale : 0.95, backgroundColor: 'grey', border: 'none', color : 'blue'}}
                initial={{opacity: 0}}
                animate={{opacity: 1, transition : { duration: 1.5}}}
              
                className="style2" onClick={nextClickHandler}>Next</motion.button>
            </motion.div>
        </>
    );
}

export default Question;