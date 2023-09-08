import { ReactElement, Suspense, lazy } from "react";
import { MDXProvider } from "@mdx-js/react";

import "./App.css";
import AuthLayout from "./components/layout/AuthLayout";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./components/AuthGuard";
import TripadvisorIntegrate from "../blogs/how-to-get-tripadvisor-partner-api.mdx";
import Blog from "./components/blogs";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Analytics = lazy(() => import("./pages/Analytics"));
const Insights = lazy(() => import("./pages/Insights"));
const Integration = lazy(() => import("./pages/Integration"));
const Intro = lazy(() => import("./pages/Intro"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));

function LayoutWrapper(component: ReactElement) {
    return <AuthLayout>{component}</AuthLayout>;
}

function AuthInterceptComp(component: ReactElement, isAuthenticated = true) {
    if (!isAuthenticated) return component;
    return <AuthGuard>{LayoutWrapper(component)}</AuthGuard>;
}

function App() {
    return (
        <Router>
            <Suspense fallback={LayoutWrapper(<p>Loading...</p>)}>
                <Routes>
                    <Route
                        path="/"
                        element={AuthInterceptComp(<Dashboard />)}
                    />
                    <Route
                        path="/dashboard"
                        element={AuthInterceptComp(<Dashboard />)}
                    />
                    <Route
                        path="/reviews"
                        element={AuthInterceptComp(<Reviews />)}
                    />
                    <Route
                        path="/analytics"
                        element={AuthInterceptComp(<Analytics />)}
                    />
                    <Route
                        path="/insights"
                        element={AuthInterceptComp(<Insights />)}
                    />
                    <Route
                        path="/integration"
                        element={AuthInterceptComp(<Integration />)}
                    />
                    <Route
                        path="/intro"
                        element={AuthInterceptComp(<Intro />, false)}
                    />
                    <Route
                        path="/signin"
                        element={AuthInterceptComp(<Login />, false)}
                    />
                    <Route
                        path="/signup"
                        element={AuthInterceptComp(<Signup />, false)}
                    />
                    {/* Blogs route */}
                    <Route
                        path="/blogs/how-to-get-tripadvisor-partner-api"
                        element={
                            <Blog>
                                <TripadvisorIntegrate />
                            </Blog>
                        }
                    />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
