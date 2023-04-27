import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Sandro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque
      incidunt inventore totam blanditiis, dolorum officia rem ad sed fugit.
      Dignissimos qui nam veniam totam eius eaque tenetur, labore et!"
          />
          <Post
            author="Sandro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque
      incidunt inventore totam blanditiis, dolorum officia rem ad sed fugit.
      Dignissimos qui nam veniam totam eius eaque tenetur, labore et!"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
