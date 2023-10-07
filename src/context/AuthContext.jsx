import { createContext } from "react";
import PropTypes from "prop-types";
export const Context = createContext(null);
const AuthContext = ({ children }) => {
  return <Context.Provider value={"hello"}>{children}</Context.Provider>;
};

AuthContext.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;
