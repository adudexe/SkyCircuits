import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import {motion} from 'framer-motion'
import AuthModal from "../AuthModal/AuthModal";

const Navbar = () => {

    const [modalActive,setModalActive] = useState(false);
    const [sideMenu,setSideMenu] = useState(true);

    const activateModal = () => {
        console.log("The Modal is Active");
        setModalActive( prev => !prev );
    }
    const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const menuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25 },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};


  return (
    <>
     
        <div className='w-full z-10 mt-2 items-center'>
            <div className=' flex items-center justify-between  h-25'>
                <img src="/SkyCircuits.png" alt="" className='h-30 lg:h-50'/>
                <div className='hidden md:block '>
                    <ul className='flex gap-5 text-md transition-all'>
                        <a href="#home" className='hover:text-blue-400 hover:underline active:underline active:text-blue-500'>Home</a>
                        <a href="#product" className='hover:text-blue-400 hover:underline active:underline active:text-blue-500'>Products</a>
                        <a href="#aboutus" className='hover:text-blue-400 hover:underline active:underline active:text-blue-500'>About Us</a>
                    </ul>
                </div>
                <div className='hidden md:flex gap-1 lg:gap-5 items-center w-40 lg:w-70 '>
                    <FaCartShopping className='text-lg md:text-2xl cursor-pointer'/>
                    <button className='border-blue-400 text-blue-400 p-1 lg:px-6 lg:py-2 rounded-full hover:underline hover:text-blue-500 cursor-pointer active:text-blue-800' onClick={activateModal}>Login/SignUp</button>
                </div>
                <div className='block md:hidden w-15 sm:w-20 h-20 content-center'>
                    <RxHamburgerMenu  className='text-2xl sm:text-3xl curson-pointer' onClick={() => setSideMenu(prev => !prev)}/>
                </div>
            </div>
        </div>
        
       <AuthModal open={modalActive} onClose={activateModal}/> 

       {!sideMenu && (
        <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 md:hidden bg-black/40 backdrop-blur-sm"
            onClick={() => setSideMenu(true)}
        >
        <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 top-0 h-full w-4/5  p-6"
            onClick={(e) => e.stopPropagation()}
        >
        <div className="flex justify-end">
        <button
            className="text-white text-sm"
            onClick={() => setSideMenu(true)}
        >
            ✕ Close
        </button>
        </div>

        <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 flex flex-col gap-4"
        >
            <motion.a variants={itemVariants} href="#home"
            className="text-white  py-2 px-4 hover:underline hover:text-blue-400">
            Home
            </motion.a>

            <motion.a variants={itemVariants} href="#product"
            className="text-white  py-2 px-4 hover:underline hover:text-blue-400">
            Products
            </motion.a>

            <motion.a variants={itemVariants} href="#cart"
            className="text-white  py-2 px-4 hover:underline hover:text-blue-400">
            Cart <FaCartShopping className="inline ml-2" />
            </motion.a>

            <motion.a variants={itemVariants} href="#aboutus"
            className="text-white  py-2 px-4 hover:underline hover:text-blue-400">
            About Us
            </motion.a>
        </motion.ul>

        <motion.div
            variants={itemVariants}
            className="mt-10"
        >
            <button
            onClick={activateModal}
            className="w-full border-blue-400 text-blue-400 py-2 rounded-full hover:text-white hover:underline cursor-pointer active:text-blue-500 hover:text-blue-400 transition"
            >
                Login / Sign Up
            </button>
      </motion.div>
    </motion.div>
  </motion.div>
)}


    </> 
  )
}

export default Navbar
