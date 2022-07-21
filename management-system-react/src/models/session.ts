import { createModel } from '@rematch/core'
import type { RootModel } from '.'

export interface IUser {
  name: string
}

export interface ISessionState {
  user?: IUser
  permissions: string[]
}

export const session = createModel<RootModel>()({
  state: {
    user: undefined,
    permissions: []
  } as ISessionState,
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
      this.saveUserInfo({
        name: 'John Doe'
      })
      this.savePermissions(['user-confirm'])
    }
  })
})
