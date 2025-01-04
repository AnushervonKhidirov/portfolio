/* eslint-disable no-unused-vars */
import { create } from 'zustand'

type ActiveNavigationStore = {
    active: string
    sectionPosition: { [key: string]: TSectionPosition }
    setActive: (activeNav: string) => void
    addSection: (name: string, position: TSectionPosition) => void
}

type TSectionPosition = {
    top: number
    bottom: number
}

const useActiveNavigation = create<ActiveNavigationStore>(set => ({
    active: 'About',
    sectionPosition: {},
    setActive: activeNav => set(() => ({ active: activeNav })),
    addSection: (name, position) =>
        set(state => {
            const newState = state.sectionPosition
            newState[name] = position

            return newState
        }),
}))

export default useActiveNavigation
