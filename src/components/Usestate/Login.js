import React, { useState } from 'react'

export default function Login(){
    const [formData, setFormData] = useState(
        {email: "", password:"", confirmPassword:"", check:""}
    )

    function handleChange(event) {
        const {name, value, checked, type} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
               [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (formData.password === formData.confirmPassword) {
            console.log("Sign Up Succefully")
        } else {
            console.log("password does not match")
        }
    }

    return (
        <form  onSubmit={handleSubmit}>
             <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
             <input 
                type="password"
                placeholder="Enter Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />
             <input 
                type="password"
                placeholder="Renter Password"
                onChange={handleChange}
                name="confirmPassword"
                value={formData.confirmPassword}
            />
             <input
                id="joined" 
                type="checkbox"
                onChange={handleChange}
                name="check"
                checked={formData.check}
            />
            <label htmlFor="joined">I want to join the newsletter</label>
            <button>Sign Up</button>
        </form>
    )
}