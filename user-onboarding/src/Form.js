import React from 'react'

export default function Form(props) {
    const {values,submit,change,disabled,errors,} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const {name,value,checked,type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form className='form-container' on Submit={onSubmit}>
        <div className='form-group submit'>
            <h2>New User Form</h2>
        
            <button disabled={disabled}>submit</button>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
        </div>
        <div className='form inputs'>
            <label>Name
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
            </label>

            <label>Email
                <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                />
            </label>

            <label>Password
                <input type='password'
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                />               
            </label>

            <label>Terms
                <input
                    value={values.terms}
                    onChange={onChange}
                    name='terms'
                    type='checkbox'
                />               
            </label>
          </div>
        </form>
    )

}