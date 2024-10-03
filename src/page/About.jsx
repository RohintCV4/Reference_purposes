// import React, { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required").min(4, "Minimum four characters are needed"),
    lastName: yup.string().required("Last Name is required").min(4, "Minimum four characters are needed"),
});



const About = () => {
    // const[data,setData] =useState({
    //     firstName:"",
    //     lastName:""
    // })


    // const handleChange =(e)=>{
    //     setData({
    //         ...data,[e.target.name]:e.target.value
    //     });
    // }
    const onSubmit = (formData) => {

        console.log(formData);
    }

    const {
        register, handleSubmit, formState: { errors }
    } = useForm({ resolver: yupResolver(schema), });


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" {...register("firstName")}
                    //  value={data.firstName} onChange={handleChange} 
                    // {...register("firstName", {
                    //                     required: true,
                    //                     minLength: 2
                    //                 })}
                    />
                    <p>{errors.firstName?.message}</p>


                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName"  {...register("lastName")}

                    // value={data.lastName} onChange={handleChange }
                    // {...register("lastName", {
                    //     required: true,
                    //     minLength: 2
                    // })} 
                    />
                    <p>{errors.lastName?.message}</p>
                    {/* {
            errors.firstName && errors.firstName.type === "required" && (<p className="errorMsg">FirstName is required.</p>)
        }
        {
            errors.lastName && errors.lastName.type === "required" && (<p className="errorMsg">LastName is required.</p>)
        }
         {
            errors.firstName && errors.firstName.type === "minLength" && (<p className="errorMsg">FirstName should have atleast more than 2 letters is required.</p>)
        }
         {
            errors.lastName && errors.lastName.type === "minLength" && (<p className="errorMsg">LastName should have atleast more than 2 letters is required.</p>)
        } */}


                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}
export default About