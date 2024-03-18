import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import './sidebar.scss'
import {motion} from 'framer-motion'
import {useState} from 'react'
const Sidebar = () => {
    const [open,setOpen] = useState(false)

    const variants = {
        open:{
         clipPath:'circle(1200px at 50px 50px)',   
        },
        close:{
            clipPath:'circle(30px at 50px 50px)',
            transtion:{
                delay:0.5,
                type:'spring',
                stiffness:400,
                damping:400,
            }
        },
    }

  return (
    <motion.div className='sidebar'
     animate={open ? "open" : "close"}>
    <motion.div className="bg" variants={variants}>
        <Links/>
        </motion.div> 
        <ToggleButton setOpen={setOpen}/>   
    </motion.div>
  )
}

export default Sidebar