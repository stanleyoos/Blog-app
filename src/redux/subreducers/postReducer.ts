import shortid from 'shortid'

// selectors
export const getAllPosts = (state: any) => state.posts

export const getSinglePost = (state: any, id: string | undefined) =>
  state.posts.filter((post: any) => post.id === id)[0]
// actions

export const deletePost = (payload: any) => ({ type: DELETE_POST, payload })
export const addPost = (payload: any) => ({ type: ADD_POST, payload })

const createActionName = (actionName: string): string =>
  `app/posts/${actionName}`
const DELETE_POST = createActionName('DELETE_POST')
const ADD_POST = createActionName('ADD_POST')

const postsReducer = (statePart = [], action: any): any => {
  switch (action.type) {
    case DELETE_POST:
      return statePart.filter((post: any) => post.id !== action.payload)
    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid() }]
    default:
      return statePart
  }
}

export default postsReducer
