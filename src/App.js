import "./App.css";
import { Box } from "@mui/material";
import TodoStatusList from "./components/TodoStstusList";

function App() {
  return (
    <Box
      height={"100vh"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <TodoStatusList />
    </Box>
  );
}

export default App;
