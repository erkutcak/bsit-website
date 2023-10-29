'use client';

import React from 'react'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useFormik } from "formik";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ContactUs = () => {

    const formRef = useRef();
    const [loading, setLoading] = useState(false)

    const formSchema = yup.object().shape({
        name: yup.string().required("Please enter a name"),
        email: yup.string().email("Invalid e-mail").required("e-mail is required"),
        message: yup.string().required("A message is required"),
    });

    const formik = useFormik({
        initialValues: {
        name: "",
        email: "",
        message: "",
        },
        validationSchema: formSchema,
        onSubmit: (values, helpers) => {
        setLoading(true)
        emailjs.sendForm(
            'service_v1xjspi', 
            'template_58uf5qg',
            formRef.current,
            "vGwpm4GHU_lu5kQnO"
            )
            .then((result) => {
            setLoading(false)
            console.log(result.text);
            toast('📨 Thank you for your message!', {
                hideProgressBar: false,
                autoClose: 4600,
                theme: "dark",
            });
            }, (error) => {
            setLoading(false);
            console.log(error);
            toast('⛔ Oops! Something went wrong.', {
                hideProgressBar: false,
                autoClose: 4600,
                type: "error",
                theme: "dark",
            });
            })
            helpers.resetForm();
        },
    });

    return(
        <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center bg-white/[.8] m-4 px-4 py-6 rounded-lg w-full md:w-[55%]'>
                <ToastContainer/>
                <h1 className='font-bitter font-black text-xl text-[#15003F]'>Contact Us</h1>
                <form ref={formRef} onSubmit={formik.handleSubmit} className='mt-4 flex flex-col gap-8'>
                <label className="flex flex-col">
                    <span className='font-bitter font-black text-[#15003F] text-medium mb-4'>Your Name</span>
                    <input type="text" name='name' id='name' required value={formik.values.name} onChange={formik.handleChange} placeholder='Your Name' className='bg-white py-4 px-6 placeholder:font-black font-black rounded-lg outlined-none border-none text-sm' />
                </label>
                <label className="flex flex-col">
                    <span className='font-bitter font-black text-[#15003F] text-medium mb-4'>Your Email</span>
                    <input type="email" name='email' id='email' required value={formik.values.email} onChange={formik.handleChange} placeholder='E-mail' className='bg-white py-4 px-6 placeholder:font-black font-black rounded-lg outlined-none border-none text-sm' />
                </label>
                <label className="flex flex-col">
                    <span className='font-bitter font-black text-medium text-[#15003F] mb-4'>Your Message</span>
                    <textarea rows='7' name='message' id='message' required value={formik.values.message} onChange={formik.handleChange} placeholder='What do you want to say?' className='bg-white py-4 px-6 placeholder:font-black font-black rounded-lg outlined-none border-none text-sm' />
                </label>

                <button type="submit" className='bg-[#A67DB8] py-3 px-8 outline-none text-white font-bold shadow-md shadow-primary rounded-xl'>
                    {loading ? "Sending..." : "Send"}
                </button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs