import { useLayoutEffect } from 'react'
import { useAppDispatch } from './services/store'
import { getUser } from './services/store/user/actions'
import ProjectList from './components/project-list/ProjectList'

function App() {
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    return (
        <div className='App'>
            <ProjectList />
        </div>
    )
}

export default App
