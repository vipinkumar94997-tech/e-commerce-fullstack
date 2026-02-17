import React, { Children, createContext, useContext, useState } from "react";
import { authDataContext } from "./Authcontext";

export const adminDataContext = createContext();
function UserContext(children) {
  let [adminData, setAdminData] = useState(null);
  let { serverUrl } = useContext(authDataContext);

  const getAdmin = async () => {
    let result = await axios.get;
    (serverUrl + "/api/user/getadmin", { withCredentials: true });

    setAdminData(result.data);
    console.log(result.data);
  }catch (error) {
    
  }
  return (
    <div>
      <adminDataContext.Provider value={value}>
        {Children}
      </adminDataContext.Provider>
    </div>
  );
}

export default UserContext;
