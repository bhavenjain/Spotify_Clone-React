export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null
  // token:
  //   'BQAKVOwUneOppD58LuL5NXHFy56G7b90BSY453hTL-4RVnHHfd49jfoEtaL9c_5dVx09AcNqrXrNDDFfHRgQUYC6iptTuFjcH9mg4ogMEgbag_F7852qvZGOfKd3inxu_gRb9nkXuxI7hlG-G-SbZ9enGlmAAREuXqaPjkLLK3SOMEZ-QFc_'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }
    default:
      return state
  }
}

export default reducer
