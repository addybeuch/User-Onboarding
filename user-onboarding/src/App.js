import React, {useState,useEffect} from 'react'
import Form from './Form'
import './App.css';
import axios from 'axios';

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
    axios.get
  }
}
