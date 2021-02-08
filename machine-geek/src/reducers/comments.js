/*
 * @Autor: GeekMzy
 * @Date: 2021-02-02 14:11:08
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-02 14:18:54
 * @FilePath: /MachineGeek2/comment/src/reducers/comments.js
 */
//action types
const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

//reducer
export default function (state, action) {
  if (!state) {
    state = { comments: [] }
  }
  switch (action.type) {
    case INIT_COMMENTS:
      return { comments: action.comments }
    case ADD_COMMENT:
      return {
        comments: [...state.comments, action.comments]
      }
    case DELETE_COMMENT:
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}

//action creators
export const initComments = (comments) => {
  return { type: INIT_COMMENTS, comments }
}
export const addComment = (comment) => {
  return { type: ADD_COMMENT, comment }
}
export const deleteComment = (commentIndex) => {
  return { type: DELETE_COMMENT, commentIndex }
}