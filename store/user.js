export const state = () => ({
    user: { loggedIn: false }
})

export const mutations = {
    add(state, userName) {
        state.user = {
            name: userName,
            loggedIn: true,
        };
    },
    remove(state) {
        state.user = { loggedIn: false };
    },
};
