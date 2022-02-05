import React, { useCallback } from "react";
import "./App.css";
import { Box } from "@mui/material";
import TodoStatusList from "./components/TodoStstusList";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <Box
        height={"100vh"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible",
        }}>
        <TodoStatusList />
      </Box>
    </Provider>
  );
}

export default App;
