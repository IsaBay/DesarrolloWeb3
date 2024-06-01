import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = () => {
const newUser = { name, email };
addUser(newUser);
};

return (
<div>
<h2>Agregar Usuario</h2>
<label  class="form-label mt-4">Nombre: </label>
<input type="text"  class="form-control" value={name} onChange={(e) => setName(e.target.value)} />
<br />
<label class="form-label mt-4">Email: </label>
<input type="text" class="form-control"  value={email} onChange={(e) => setEmail(e.target.value)} />
<br />
<button onClick={handleSubmit} class="btn btn-outline-danger" >Agregar</button>
</div>
  );
};

export default UserForm;