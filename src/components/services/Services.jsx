import { useRef } from 'react';
import './services.scss'
import { motion,useInView} from 'framer-motion'

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,

        },
    },
};

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin:'-100px'}) 
    return (
        <motion.div className=
        'services' variants={variants} 
        initial='initial'
        //  animate='animate'
        ref={ref}
        // whileInView='animate' 
        animate={isInView && 'animate'}       
        >
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow
                    <br /> and move forword</p>
                    <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className='title'>
                    <img src="people.webp" alt="" />
                    <h1><motion.b whileHover={{color:'orange'}}>unique</motion.b> Ideas</h1>
                </div>
                <div className='title'>
                    <h1>
                        <motion.b whileHover={{color:'orange'}}>For Your </motion.b> Business
                    </h1>
                    <button>What we do</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}>
                    <h2>
                        Branding
                    </h2>
                    <p> Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Nesciunt quibusdam quisquam sit 
                        enim suscipit, excepturi ad
                         accusantium explicabo magni
                         tenetur quas est possimus culpa facilis
                          voluptate, nemo placeat rerum? Illo.</p>
                          <button>go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}>
                    <h2>
                        Branding
                    </h2>
                    <p> Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Nesciunt quibusdam quisquam sit 
                        enim suscipit, excepturi ad
                         accusantium explicabo magni
                         tenetur quas est possimus culpa facilis
                          voluptate, nemo placeat rerum? Illo.</p>
                          <button>go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}>
                    <h2>
                        Branding
                    </h2>
                    <p> Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Nesciunt quibusdam quisquam sit 
                        enim suscipit, excepturi ad
                         accusantium explicabo magni
                         tenetur quas est possimus culpa facilis
                          voluptate, nemo placeat rerum? Illo.</p>
                          <button>go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}>
                    <h2>
                        Branding
                    </h2>
                    <p> Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Nesciunt quibusdam quisquam sit 
                        enim suscipit, excepturi ad
                         accusantium explicabo magni
                         tenetur quas est possimus culpa facilis
                          voluptate, nemo placeat rerum? Illo.</p>
                          <button>go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services