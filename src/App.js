import React, { useEffect } from "react";
import "./App.css";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store/Store";
import TodoAppPage from "./pages/TodoAppPage";

function App() {
  useEffect(() => {
    store.subscribe(() => {
      localStorage.setItem("todos", JSON.stringify(store.getState().todo));
      localStorage.setItem(
        "todoStatus",
        JSON.stringify(store.getState().todoStatus)
      );
      localStorage.setItem("badges", JSON.stringify(store.getState().badge));
    });
  }, []);
  return (
    <Provider store={store}>
      <Box height={"100vh"}>
        <TodoAppPage />
      </Box>
    </Provider>
  );
}

export default App;
