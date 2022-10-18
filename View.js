import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({users,deleteUser}) => {
    
    return users.map(user=>(
        
        <tr key={user.phone}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td className='delete-btn' onClick={()=>deleteUser(user.phone)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}