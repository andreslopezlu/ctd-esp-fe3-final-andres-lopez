import ThemeProvider from './context/ThemeContext.js'
import Layout from "./Components/Layout";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import DentistProvider from './context/DentistApiContext.js';

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="App">
          <Navbar/>
            <DentistProvider>
              <Outlet/>
            </DentistProvider>
          <Footer/>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
