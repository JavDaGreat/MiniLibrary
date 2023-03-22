import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BookList from './BookList';
import BookDetail from './book/BookDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <BookList />
    },
    {
      path:'/1',
      element: <BookDetail />

      
    },
    {
      path:'/2',
      element: <BookDetail />

      
    },
    {
      path:'/3',
      element: <BookDetail />

      
    },
    {
      path:'/4',
      element: <BookDetail />

      
    },
    {
      path:'/5',
      element: <BookDetail />

      
    },
    {
      path:'/6',
      element: <BookDetail />

      
    },
    {
      path:'/7',
      element: <BookDetail />

      
    },
    {
      path:'/8',
      element: <BookDetail />

      
    }
  
  
  ]);

  return (  <div>
          <RouterProvider router={ router } />

  </div> )
}

export default App
