import "./App.css";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blog from "../data/blog";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header name={blog.name} />
        <About image={blog.image} about={blog.about} />
        <ArticleList posts={blog.posts} />
      </div>
    </div>
  );
}

export default App;