import React, { useEffect } from "react";
import "./App.css";
import { Box } from "@mui/material";
import TodoStatusList from "./components/TodoStstusList";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {
  useEffect(() => {
    store.subscribe(() => {
      localStorage.setItem("todos", JSON.stringify(store.getState().todo));
      localStorage.setItem(
        "todoStatus",
        JSON.stringify(store.getState().todoStatus)
      );
    });
  }, []);
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
