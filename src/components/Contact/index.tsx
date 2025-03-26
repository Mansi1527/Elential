'use client'
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/background";
import { Schema } from "./yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";  // Import EmailJS
import { countriesWithCurrency, websiteOptions, companySizeOptions, companyTypeOptions } from "@/data/countries";


const serviceID = "service_2c1ybdc";      // Replace with your EmailJS service ID
const templateID = "template_y0doqwp";    // Replace with your EmailJS template ID
const userID = "qHFZRl946H7NgG5Q8";

const formatLabel = (name: string) => {
    const formattedName = name.replace(/([A-Z])/g, " $1").trim();
    return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
};

const InputField = ({ name, control, type = "text", errors, placeholder, prefix }: any) => (
    <div className="flex flex-col space-y-1 w-full">
        <label className="text-white font-medium">{formatLabel(name)}</label>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <div className="relative w-full">
                    {prefix && <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white">{prefix}</span>}
                    <input
                        {...field}
                        name={name}  // ✅ Ensure name is included
                        type={type}
                        placeholder={placeholder}
                        className={`w-full p-2 text-white placeholder-gray-400 border border-gray-600 rounded-md outline-none bg-transparent pl-${prefix ? '8' : '2'}`}
                    />
                </div>
            )}
        />
        {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
    </div>
);


const SelectField = ({ name, control, options, errors, onChange }: any) => (
    <div className="flex flex-col space-y-1 w-full">
        <label className="text-white font-medium">{formatLabel(name)}</label>
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange: fieldOnChange, value } }) => (
                <select
                    name={name}  // ✅ Ensure name is included
                    value={value}
                    onChange={(e) => {
                        fieldOnChange(e.target.value);
                        if (onChange) onChange(e.target.value);
                    }}
                    className="w-full p-2 text-white border border-gray-600 rounded-md outline-none bg-transparent"
                >
                    <option value="" className="text-white">
                        Select {formatLabel(name)}
                    </option>
                    {options.map((option: { country: string }) => (
                        <option key={option.country} value={option.country} className="text-black">
                            {option.country}
                        </option>
                    ))}
                </select>
            )}
        />
        {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
    </div>
);



export const Contact = () => {
    const [thankuVisible, setThankuVisible] = useState(false)
    const formRef = useRef(null);
    const { control, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(Schema),
        mode: "onBlur",
        defaultValues: {
            country: "India",
            budget: 10000,
            websiteFor: "self",
            companySize: ""
        },


    });

    const websiteFor = watch("websiteFor");

    const [selectedCurrency, setSelectedCurrency] = useState("₹");

    const handleCountryChange = (selectedCountry: string) => {
        const currencyObj = countriesWithCurrency.find(item => item.country === selectedCountry);
        setSelectedCurrency(currencyObj ? currencyObj.currency : "");
    };

    const onSubmit = (data: any) => {
       
        const emailData = {
            representativeName: data.representativeName,
            companyName: data.companyName || "N/A",
            companySize: data.companySize || "N/A",
            companyType: data.companyType || "N/A",
            websiteType: data.websiteType,
            websiteFor: data.websiteFor,
            budget: `${selectedCurrency}${data.budget}`,
            contactNumber: data.contactNumber,
            country: data.country,
        };

        emailjs
            .send(serviceID, templateID, emailData, userID)
            .then(
                ()=>setThankuVisible(true),
                (error) => alert("Failed to send message: " + error.text)
            );
            
    };


    return (
        <div id="contactus" className="bg-black min-h-screen mt-32  py-32  md:py-32 px-5 md:px-10 w-full flex items-center justify-center">
            <WavyBackground>
                {!thankuVisible &&
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-transparent py-6 md:p-6 pb-10 rounded-lg md:gap-10 w-full max-w-screen flex flex-col md:flex-row md:px-10 md:border border-gray-300"
                    >
                        <div className="flex flex-col justify-center items-center md:w-1/2 text-center md:text-left">
                            <h1 className="text-white md:text-5xl text-3xl">
                                Let's level up your brand, together
                            </h1>
                            <p className="text-gray-200 mt-5">
                                You can reach us anytime at <span className="font-semibold">contact.elential@gmail.com</span>
                            </p>
                        </div>

                        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-2 mt-10 w-full flex flex-col justify-center items-center md:w-1/2">
                            {/* <h1 className="text-white text-xl text-center md:hidden">Contact Us</h1> */}
                            <InputField name="representativeName" control={control} placeholder="Enter Your Name" errors={errors} />
                            <SelectField name="websiteFor" control={control} options={[
                                { country: "self", label: "For Myself" },
                                { country: "company", label: "For My Company" }
                            ]} errors={errors} />
                            {websiteFor === "company" && <InputField name="companyName" control={control} placeholder="Company Name" errors={errors} />}
                            {websiteFor === "company" && <div className="flex flex-col md:flex-row w-full gap-2">
                                <SelectField name="companySize" control={control} options={companySizeOptions} errors={errors} />
                                <SelectField name="companyType" control={control} options={companyTypeOptions} errors={errors} />
                            </div>}
                            <SelectField name="websiteType" control={control} options={websiteOptions} errors={errors} />
                            <SelectField name="country" control={control} options={countriesWithCurrency} errors={errors} onChange={handleCountryChange} />
                            <InputField name="budget" control={control} type="number" placeholder="Budget" errors={errors} prefix={selectedCurrency} />
                            <InputField name="contactNumber" control={control} type="tel" placeholder="Primary Contact Number (10 Digits)" errors={errors} />

                            <motion.button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                            >
                                Submit
                            </motion.button>
                        </form>
                    </motion.div>}
                {thankuVisible &&
                    <motion.div
                    
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-transparent flex flex-col justify-center items-center text-white"
                        
                    >
                        <h1 className="md:text-5xl text-2xl mb-5 text-center">
                            Thank You for choosing Elential
                        </h1>
                        <p className="md:text-3xl text-xl">We'll reach out to you soon!</p>
                    </motion.div>}
            </WavyBackground>
        </div>
    );
};
