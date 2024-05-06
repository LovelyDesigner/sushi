import { RouterProvider } from "react-router-dom";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <RouterProvider router={MenuBar}/>
  );
}

export default App;
