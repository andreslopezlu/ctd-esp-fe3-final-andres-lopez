import ThemeProvider from './context/ThemeContext.js'
import Layout from "./Components/Layout";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="App">
          <Navbar/>
            <Outlet/>
          <Footer/>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
