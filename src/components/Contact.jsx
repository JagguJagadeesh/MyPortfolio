import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";

const schema = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters"),
  user_email: z.string().email("Invalid email address"),
  message: z.string().min(15, "Message must be at least 15 characters"),
});

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const notifySuccess = () => toast.success("Message sent successfully! 🚀", { 
    position: window.innerWidth < 768 ? "top-center" : "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
  
  const notifyFail = () => toast.error("Message failed. Please try again.", { 
    position: window.innerWidth < 768 ? "top-center" : "bottom-center",
    autoClose: 4000,
  });

  const sendEmail = async () => {
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      notifySuccess();
      reset();
    } catch (error) {
      notifyFail();
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = `
    w-full 
    px-3 py-3 sm:px-4 sm:py-3 md:px-4 md:py-4
    text-sm sm:text-base
    bg-zinc-50 dark:bg-zinc-800 
    border border-zinc-200 dark:border-zinc-600 
    rounded-lg 
    text-zinc-900 dark:text-white 
    placeholder:text-zinc-500 dark:placeholder:text-zinc-400
    focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent 
    transition-all duration-300
    touch-manipulation
  `;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-zinc-200 dark:border-zinc-700 p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800 dark:text-white mb-2">
            Let&nbsp;s Work Together
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Got a project in mind? Drop me a message!
          </p>
        </motion.div>

        <form ref={formRef} onSubmit={handleSubmit(sendEmail)} className="space-y-4 sm:space-y-6">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <FiUser className="text-violet-600 text-sm sm:text-base" />
                <span>Name</span>
              </label>
              <input
                {...register("user_name")}
                className={inputStyle}
                placeholder="Your name"
                autoComplete="name"
              />
              {errors.user_name && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-xs sm:text-sm text-red-500"
                >
                  {errors.user_name.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <FiMail className="text-violet-600 text-sm sm:text-base" />
                <span>Email</span>
              </label>
              <input
                {...register("user_email")}
                className={inputStyle}
                placeholder="your@email.com"
                autoComplete="email"
                type="email"
              />
              {errors.user_email && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-xs sm:text-sm text-red-500"
                >
                  {errors.user_email.message}
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              <FiMessageSquare className="text-violet-600 text-sm sm:text-base" />
              <span>Message</span>
            </label>
            <textarea
              {...register("message")}
              rows={window.innerWidth < 640 ? "4" : "5"}
              className={`${inputStyle} resize-none min-h-[100px] sm:min-h-[120px]`}
              placeholder="Tell me about your project, ideas, or just say hello..."
            />
            {errors.message && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="text-xs sm:text-sm text-red-500"
              >
                {errors.message.message}
              </motion.p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-2 sm:pt-4"
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                w-full 
                py-3 sm:py-4 
                px-4 sm:px-6 
                text-sm sm:text-base font-semibold
                bg-gradient-to-r from-violet-600 to-purple-600 
                hover:from-violet-700 hover:to-purple-700 
                text-white 
                rounded-lg sm:rounded-xl 
                shadow-lg hover:shadow-xl 
                transition-all duration-300 
                disabled:opacity-50 disabled:cursor-not-allowed 
                flex items-center justify-center gap-2 sm:gap-3
                touch-manipulation
                min-h-[48px] sm:min-h-[52px]
              "
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FiSend className="text-sm sm:text-base" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </motion.div>
        </form>

        {/* Additional Info for Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 text-center sm:hidden"
        >
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Usually respond within 24 hours
          </p>
        </motion.div>
      </motion.div>

      <ToastContainer 
        position={window.innerWidth < 768 ? "top-center" : "bottom-center"}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          fontSize: window.innerWidth < 640 ? '14px' : '16px',
          borderRadius: '12px',
        }}
      />
    </div>
  );
};

export default Contact;
