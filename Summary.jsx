import { useSelector } from "react-redux";

const Summary = () => {
  const data = useSelector(state => state.registrations.list);
  const online = data.filter(d => d.type === "Online").length;
  const offline = data.filter(d => d.type === "Offline").length;

  return (
    <div>
      <h3>Online: {online}</h3>
      <h3>Offline: {offline}</h3>
    </div>
  );
};

export default Summary;