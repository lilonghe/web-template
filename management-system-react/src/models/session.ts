import { createModel } from '@rematch/core'
import { RootModel } from '.'
import { getUser } from '../services/user'

export interface IUser {
  id: string
  name: string
}

export type ISession = {
  user: IUser | undefined
  permissions: string[]
}

const initState: ISession = {
  user: undefined,
  permissions: [],
}

export const session = createModel<RootModel>()({
  state: { ...initState },
  reducers: {
    saveUserInfo(state, payload) {
      return {
        ...state,
        user: payload,
      }
    },
    savePermissions(state, payload) {
      return {
        ...state,
        permissions: payload,
      }
    },
    clearState() {
      return { ...initState }
    },
  },
  effects: () => ({
    async fetchUserInfo() {
      const { data } = await getUser()
      if (data) {
        this.saveUserInfo(data)
        this.savePermissions(data.permissions)
      }
    },
  }),
})
