import "./App.css";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
function App() {
  toast.success("congratulation");
  return (
    <>
      Hello world
      <Button variant="primary">Primary</Button>
      <ToastContainer />
    </>
  );
}

export default App;
