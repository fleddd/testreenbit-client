import { BrowserRouter } from 'react-router'
import { AppRouter } from '../router'

const RouterProvider = () => {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	)
}

export default RouterProvider
