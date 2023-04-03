// selectors
export const getAllPosts = (state: any) => state.posts
// actions

const createActionName = (actionName: string): string =>
  `app/posts/${actionName}`

const postsReducer = (statePart = [], action: any): any => {
  switch (action.type) {
    default:
      return statePart
  }
}

export default postsReducer
