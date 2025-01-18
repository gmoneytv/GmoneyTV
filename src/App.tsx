import { HashRouter, Routes, Route, Link } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"

export default function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
				</Route>
				<Route path="*" element={
					<>
						<div className="my-[100px] mx-auto max-w-[585px] text-center">
							<h1>404 Server Error</h1>
							<h2>That page does not exist!</h2>

							<hr className="my-[15px]" />

							<Link to="/">Back to home</Link>
						</div>
					</>
				} />
			</Routes>
		</HashRouter>
	)
}
