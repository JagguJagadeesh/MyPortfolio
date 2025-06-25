import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const schema = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters"),
  user_email: z.string().email("Invalid email address"),
  message: z.string().min(15, "Message must be at least 10 characters"),
});

const Contact = () => {
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const notifySuccess = () => toast.success("Message sent successfully 🚀", { position: "bottom-center" });
  const notifyFail = () => toast.error("Message failed. Try again.", { position: "bottom-center" });

  const sendEmail = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        notifySuccess();
        reset();
      }, notifyFail);
  };

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto backdrop-blur-md bg-white/70 dark:bg-zinc-950/70
 dark:bg-zinc-900 rounded-xl shadow-2xl p-8 border border-zinc-200 dark:border-zinc-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <form ref={formRef} onSubmit={handleSubmit(sendEmail)} className="space-y-5">
        <div>
          <label className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">Name</label>
          <input
            {...register("user_name")}
            className="w-full mt-2 px-4 py-3 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-[#7843E9]"
            placeholder="Your Name"
          />
          {errors.user_name && (
            <p className="text-sm text-red-500 mt-1">{errors.user_name.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Email</label>
          <input
            {...register("user_email")}
            className="w-full mt-2 px-4 py-3 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-[#7843E9]"
            placeholder="you@example.com"
          />
          {errors.user_email && (
            <p className="text-sm text-red-500 mt-1">{errors.user_email.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Message</label>
          <textarea
            {...register("message")}
            rows="5"
            className="w-full mt-2 px-4 py-3 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-[#7843E9]"
            placeholder="Your message..."
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>

        <input
          type="submit"
          value="Submit"
          className="cursor-pointer w-full py-3 text-white bg-violet-600 hover:bg-violet-700 rounded text-2xl dark:border-white"
        />
      </form>

      <ToastContainer />
    </motion.div>
  );
};

export default Contact;
