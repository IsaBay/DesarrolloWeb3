import React, { useEffect, useState } from 'react';
const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
// Llamar a la función para obtener la lista de usuarios
fetchUsers();
}, []);

const fetchUsers = async () => {
try {
const response = await fetch('https://664e3a0ffafad45dfadf71c0.mockapi.io/User');
const data = await response.json();
setUsers(data);
} catch (error) {
console.error('Error en la solicitud:', error);
}
};

return (
<div class="list-group">
<h1>Lista de Usuarios</h1>

<ul class="list-group">
{users.map((user) => (
<li  class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center" key={user.id}>{user.name} - {user.email}</li>
))}
</ul>
</div>
);
};

export default UserList;