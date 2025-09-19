import type { NextPage } from 'next'
import { ContainerComponent } from '../../shared/ui/container'
import NotFoundComponent from '../../shared/ui/not-found/not-found.component'


const NotFound: NextPage = () => {
    return (
        <ContainerComponent className='grid h-full items-center justify-center'>
            <NotFoundComponent />
        </ContainerComponent>
    )
}

export default NotFound
