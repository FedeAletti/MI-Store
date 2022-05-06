import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={<ItemListContainer greetings={"Smoke Shop"} />}
					/>
					<Route
						path="/category/:categoryId"
						element={<ItemListContainer greetings={"Smoke Shop"} />}
					/>
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					{/* <Route path="/cart" element={<Cart />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
