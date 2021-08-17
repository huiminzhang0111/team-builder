import { v4 as uuid } from 'uuid'

const initialTeamList = [
    {
        id: uuid(),
        name: 'Michael',
        email: 'michael@gmail.com',
        role: 'Designer'
    },
]

export default {
    get() {
        return Promise.resolve({status: 200, success: true, data: initialTeamList})
    },
    post(url, {name, email, role}) {
        const newMember = {id: uuid(), name, email, role}
        return Promise.resolve({status: 200, success: true, data:newMember})
    }
}