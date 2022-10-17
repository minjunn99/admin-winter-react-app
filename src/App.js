// Import library
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import styles
import "./sass/styles.scss";

// Import components
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoutes from "./routes/PrivateRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import Wrapper from "./container/Wrapper";
import { Signin, Dashboard, User, AddUser, EditUser } from "./pages";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route element={<Wrapper />}>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/user" element={<User />} />
                            <Route path="/add_user" element={<AddUser />} />
                            <Route path="/edit_user" element={<EditUser />} />
                        </Route>
                    </Route>
                    <Route element={<AuthRoutes />}>
                        <Route path="signin" element={<Signin />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
