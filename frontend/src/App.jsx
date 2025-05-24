import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./components/dashboard/Dashboard";
import ShipList from "./components/dashboard/ShipList";
import ShipDetails from "./components/dashboard/ShipDetails";
import Profile from "./components/dashboard/Profile";

function App() {
  const { isAuthenticated, loading } = useAuth();

  const ProtectedRoute = ({ children }) => {
    if (loading)
      return (
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      );
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/register"
        element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="ships" element={<ShipList />} />
        <Route path="ships/:shipName" element={<ShipDetails />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
