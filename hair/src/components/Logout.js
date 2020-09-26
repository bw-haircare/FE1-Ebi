import React from "react";

function Logout() {
  localStorage.clear();
  window.location.href = "/";

  // return <div onClick={Logout}>Logout</div>;
}

export default Logout;
