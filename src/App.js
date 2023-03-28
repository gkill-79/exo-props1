import ArticlesList from "./ArticlesList";
import HighLightArticle from "./HighLightArticle";
import './App.css';

function App() {

  const articles = [
    {
      title: "React Hooks",
      content: "React Hooks are awesome!",
    },
    {
      title: "React Context",
      content: "React Context is awesome!",
    },
    {
      title: "React Router",
      content: "React Router is awesome!",
    },
  ];

  return (
    <div className="App">
      <ArticlesList articlesProps={articles}/>
      <HighLightArticle articlesProps={articles}/>
    </div>
  );
}

export default App;
