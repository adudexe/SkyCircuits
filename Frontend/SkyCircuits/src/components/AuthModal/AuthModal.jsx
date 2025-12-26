import { motion, AnimatePresence, animate } from "framer-motion";
import { useState } from "react";

const AuthModal = ({ open, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const slideVariants = {
    initial:(direction) => ({
      x:direction > 0 ? 50  : -50,
      opacity:0,
    }),
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:0.3,
        ease:'easeOut',
      },
    },
    exit:(direction) => ({
      x:direction > 0 ? -50 : 50,
      opacity:0,
      transition:{
        duration:0.2,
        ease:"easeIn",
      },
    }),
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="relative w-[90%] max-w-md overflow-hidden rounded-xl bg-white p-6">
              
              <AnimatePresence mode="wait" custom={isSignUp ? 1 : -1}>
                {!isSignUp ? (
                  <motion.div
                    key="login"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={1}
                  >
                    <h2 className="text-xl font-semibold mb-4">Login..</h2>
                    <input className="w-full border p-2 mb-3 rounded" placeholder="Email" />
                    <input className="w-full border p-2 mb-3 rounded" type="password" placeholder="Password" />

                    <button className="w-full bg-blue-500 text-white py-2 rounded">
                      Login
                    </button>

                    <p className="mt-4 text-sm text-center">
                      No account?
                      <button
                        onClick={() => setIsSignUp(true)}
                        className="ml-1 text-blue-500 underline"
                      >
                        Sign up
                      </button>
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={-1}
                  >
                    <h2 className="text-xl font-semibold mb-4">Sign Up..</h2>
                    <input className="w-full border p-2 mb-3 rounded" placeholder="Name" />
                    <input className="w-full border p-2 mb-3 rounded" placeholder="Email" />
                    <input className="w-full border p-2 mb-3 rounded" type="password" placeholder="Password" />

                    <button className="w-full bg-blue-500 text-white py-2 rounded">
                      Create Account
                    </button>

                    <p className="mt-4 text-sm text-center">
                      Already have an account?
                      <button
                        onClick={() => setIsSignUp(false)}
                        className="ml-1 text-blue-500 underline"
                      >
                        Login
                      </button>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close */}
              <button
                className="absolute top-3 right-3 text-xl cursor-pointer"
                onClick={onClose}
              >
                ✕
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal