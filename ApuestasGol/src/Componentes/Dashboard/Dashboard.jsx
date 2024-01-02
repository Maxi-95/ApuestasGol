import React from "react";
import { Link } from "react-router-dom";
//import s from "./navegador.module.css";

function Dashboard() {
  return (
    <Link to={"/cuenta"}>
      <div>cuenta</div>;
    </Link>
  );
}

export default Dashboard;
