import PostForm from '../PostForm/PostForm'
import { useDispatch, useSelector } from 'react-redux'
import { PostInterface } from '../../../redux/initialState'
import { editPost, getSinglePost } from '../../../redux/subreducers/postReducer'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const EditPostForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { id } = useParams()
  const post = useSelector((state) => getSinglePost(state, id))
  const handleEditPost = (post: PostInterface) => {
    dispatch(editPost(post))
    navigate('/')
  }
  if (!post) return <Navigate to="/" />
  return <PostForm action={handleEditPost} actionText="Edit post" post={post} />
}

export default EditPostForm
