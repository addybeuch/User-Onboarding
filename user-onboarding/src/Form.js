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
        <form className='form-container' onSubmit={onSubmit}>
        <div className='form-group submit'>
            <h2>New User Form</h2>
        


            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
        </div>
        <div className='form inputs'>
            <label className='name'> Name &nbsp;
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
            </label>

            <label className='email'> Email &nbsp;
                <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                />
            </label>

            <label className='password'> Password &nbsp;
                <input type='password'
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                />               
            </label>

            <label className='terms'>Terms &nbsp;
                <input
                    value={values.terms}
                    onChange={onChange}
                    name='terms'
                    type='checkbox'
                />               
            </label>

            <button id='submitBtn' onSubmit={onSubmit} disabled={disabled}>submit</button>
            <footer>Beenza Company</footer>
          </div>
        </form>
    )

}