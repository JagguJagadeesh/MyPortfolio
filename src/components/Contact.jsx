import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Contact() {
    const form = useRef();

    const successNotify = () => {
        toast.success("Successfully Message sent!", {
            position: "bottom-center",
            autoClose: 4000,
            icon: "🚀",
          });          
    }
    const errorNotify = () => {
        toast.error("Failed to send the message. Please try again.", {
            position: "bottom-center",
            autoClose: 4000,
          });         
    }

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs
          .sendForm('service_wn070bt', 'template_t7w161d', form.current, {
            publicKey: 'F8hZ0-uptWQ0xoiKv',
          })
          .then(
            () => {
                successNotify();
            },
            (error) => {
                errorNotify();
            },
          );
      };

  return (
    <div className="lg:w-[48rem] md:w-[38rem] max-[490px]:w-[20rem] p-18 bg-white rounded-2xl shadow-2xl">
        <form ref={form} onSubmit={sendEmail} className=" p-10 gap-4 flex flex-col">
        <label  className="text-sm font-semibold">Name :</label>
        <input type="text" name='user_name' placeholder="Enter Your Name"  className=" px-10 py-4 rounded-md bg-slate-100"/><br />
        <label  className="text-sm font-semibold">Gmail :</label>
        <input type="text" name='user_email' placeholder="Enter Your Gmail" className=" px-10 py-4 rounded-md bg-slate-100" /><br />
        <label htmlFor="message" className="text-sm font-semibold">Massage :</label>
        <textarea placeholder="Enter Your Message" name='message' className="p-4 rounded-md bg-slate-100" rows={8} ></textarea><br />
        <input type="submit" value="Submit" className=" cursor-pointer rounded-lg border-black border-2 border-solid bg-[#7843E9] hover:bg-[#ae7eff] text-white py-4 text-xl" />
        </form>
        <ToastContainer/>
    </div>
  )
}

export default Contact