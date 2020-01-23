// import actions
import { GET_GIT_DATA, LOADING } from "../actions";

// initialState
const initialState = {
  isLoading: false,
  user: {
    login: "mpaolodr",
    id: 53581264,
    node_id: "MDQ6VXNlcjUzNTgxMjY0",
    avatar_url: "https://avatars3.githubusercontent.com/u/53581264?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/mpaolodr",
    html_url: "https://github.com/mpaolodr",
    followers_url: "https://api.github.com/users/mpaolodr/followers",
    following_url:
      "https://api.github.com/users/mpaolodr/following{/other_user}",
    gists_url: "https://api.github.com/users/mpaolodr/gists{/gist_id}",
    starred_url: "https://api.github.com/users/mpaolodr/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/mpaolodr/subscriptions",
    organizations_url: "https://api.github.com/users/mpaolodr/orgs",
    repos_url: "https://api.github.com/users/mpaolodr/repos",
    events_url: "https://api.github.com/users/mpaolodr/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/mpaolodr/received_events",
    type: "User",
    site_admin: false,
    name: "mdelrosario",
    company: null,
    blog: "",
    location: "Sanford, Maine",
    email: null,
    hireable: null,
    bio: null,
    public_repos: 45,
    public_gists: 0,
    followers: 22,
    following: 23,
    created_at: "2019-08-01T19:34:53Z",
    updated_at: "2020-01-23T20:01:38Z"
  },
  error: {}
};

export const gitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GIT_DATA:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };

    case LOADING:
      return {
        ...state,
        isLoading: true
      };
    // default case
    default:
      return state;
  }
};
