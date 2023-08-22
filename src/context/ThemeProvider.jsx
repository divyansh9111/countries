import { createContext, useState, useContext } from "react";
const themeContext = createContext();

const ChatProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  return (
    <themeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};


export const ModeState = () => {
  return useContext(themeContext);
};
export default ChatProvider;
