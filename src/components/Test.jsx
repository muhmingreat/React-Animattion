import {motion} from 'framer-motion'
// import {useState} from 'react'
import './test.scss'
const Test = () => {
//  const [open, setOpen] = useState()

    const variants = {
        visible:{opacity:1, x:800, 
        //     transition:{
        // type:'spring',
        // stiffness:100,
        // damping:100}
    },
        hidden:{opacity:0},
    }
    
    const items = ['item1','item2','item3','item4']
    return (
        <div className='course'>
        <motion.ul>
            {items.map((item)=> {
                <motion.li  style={{color: 'white'}}
                key={item}>{item}</motion.li>

            })}

        </motion.ul>
    </div>
)
}
export default Test;