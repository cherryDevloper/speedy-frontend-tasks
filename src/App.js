import Layout from './components/Layout';
import ArticleWriterPage from './pages/ArticleWriterPage';
import Home from './pages/Home';

function App() {
  return (
    <Layout>
      <div className="bg-white p-4">
        {/* <Home /> */}
        <ArticleWriterPage />
      </div>
    </Layout>
  );
}

export default App;
