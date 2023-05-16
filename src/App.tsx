import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './pages/Home/components/Products';

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
                <Provider store={store}>
                    <BrowserRouter>
                         <Router />
                     </BrowserRouter>
                </Provider>
        </ThemeProvider>
    );
}
