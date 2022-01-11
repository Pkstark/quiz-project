import React from 'react';
import { motion } from 'framer-motion';


const Start = ({onQues, names,name}) => {

    const fadeLeft = {
        hidden:{opacity : 0, x:-100},
        visible : { opacity: 1, x: 0}
      }
      

    return(
        <>
            <motion.p 
            variants = {fadeLeft}
            initial = 'hidden'
            animate = 'visible'
            transition = {{duration : 1}}
            
            className="add">{names}</motion.p>
            <motion.p 
            variants = {fadeLeft}
            initial = 'hidden'
            animate = 'visible'
            transition = {{duration : 1}}
            
            className="username">Welcome {name}</motion.p>
            <motion.div
            variants = {fadeLeft}
            initial = 'hidden'
            animate = 'visible'
            transition = {{duration : 1}}
            
            className="head">
                <h5 className='head2'>Start The Quiz</h5><br/><hr className='des3'/>
                <p className='head3'>Good Luck !!!</p><hr className='des3'/><br/>
                <motion.button
                whileHover={{ scale: 1.05}}
                whileTap={{scale : 0.95, backgroundColor: 'grey', border: 'none', color : 'blue'}}
                initial={{opacity: 0}}
                animate={{opacity: 1, transition : { duration: 1.5}}}
              
                className="head1" onClick={onQues}><b className="bd">Start</b></motion.button>
            </motion.div>
            </>
    );
}

export default Start;