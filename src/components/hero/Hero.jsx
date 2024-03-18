 import {motion} from 'framer-motion'
import './hero.scss'
const textVariant = {
  initial:{
    x:-500,
    opacity:0,
  },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        staggerChildren:0.1
    }
  },
  scrollBotton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}
const slideVariant = {
  initial:{
    x:0,

  },
    animate:{
      x:'-220%',
      transition:{
        duration:20,
        repeat:Infinity,
        repeatType:'mirror'
    
    }
  },
  
}



const Hero = () => {
  return (

    <div className='hero' >
      <div className="wrapper">
      <motion.div className="textContainer" 
      variants={textVariant} initial='initial' animate='animate' >
        <motion.h2 variants={textVariant}> Muhmin Soliu</motion.h2>
        <motion.h1 variants={textVariant}> Web Developer and Ui Designer</motion.h1>
        <motion.div variants={textVariant} className="buttons">
          <motion.button varianst={textVariant}>See the Latest work</motion.button>
          <motion.button variants={textVariant}> Contact Me</motion.button>
      </motion.div>
        <motion.img  variants={textVariant} animate='scrollBotton' src="/scroll.png" alt="" />
      </motion.div>
      </div>
      <motion.div variants={slideVariant}className="sliderText" initial='initial'
      animate='animate'>
        Writer content Cretor Infuluencer 
        </motion.div>
       <div className='img-container'>
      <img src="hero.png" alt="" />
      </div>
    </div>
    
  )
}

export default Hero