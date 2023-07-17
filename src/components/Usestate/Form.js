import React, { useState } from 'react';

export default function() {
    const [formData, setFormData] = useState(
        {firstname: "", lastName: ""}
    )

    function handleChange(event){
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }

    return (
        <form>
            <input 
                type="text"
                placeholder="first name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstname}
            />
            <input 
                type="text"
                placeholder="last name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
        </form>
    )
}