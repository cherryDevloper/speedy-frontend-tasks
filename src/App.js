import Layout from './components/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <Layout>
      <div className="bg-white p-4">
        <Home />
      </div>
    </Layout>
  );
}

export default App;
