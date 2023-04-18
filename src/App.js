
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Componenet/Blog/Blog';
import Quiz from './Componenet/Quiz/Quiz';
import Statics from './Componenet/Statics/Statics';
import Topics from './Componenet/Topics/Topics';
import Mani from './Layout/Mani';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Mani></Mani>,
      children: [
        {
          path: '/',
          element: <Topics></Topics>,
          loader: ()=> fetch('topics.json')
        },
        {
          path: '/topics',
          element: <Topics></Topics>,
          loader: ()=> fetch('topics.json')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
          
        },
        {
          path: `quiz/:quizId`,
          element: <Quiz></Quiz>,
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        {
          path: '/statics',
          element: <Statics></Statics>,
          loader:() => fetch('topics.json')

        }
      ]
    },
    {
      path: '*',
      element: <div className='text-center mt-5'>
        <h2 className='display-1 fw-bold'>404</h2>
        <p>Page not Found</p>
      </div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
