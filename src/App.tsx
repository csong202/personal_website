import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar } from "./components";
import { PageWrapper } from "./components";
import { About, Contact, Projects, WorkExperience } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <NavBar />,
	},
	{
		path: "about",
		element: <PageWrapper page={<About />}></PageWrapper>,
	},
	{
		path: "work-experience",
		element: <PageWrapper page={<WorkExperience />}></PageWrapper>,
	},
	{
		path: "projects",
		element: <PageWrapper page={<Projects />}></PageWrapper>,
	},
	{
		path: "contact",
		element: <PageWrapper page={<Contact />}></PageWrapper>,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
