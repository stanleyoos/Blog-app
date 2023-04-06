import { addPost } from '../../../redux/subreducers/postReducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PostForm from '../PostForm/PostForm'
import { PostInterface } from '../../../redux/initialState'

const AddPostForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddPost = (post: PostInterface) => {
    dispatch(addPost(post))
    navigate('/')
  }
  return <PostForm action={handleAddPost} actionText="Add post" />
}

export default AddPostForm
