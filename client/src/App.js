import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./routes/Routing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
