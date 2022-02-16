
export const session = {
    state: {
        user: undefined,
        permissions: [],
    },
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
        }
    },
    effects: () => ({
        async fetchUserInfo() {
            this.saveUserInfo({
                name: 'John Doe',
            });
            this.savePermissions(['user-confirm']);
        }
    })
}