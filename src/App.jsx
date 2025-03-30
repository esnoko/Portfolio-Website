import styles from "./App.module.css";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contacts/Contact";
import { Experience } from "./Components/Experience/experience";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/navbar";
import { Projects } from "./Components/Projects/projects";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <div className={styles.section}>
        <Hero/>
      </div>
      <div className={styles.section}>
        <About/>
      </div>
      <div className={styles.section}>
        <Experience/>
      </div>
      <div className={styles.section}>
        <Projects/>
      </div>
      <div className={styles.section}>
        <Contact/>
      </div>
      <ScrollToTop/>
    </div>
  );
}

export default App;
