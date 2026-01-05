import { useSelector, useDispatch } from "react-redux";
import { removeRegistration, getRegistrations } from "./features/registrationSlice";
import { useEffect, useState } from "react";

const RegistrationList = () => {
  const dispatch = useDispatch();
  const { list, search, sessionFilter } = useSelector(
    state => state.registrations
  );
  const [page, setPage] = useState(1);

  // ✅ THIS IS REQUIRED
  useEffect(() => {
    dispatch(getRegistrations());
  }, [dispatch]);

  const filtered = list.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) &&
    (sessionFilter === "All" || r.session === sessionFilter)
  );

  const perPage = 5;
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Session</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(r => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>{r.session}</td>
              <td>{r.type}</td>
              <td>
                <button onClick={() => dispatch(removeRegistration(r.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button
        disabled={page * perPage >= filtered.length}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
};

export default RegistrationList;
