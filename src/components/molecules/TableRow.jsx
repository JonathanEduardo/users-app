import React from 'react';
import Switch from '../atoms/Switch';
import Button from '../atoms/Button';
import ButtonTable from '../atoms/ButtonTable';

const TableRow = ({ user, onToggleStatus, onClick, deleteUser }) => {

  
   
return (
    <tr>
        <th>
        <div class="relative h-10  ">
            {user.name}
            </div>
            </th>
        <td>
              <div class="relative h-10  ">
              {user.email}
                </div>
        </td>
        <td>
              <div class="relative h-10  w-full px-10">
              {new Date(user.created_at).toLocaleDateString()}
                </div>
        </td>
        <td>
            <div class="relative h-10  px-3">
        
            <ButtonTable onClick={() => onClick(user)} type='submit' classStyle="text-primary-color px-2 text-lg" >
                
                <i class="fa-solid fa-pen-to-square"></i>
            </ButtonTable>

            <ButtonTable  onClick={() => deleteUser(user.id)} type='submit' classStyle="text-primary-color px-2 text-lg" >
                 <i class="fa-solid fa-trash"></i>

            </ButtonTable>

              {/* <Switch 
                isChecked={user.active} 
                onToggle={() => onToggleStatus(user.id, !user.active)} /> */}

             
            </div>
            
        </td>
    </tr>
);
};

export default TableRow;
