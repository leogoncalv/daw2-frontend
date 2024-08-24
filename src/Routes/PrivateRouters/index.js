import PaginaIncial from '../../pages/PaginaInicial'

const PrivateRouters = {
    path: '/',
    children: [
        {
            path: 'inicio',
            element: <PaginaIncial/>
        
        }
    ]

    }

export default PrivateRouters;