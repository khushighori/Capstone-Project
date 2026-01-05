const API_URL = "http://localhost:5000/registration";


export const fetchData = () => fetch(API_URL).then(res => res.json());

export const addData = (data) =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const updateData = (data) =>
  fetch(`${API_URL}/${data.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const deleteData = (id) =>
  fetch(`${API_URL}/${id}`, { method: "DELETE" });