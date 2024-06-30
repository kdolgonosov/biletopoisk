import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Button } from '@/shared/ui/Button/Button';
import './index.css';
import Header from '@/widgets/Header/ui/Header/Header';
import { appRouter } from './appRouter';
import appStore from './appStore';

function App() {
    return (
        <Provider store={appStore}>
            <Header />
            <RouterProvider router={appRouter()} />
        </Provider>
    );
}

export default App;
