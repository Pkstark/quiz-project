import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const Answer = ({results, data, onReset, onAnswersCheck, names, name}) => {

    const [correctAnswers, setCorrectAnswers] = useState(0)

    useEffect (()=>{
        let correct = 0;
        results.forEach((result, index) => {
            if(result.ans === data[index].answer) {
                correct ++;
            }
        });
        setCorrectAnswers(correct);
    }, [data])

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

        className="username">Welcome {name}</motion.p>
            <motion.div 
            variants = {fadeLeft}
            initial = 'hidden'
            animate = 'visible'
            transition = {{duration : 1}}            
            
            className='design'>
                <p className='text-center'><span className='design3'>Your Result</span></p><hr className='des3'/><br/>
                <h4><b className='design4'>Correct Answers : &nbsp;</b> <b className='design7'>{correctAnswers} of {data.length} </b></h4>
                <h4><b className='design5'>Percentage : &nbsp;</b><b className='design7'> {Math.floor((correctAnswers / data.length) * 100)} % </b> </h4><br/><hr className='des3'/>
                
                
                <motion.button 
                  whileHover={{ scale: 1.05}}
                  whileTap={{scale : 0.95, backgroundColor: 'pink', border: 'none', color : 'blue'}}
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition : { duration: 1.5}}}
                
                className='design2' onClick={onAnswersCheck}><span className='design1'>View Answer</span></motion.button>&nbsp;&nbsp;
                <motion.button 
                  whileHover={{ scale: 1.05}}
                  whileTap={{scale : 0.95, backgroundColor: 'pink', border: 'none', color : 'blue'}}
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition : { duration: 1.5}}}
                
                className='design8' onClick={onReset} >Try Again</motion.button>
            </motion.div>
        </>
    );
}

export default Answer;