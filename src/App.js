import "./App.css";
import { Box } from "@mui/material";
import TodoStatus from "./components/TodoStatus";

function App() {
  return (
    <Box
      height={"100vh"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <TodoStatus title={"No status"} />
    </Box>
  );
}

export default App;
