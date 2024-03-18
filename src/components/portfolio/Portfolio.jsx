import { useRef } from 'react';
import './portfolio.scss';
import {motion, useScroll, useSpring,useTransform} from 'framer-motion'

const items=[
    {
            id:1, title:'React commerce',
            img:'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQaML4nz1GoCOWzNpV6zImsgKjF4TGIprIyxsEv9hwTouMnjYVuLzdd73zTXQuWHYZcQXX06NhuWocnocLqps4',
            desc:`Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Nesciunt quibusdam quisquam sit 
                                    enim suscipit, excepturi ad
                                     accusantium explicabo magni
                                     tenetur quas est possimus culpa facilis
                                      voluptate, nemo placeat rerum? Illo.`
        },

    {
            id:2, title:'Music App',
            img:'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQaML4nz1GoCOWzNpV6zImsgKjF4TGIprIyxsEv9hwTouMnjYVuLzdd73zTXQuWHYZcQXX06NhuWocnocLqps4',
            desc:`Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Nesciunt quibusdam quisquam sit 
                                    enim suscipit, excepturi ad
                                     accusantium explicabo magni
                                     tenetur quas est possimus culpa facilis
                                      voluptate, nemo placeat rerum? Illo.`
        },

    {
            id:3, title:'Next.js commerce',
            img:'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQaML4nz1GoCOWzNpV6zImsgKjF4TGIprIyxsEv9hwTouMnjYVuLzdd73zTXQuWHYZcQXX06NhuWocnocLqps4',
            desc:`Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Nesciunt quibusdam quisquam sit 
                                    enim suscipit, excepturi ad
                                     accusantium explicabo magni
                                     tenetur quas est possimus culpa facilis
                                      voluptate, nemo placeat rerum? Illo.`
        },
    {
            id:4, title:'Vanila JS commerce',
            img:'',
            desc:`Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Nesciunt quibusdam quisquam sit 
                                    enim suscipit, excepturi ad
                                     accusantium explicabo magni
                                     tenetur quas est possimus culpa facilis
                                      voluptate, nemo placeat rerum? Illo.`
        },
]


const Single = ({item}) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['start start' ,'end start']
    })
    const y = useTransform(scrollYProgress,[0,1],[300, -300 ] )

   return <section ref={ref} 
   
   >
    <div className="container">
        <div className="wrapper">
            <div className="imgContainer" ref={ref}>
        <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{y}}
        >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button> See Demo</button>
            </motion.div>
        </div>
    </div>
   </section>;
};

const Portfolio = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['end end', 'start start']
    })
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })

  return (
    <div className='portfolio' ref={ref}>

        <div className="progress">
            <h1>Feature Work</h1>
            
            <motion.div className="progressBar"
            style={{scaleX}}
             ></motion.div>
            </div>
     {items.map((item)=> (
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio