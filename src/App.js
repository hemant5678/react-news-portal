import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';

const App = () => (
  <Router basename="/react-news-portal">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article/:url" element={<ArticlePage />} />
    </Routes>
  </Router>
);

export default App;
