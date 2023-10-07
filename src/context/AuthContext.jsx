import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const Context = createContext(null);
const AuthContext = ({ children }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const authInfo = { services };
  return <Context.Provider value={authInfo}>{children}</Context.Provider>;
};

AuthContext.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;
