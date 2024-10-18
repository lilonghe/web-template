import { getUser } from '@/services/user'
import { create } from 'zustand'

export interface IUser {
  id: string
  name: string
}

export type ISession = {
  user: IUser | undefined
  permissions: string[]

  saveUserInfo: (user: IUser) => void
  savePermissions: (permissions: string[]) => void
  clearState: () => void
  fetchUserInfo: () => Promise<void>
}

const initState = {
  user: undefined,
  permissions: [],
}

export const useSessionStore = create<ISession>((set) => ({
  ...initState,
  saveUserInfo: (user: IUser) => set({ user }),
  savePermissions: (permissions: string[]) => set({ permissions }),
  clearState: () => set({ ...initState }),
  fetchUserInfo: async () => {
    const { data } = await getUser()
    if (data) {
      useSessionStore.getState().saveUserInfo(data)
      useSessionStore.getState().savePermissions(data.permissions)
    }
  },
}))
