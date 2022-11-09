function addRepo(e, username) {
    return { type: "ADD", name: username.name, e: e }
}

export function asyncAddRepo(e, username) {
    return dispatch => {
        setTimeout(()=> {
            dispatch(addRepo(e, username))
        }, 2000)
    }
}
