import {motion} from 'framer-motion'
// import{close} from '../../../assets/close.svg' 
const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={()=> setOpen(prev => !prev)}>
        <motion.p>close</motion.p>
        {/* <motion.img src={close} alt="" /> */}
        {/* <svg width='23' height='23' viewBox='0 0 23 23'>
        <motion.path strokeWidth='3' stroke='black' strokeLinecap='round'
        variant={{
            close:{d:"M 2 2.5 L 20 2.5"},
            open:{d: 'M 3 16.5 l 17 2.5' },
        }}/>
        <motion.path strokeWidth='3' stroke='black' strokeLinecap='round'/>
        <motion.path strokeWidth='3' stroke='black' strokeLinecap='round'/></svg> */}
        </button>
  )
}

export default ToggleButton