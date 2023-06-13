import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { routes } from './constant/routes';
import Spin from './components/Spin';

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Spin />}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
