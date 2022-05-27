import React, { useEffect, useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        age: 0,

    });

    const handleChange = (e) => {
        let { name, value, type, checked } = e.target;

        if (type === checked) {
            setForm({
                ...form,
                [name]: checked,
            })
        } else {
            setForm({
                ...form,
                [name]: value,
            })
        }
        console.log(type, name, value, checked)
    }
    // useEffect(() => {
    //     console.log(form)
    // }, [form])
    return (
        <div>Form
            <form action="">
                <div>
                    <label htmlFor="">Name : </label>
                    <input
                        type="text"
                        name='name'
                        onChange={handleChange}
                        value={form.name}
                        placeholder='Enter Name' />
                </div>

                <div>
                    <label htmlFor="">Email : </label>
                    <input
                        type="email"
                        name='email'
                        onChange={handleChange}
                        value={form.email}
                        placeholder='Enter Email'
                    />
                </div>

                <div>
                    <label htmlFor="">Password : </label>
                    <input
                        type="password"
                        name='password'
                        onChange={handleChange}
                        value={form.password}
                        placeholder='Enter Password'
                    />
                </div>
                <div>
                    <label htmlFor="">Age : </label>
                    <input
                        type="Number"
                        name='age'
                        onChange={handleChange}
                        value={form.age}

                        placeholder='Enter Age'
                    />
                </div>

                <div>
                    <label htmlFor="">isChecked : </label>
                    <input
                        type="checkbox"
                        name='isIndian'

                        onChange={handleChange}

                    />
                </div>
            </form>

        </div>
    )
}

export default Form