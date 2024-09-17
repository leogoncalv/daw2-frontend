import PaginaInicial from '../../pages/PaginaInicial';
import ProtectedRoute from '../../security/ProtectedRoute';

const PrivateRouters = {
    path: '/',
    children: [
        {
            path: 'Inicio',
            element: <PaginaInicial />
        },

    ]
}

export default PrivateRouters;
