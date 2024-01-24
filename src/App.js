import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-[#F9FAFF]">
      <div>
        <Header />
        <ContactForm />
        <Projects />
      </div>
    </div>
  );
}

export default App;
