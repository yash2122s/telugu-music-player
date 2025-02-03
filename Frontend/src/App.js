import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Songs from './pages/Songs';
import Upload from './pages/Upload';
import Login from './pages/Login';

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <PrivateRoute>
                <>
                  <Navbar />
                  <Home />
                </>
              </PrivateRoute>
            } />
            <Route path="/songs" element={
              <PrivateRoute>
                <>
                  <Navbar />
                  <Songs />
                </>
              </PrivateRoute>
            } />
            <Route path="/upload" element={
              <PrivateRoute>
                <>
                  <Navbar />
                  <Upload />
                </>
              </PrivateRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 