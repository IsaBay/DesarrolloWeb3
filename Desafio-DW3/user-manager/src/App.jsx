
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';
import './App.css'
import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const App = () => {
const [users, setUsers] = useState([]);

const addUser = async (newUser) => {

try {
const response = await fetch('https://664e3a0ffafad45dfadf71c0.mockapi.io/User', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(newUser),
});
if (response.ok) {

const data = await response.json();
setUsers([...users, data]);
} else {
console.error('Error al agregar usuario');
}} catch (error) {
console.error('Error en la solicitud: ', error);
}
};

return (
<div>
<h1>Lista de Usuarios</h1>
<UserForm addUser={addUser} />

{/* <ul>
{users.map((user, index) => (
<li key={index}>{user.name} - {user.email}</li>
))}
</ul> */}

<UserList/>

</div>
);
};

export default App;
