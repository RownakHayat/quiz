
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Componenet/Blog/Blog';

import Statics from './Componenet/Statics/Statics';
import Topics from './Componenet/Topics/Topics';
import Mani from './Layout/Mani';
import QuizAnswe from './Componenet/QuizAnswer/QuizAnswe';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Mani></Mani>,
      children: [
        {
          path: '/',
          element: <Topics></Topics>,
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/topics',
          element: <Topics></Topics>,
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
          
        },
        {
          path: '/statics',
          element: <Statics></Statics>,
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz')

        },

        {
          path: `quiz/:quizId`,
          element:<QuizAnswe></QuizAnswe> ,
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
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
