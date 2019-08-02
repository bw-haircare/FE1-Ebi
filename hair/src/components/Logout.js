import React from "react";

function Logout() {
  localStorage.clear();
  window.location.href = "/";

  return <button onClick={Logout}>Logout</button>;
}

export default Logout;
