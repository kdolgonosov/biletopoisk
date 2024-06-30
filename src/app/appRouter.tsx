import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import { MoviePage } from '@/pages/movie/ui/Page';
import { Layout } from '@/shared/ui/Layout/Layout';

export const appRouter = () =>
    createBrowserRouter([
        {
            element: <Layout />,
            children: [
                { path: '/', element: <MainPage /> },
                {
                    path: 'movie/:movieId',
                    element: <MoviePage />,
                },
            ],
        },
    ]);
