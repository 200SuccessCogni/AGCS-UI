import { ReactElement, Suspense, lazy } from "react";
import { MDXProvider } from "@mdx-js/react";

import "./App.css";
import AuthLayout from "./components/layout/AuthLayout";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./components/auth/AuthGuard";

// Blogs
import TripadvisorIntegrate from "../blogs/how-to-get-tripadvisor-partner-api.mdx";
import Blog from "./components/blogs";

// Lazy loading
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Analytics = lazy(() => import("./pages/Analytics"));
const Insights = lazy(() => import("./pages/Insights"));
const Integration = lazy(() => import("./pages/Integration"));
const Intro = lazy(() => import("./pages/Intro"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Recommendation = lazy(() => import("./pages/Recommendation"));
const Compare = lazy(() => import("./pages/Compare"));
const Settings = lazy(() => import("./pages/Settings"));

function layoutWrapper(component: ReactElement) {
    return <AuthLayout>{component}</AuthLayout>;
}

function withAuthInterceptor(component: ReactElement, isAuthenticated = true) {
    if (!isAuthenticated) return component;
    return <AuthGuard>{layoutWrapper(component)}</AuthGuard>;
}

function App() {
    return (
        <Router>
            <Suspense fallback={layoutWrapper(<p>Loading...</p>)}>
                <Routes>
                    <Route
                        path="/"
                        element={withAuthInterceptor(<Dashboard />)}
                    />
                    <Route
                        path="/dashboard"
                        element={withAuthInterceptor(<Dashboard />)}
                    />
                    <Route
                        path="/reviews"
                        element={withAuthInterceptor(<Reviews />)}
                    />
                    <Route
                        path="/analytics"
                        element={withAuthInterceptor(<Analytics />)}
                    />
                    <Route
                        path="/recommendation"
                        element={withAuthInterceptor(<Recommendation />)}
                    />
                    <Route
                        path="/compare"
                        element={withAuthInterceptor(<Compare />)}
                    />
                    <Route
                        path="/integration"
                        element={withAuthInterceptor(<Integration />)}
                    />
                    <Route
                        path="/settings"
                        element={withAuthInterceptor(<Settings />)}
                    />
                    <Route
                        path="/intro"
                        element={withAuthInterceptor(<Intro />, false)}
                    />
                    <Route
                        path="/signin"
                        element={withAuthInterceptor(<Login />, false)}
                    />
                    <Route
                        path="/signup"
                        element={withAuthInterceptor(<Signup />, false)}
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
