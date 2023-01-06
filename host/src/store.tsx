import create from 'zustand'

type CountState = {
    count: number
    increment: (by: number) => void 
    clear: (by: number) => void
}
const useStore = create<CountState>(set => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1})),
    clear: () => set({ count: 0 })
}))

export default useStore