import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageRoutes from './components/PageRoutes';
// import PageRoutes from './PageRoutes';

const App = () => {
  return (
    <Router>
      <div>
        <PageRoutes />
      </div>
    </Router>
  );
};


export default App;
