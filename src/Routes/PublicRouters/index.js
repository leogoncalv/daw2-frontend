import PaginaLogin from '../../pages/PaginaLogin';
import PaginaCadastro from '../../pages/PaginaCadastro'

const PublicRouters = {
    path: '/',
    children: [
        {
            path: 'cadastro',
            element: <PaginaCadastro />
        },
        {
            path: 'login',
            element: <PaginaLogin />
        }
    ]

}

export default PublicRouters;
