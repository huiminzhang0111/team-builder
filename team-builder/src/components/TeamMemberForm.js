import React from 'react';

export default function TeamMemberForm(props) {
    const {formValue, update, submit} = props;
    const onChange = evt => {
        const {name, value} = evt.target;
        update(name, value)
    }
    const onSubmit = evt => {
        evt.preventDefault();
        submit()
    }
    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                    <input 
                        type='text'
                        value={formValue.name}
                        name='name'
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input 
                        type='email'
                        value={formValue.email}
                        name='email'
                        onChange={onChange}
                    />
                </label>
                <label>Role
                    <select name='role' onChange={onChange} value={formValue.role}>
                        <option>--Please choose an option</option>
                        <option>Backend Engineer</option>
                        <option>Frontend Engineer</option>
                        <option>Designer</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )


}