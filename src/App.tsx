import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar } from "./components";
import { About, Contact, Projects, WorkExperience } from "./pages";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <NavBar />,
	},
	{
		path: "about",
		element: <About />,
	},
	{
		path: "work-experience",
		element: <WorkExperience />,
	},
	{
		path: "projects",
		element: <Projects />,
	},
	{
		path: "contact",
		element: <Contact />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
