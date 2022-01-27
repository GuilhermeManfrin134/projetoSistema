import { BrowserRouter } from 'react-router-dom';
import Rout from './routes';
import AuthProvider from './contexts/auth';

function App(){
    return(
        <AuthProvider>
            <BrowserRouter>
                <Rout />
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;