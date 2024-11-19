import React, { useEffect, useState } from 'react';
import UserTable from '../molecules/UserTable';
import {  toggleUserStatus } from '../../services/api';
import {createUser , getUsers, updateUser, deleteUser} from '../../services/auth';
import Modal from '../atoms/Modal.JSX';
import UserForm from '../molecules/UserForm';
import DeleteForm from '../molecules/DeleteForm';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [sortField, setSortField] = useState('name');  
    const [isModalOpen, setModalOpen] = useState(false);
    const [isEditMode, setEditMode] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);  // Para editar usuario
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const response = await getUsers();  // get users from service api 
        setUsers(response.data);
     

        
    };

    const handleSort = (field) => {
        setSortField(field);
        const sortedUsers = [...users].sort((a, b) => 
            a[field] > b[field] ? 1 : -1
        );
        setUsers(sortedUsers);
    };

    const handleToggleStatus = async (userId, status) => {
        await toggleUserStatus(userId, status);
        loadUsers();
    };


     // Crear o Editar Usuario
     const handleUserSubmit = async (userData) => {
   

    
     if (isEditMode) {

          await updateUser(currentUser.id, userData);  // Llamada para actualizar usuario
      } else {
          await createUser(userData);  // Llamada para crear nuevo usuario
      }
      closeUserModal();
      loadUsers();


      setError('Credenciales incorrectas, por favor intenta nuevamente.');
  };


    const closeUserModal = () => {
      setCurrentUser(null);
      setEditMode(false);
      setModalOpen(false);
  };

    // Eliminar Usuario
    const handleDeleteUser = async () => {

      alert(userToDelete);
      if (userToDelete) {
          await deleteUser(userToDelete);
          setDeleteModalOpen(false);
          loadUsers();
      }
  };


   // Abrir modal de confirmación de eliminación
   const openDeleteModal = (userId) => {
    setUserToDelete(userId);
    setDeleteModalOpen(true);

    console.log(userId);
};

    // Abrir modal para Crear/Editar
    const openUserModal = (user = null) => {


      setCurrentUser(user);
      setEditMode(!!user);
      setModalOpen(true);
  };

    return (
        <div>
              <button onClick={() => openUserModal()} className="create-user-button">Crear Usuario</button>

            <UserTable 
                users={users} 
                onSort={handleSort} 
                onToggleStatus={handleToggleStatus} 
                onClick={openUserModal}
                deleteUser={openDeleteModal}

            />

            <Modal isOpen={isModalOpen} onClose={closeUserModal} title={isEditMode ? 'Editar Usuario' : 'Crear Usuario'}>
               <UserForm onSubmit={handleUserSubmit} error={error} currentUser={currentUser} />
               
            </Modal>


            <Modal isOpen={isDeleteModalOpen} onClose={closeUserModal} title={'¿Deseas eliminar este usuario?'}>
               <DeleteForm onSubmit={handleDeleteUser}  onClose={closeUserModal} error={error} currentUser={currentUser} />
               
            </Modal>
          

            

        </div>
    );
};

export default UsersList;

