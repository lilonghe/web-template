import { getUser } from '../services/user'

export const session = {
  state: {
    user: undefined,
    permissions: []
  },
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
}
