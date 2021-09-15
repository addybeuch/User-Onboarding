import React, {useState,useEffect} from 'react'
import Form from './Form'
import './App.css';
import axios from 'axios';
import schema from './userSchema';
import * as yup from 'yup';
import User from './User'

const initialFormValues = {
  name:'',
  email:'',
  password:'',
  terms: false,
}

const initialFormErrors = {
  name:'',
  email:'',
  password:'',
}

const initialUsers = []
const initialDisabled = true

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data);
      }).catch(err => console.error(err))
  }
  const postNewUser= newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
        setFormValues(initialFormValues);
      }).catch(err => {
        console.error(err);
        setFormValues(initialFormValues);
      })
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: '' }))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(newUser);
  }
  // useEffect(() => {
  //   getUsers()
  // }, [])
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
console.log(users)
  return (
    <div className='container'>
      <h1>New User Information</h1>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users?.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  )
}
