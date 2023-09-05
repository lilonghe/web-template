import { getUser } from '../services/user'
import { createModel } from '@rematch/core'
import { RootModel } from '.'

export interface IUser {
    id: string
    name: string
}

export type ISession = {
    user: IUser | undefined
    permissions: string[]
}

export const session = createModel<RootModel>()({
  state: {
    user: undefined,
    permissions: []
  } as ISession,
  reducers: {
    saveUserInfo (state, payload) {
      return {
        ...state,
        user: payload
      }
    },
    savePermissions (state, payload) {
      return {
        ...state,
        permissions: payload
      }
    }
  },
  effects: () => ({
    async fetchUserInfo () {
      const { data } = await getUser()
      if (data) {
        this.saveUserInfo(data)
        this.savePermissions(['user-confirm'])
      }
    }
  })
})
