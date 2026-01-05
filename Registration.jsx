import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRegistration } from "./features/registrationSlice";

const Registration = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    session: "React",
    type: "Online",
    tags: [],
  });
  const [error, setError] = useState({});

  const validate = () => {
    const e = {};
    if (form.name.length < 3) e.name = "Min 3 characters";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid Email";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Phone must be 10 digits";
    setError(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(createRegistration(form));
    setForm({ name:"", email:"", phone:"", session:"React", type:"Online", tags:[] });
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Name" value={form.name}
        onChange={e => setForm({...form, name:e.target.value})}/>
      {error.name && <p>{error.name}</p>}<br></br>

      <input placeholder="Email" value={form.email}
        onChange={e => setForm({...form, email:e.target.value})}/>
      {error.email && <p>{error.email}</p>}<br></br>

      <input placeholder="Phone" value={form.phone}
        onChange={e => setForm({...form, phone:e.target.value})}/>
      {error.phone && <p>{error.phone}</p>}<br></br>

      <select onChange={e => setForm({...form, session:e.target.value})}>
        <option>React</option>
        <option>Redux</option>
        <option>Next.js</option>
      </select><br></br>

      <select onChange={e => setForm({...form, type:e.target.value})}>
        <option>Online</option>
        <option>Offline</option>
      </select><br></br>

      <button>Add Registration</button>
    </form>
  );
};

export default Registration;