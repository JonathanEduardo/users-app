// Import necessary React hooks and components
import React, { useEffect, useState } from 'react';
import UserTable from '../molecules/UserTable'; // Table to display users
import { createUser, getUsers, updateUser, deleteUser } from '../../services/auth'; // Service functions
import Modal from '../atoms/Modal.JSX'; // Modal component for forms
import UserForm from '../molecules/UserForm'; // Form for creating/editing users
import DeleteForm from '../molecules/DeleteForm'; // Form for user deletion confirmation

const UsersList = () => {
    // State to manage user list
    const [users, setUsers] = useState([]);
    const [sortField, setSortField] = useState('name'); // Default sorting field
    const [isModalOpen, setModalOpen] = useState(false); // Manage modal visibility
    const [isEditMode, setEditMode] = useState(false); // Track if the modal is in edit mode
    const [currentUser, setCurrentUser] = useState(null); // Current user for edit mode
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false); // Manage delete modal visibility
    const [userToDelete, setUserToDelete] = useState(null); // User to be deleted
    const [error, setError] = useState(null); // Error state for forms

    // Fetch user data on component mount
    useEffect(() => {
        loadUsers();
    }, []);

    // Fetch the list of users
    const loadUsers = async () => {
        const response = await getUsers(); // Get users from the API
        setUsers(response.data); // Update the user list in the state
    };

    // Handle table sorting by a specific field
    const handleSort = (field) => {
        setSortField(field);
        const sortedUsers = [...users].sort((a, b) =>
            a[field] > b[field] ? 1 : -1
        );
        setUsers(sortedUsers);
    };

    // Toggle the active status of a user
    const handleToggleStatus = async (userId, status) => {
        await toggleUserStatus(userId, status); // Update status in the API
        loadUsers(); // Refresh user list
    };

    // Create or update a user
    const handleUserSubmit = async (userData) => {
        if (isEditMode) {
            await updateUser(currentUser.id, userData); // Call update user API
        } else {
            await createUser(userData); // Call create user API
        }
        closeUserModal(); // Close modal after submission
        loadUsers(); // Refresh user list
        setError('Credenciales incorrectas, por favor intenta nuevamente.'); // Set error message if needed
    };

    // Close all modals and reset modal-related states
    const closeUserModal = () => {
        setCurrentUser(null);
        setEditMode(false);
        setModalOpen(false);
        setDeleteModalOpen(false);
    };

    // Handle user deletion
    const handleDeleteUser = async () => {
        if (userToDelete) {
            await deleteUser(userToDelete); // Call delete user API
            setDeleteModalOpen(false); // Close delete modal
            loadUsers(); // Refresh user list
        }
    };

    // Open delete modal and set the user to be deleted
    const openDeleteModal = (userId) => {
        setUserToDelete(userId);
        setDeleteModalOpen(true);
    };

    // Open modal for creating/editing users
    const openUserModal = (user = null) => {
        setCurrentUser(user); // Set the user for edit mode
        setEditMode(!!user); // Toggle edit mode based on whether a user is provided
        setModalOpen(true); // Open modal
    };

    return (
        <div>
            {/* Button to add a new user */}
            <button
                onClick={() => openUserModal()}
                className="create-user-button bg-tertiary-color rounded-md float-end my-4 text-white font-semibold px-4 py-2"
            >
                Agregar Usuario
            </button>

            {/* User table with sorting and action handlers */}
            <UserTable
                users={users}
                onSort={handleSort}
                onToggleStatus={handleToggleStatus}
                onClick={openUserModal}
                deleteUser={openDeleteModal}
            />

            {/* Modal for creating/editing a user */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeUserModal}
                title={isEditMode ? 'Editar Usuario' : 'Crear Usuario'}
            >
                <UserForm
                    onSubmit={handleUserSubmit}
                    error={error}
                    currentUser={currentUser}
                />
            </Modal>

            {/* Modal for confirming user deletion */}
            <Modal
                isOpen={isDeleteModalOpen}
                onClose={closeUserModal}
                title={'¿Deseas eliminar este usuario?'}
            >
                <DeleteForm
                    onSubmit={handleDeleteUser}
                    onClose={closeUserModal}
                    error={error}
                    currentUser={currentUser}
                />
            </Modal>
        </div>
    );
};

export default UsersList;
