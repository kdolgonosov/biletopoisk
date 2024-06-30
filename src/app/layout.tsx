import Header from '@/widgets/Header/ui/Header/Header';
import Provider from './StoreProvider';
import './index.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <Provider>
                <body>
                    <Header />
                    {children}
                </body>
            </Provider>
        </html>
    );
}
