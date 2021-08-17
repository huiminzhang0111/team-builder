import './App.css';

import React, { useState, useEffect } from 'react';
import TeamMember from './components/TeamMember';
import TeamMemberForm from './components/TeamMemberForm';
import axios from 'axios';

const initialValues = {
  name: "",
  email: "",
  role: "",
}

function App() {
  const [members, setMembers] = useState([]);

  //step 1. we need state to hold all values of the form
  const [formValue, setFormValue] = useState(initialValues);
  const updateForm = (inputName, inputValue) => {
    const newFormValue = {...formValue, [inputName]: inputValue}
    setFormValue(newFormValue);
  }
  const submitForm = () => {
    const newMember = {
      name: formValue.name.trim(),
      email: formValue.email.trim(),
      role: formValue.role
    }
    axios
      .post('fakeapi.com', newMember)
      .then(res => {
        const newMembers = [...members, newMember]
        setMembers(newMembers)
      }).catch(err => console.error(err))
      setFormValue(initialValues)
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setMembers(res.data))
  }, [])
  return (
    <div className="App">
      <h1>Team Member Form</h1>
      <TeamMemberForm 
        formValue={formValue}
        update={updateForm}
        submit={submitForm}
      />
      {members.map(member => {
        return (
          <TeamMember key={member.id} member={member} />
        )
        })
      }
    </div>
  );
}

export default App;
