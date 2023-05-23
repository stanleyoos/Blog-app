import shortid from 'shortid'
import { PostInterface } from '../initialState'

// selectors
export const getAllPosts = (state: any) => state.posts
export const getSinglePost = (state: any, id: string | undefined) =>
  state.posts.find((post: any) => post.id === id)
export const getAllPostsByCategory = (state: any, categoryName: string | undefined) => state.posts.filter((post: any) => post.category.toLowerCase() === categoryName)

// actions
export const deletePost = (payload: any) => ({ type: DELETE_POST, payload })
export const addPost = (payload: any) => ({ type: ADD_POST, payload })
export const editPost = (payload: any) => ({ type: EDIT_POST, payload })

const createActionName = (actionName: string): string =>
  `app/posts/${actionName}`

const DELETE_POST = createActionName('DELETE_POST')
const ADD_POST = createActionName('ADD_POST')
const EDIT_POST = createActionName('EDIT_POST')

const postsReducer = (statePart: PostInterface[] = [], action: any): any => {
  switch (action.type) {
    case DELETE_POST:
      return statePart.filter((post: any) => post.id !== action.payload)
    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid() }]
    case EDIT_POST:
      return statePart.map((post) =>
        post.id === action.payload.id ? { ...action.payload } : post
      )
    default:
      return statePart
  }
}

export default postsReducer
