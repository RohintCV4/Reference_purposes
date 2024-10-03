import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Label from '../components/Label';
import Input from '../components/Input';
import { Icon } from '@iconify/react';
import { useForm, Controller } from 'react-hook-form';

const API_BASE_URL = 'https://66d08599181d059277deec95.mockapi.io/api/users/userlist';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { control, handleSubmit, reset, formState: { errors }, setError } = useForm();
    const [error, setErrorState] = useState('');
    const [success, setSuccess] = useState('');
    const [originalData, setOriginalData] = useState(null); 

    const fields = [
        { name: "name", label: "Full Name", type: "text", placeholder: "Enter Full Name", validation: { required: "Full Name is required" } },
        { name: "Age", label: "Age", type: "text", placeholder: "Enter Age", validation: { required: "Age is required", pattern: { value: /^[0-9]+$/, message: "Age must be a number" } } },
        { name: "phoneNumber", label: "Phone Number", type: "text", placeholder: "Enter Phone Number", validation: { required: "Phone Number is required" } },
        { name: "Address", label: "Address", type: "text", placeholder: "Enter Address", validation: { required: "Address is required" } },
        { name: "Designation", label: "Designation", type: "text", placeholder: "Enter Designation", validation: { required: "Designation is required" } },
        { name: "Experience", label: "Experience", type: "text", placeholder: "Enter Experience", validation: { required: "Experience is required" } },
        { name: "Company", label: "Company", type: "text", placeholder: "Enter Company", validation: { required: "Company is required" } },
        { name: "email", label: "Email", type: "email", placeholder: "Enter Email", validation: { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } } },
        { name: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"], validation: { required: "Gender is required" } }
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const response = await axios.get(`${API_BASE_URL}/${id}`);
                    const user = response.data;
                    setOriginalData(user); 
                    reset(user);  
                } else {
                    setErrorState("ID doesn't exist");
                }
            } catch (error) {
                setErrorState('ID is not present');
            }
        };
        fetchData();
    }, [id, reset]);
    const onSubmit = async (data) => {
        if (!id) {
            setErrorState("ID is missing. Cannot update user data.");
            return;
        }

        if (!originalData) {
            setErrorState("Original data is not available.");
            return;
        }

        const updatedData = Object.keys(data).reduce((acc, key) => {
            if (data[key] !== originalData[key]) {
                acc[key] = data[key];
            }
            return acc;
        }, {});

        if (Object.keys(updatedData).length === 0) {
            setErrorState("No fields were updated.");
            return;
        }

        try {
            await axios.put(`${API_BASE_URL}/${id}`, updatedData);
            setSuccess('User updated successfully.');
        } catch (error) {
            if (error.response) {
                setErrorState("Server error.");
            } else if (error.request) {
                setErrorState("Network error. Please check your connection.");
            } else {
                setErrorState("An error occurred. Please try again.");
            }
        }
    };

    const handleClear = () => {
        reset();
        setErrorState("");
        setSuccess("");
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-start ">
                <div className='d-inline-flex mb-4 mt-4'>
                    <Icon className='align-self-center me-2 ' icon="mingcute:arrow-left-line" style={{ fontSize: '30px' }} onClick={() => navigate("/")} />
                    <h2 className=" align-self-center">Update User</h2>
                </div>
            
                <div className="col-md-8  bg-light p-4 rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {fields.map((field, index) => (
                            <div className="row mb-3 align-items-center" key={index}>
                                <div className="col-sm-4 fw-bold">
                                    <Label htmlFor={field.name}>{field.label}</Label>
                                </div>
                                <div className="col-sm-8">
                                    <Controller
                                        name={field.name}
                                        control={control}
                                        defaultValue=""
                                        rules={field.validation}
                                        render={({ field: controllerField }) =>
                                            field.type === 'select' ? (
                                                <select
                                                    id={field.name}
                                                    {...controllerField}
                                                    className="form-control"
                                                >
                                                    {field.options.map((option, idx) => (
                                                        <option key={idx} value={option}>{option}</option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <Input
                                                    id={field.name}
                                                    type={field.type}
                                                    {...controllerField}
                                                    placeholder={field.placeholder}
                                                    className="form-control"
                                                />
                                            )
                                        }
                                    />
                                    {errors[field.name] && (
                                        <span className="text-danger">{errors[field.name]?.message}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div className="d-flex justify-content-end p-3 mt-4">
                            <Button className="btn btn-danger px-3" type="button" onClick={handleClear}>
                                Cancel
                            </Button>
                            <span className='px-3'></span>
                            <Button className="btn btn-success px-3" type="submit">
                                Update
                            </Button>
                        </div>
                        {error && (<div className="mt-3 text-danger text-center">{error}</div> )}
                        {success && (<div className="mt-3 text-success text-center">{success}</div>)}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;
