import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BookList from './BookList';
import GoodNightMoon from './Goodnight Moon';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <BookList />
    },
    {
      path:'/1',
      element: <GoodNightMoon />

      
    }
  
  
  ]);

  return (  <div>
          <RouterProvider router={ router } />

  </div> )
}

export default App
