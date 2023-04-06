import { useState } from 'react'
import Button from '../../common/Button/Button'
import TextInput from '../../common/TextInput/TextInput'
import Form from 'react-bootstrap/Form'
import { addPost } from '../../../redux/subreducers/postReducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddPostForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishedDate, setPublishedDate] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [content, setContent] = useState('')

  const handleAddPost = () => {
    dispatch(
      addPost({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
      })
    )
    navigate('/')
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="d-block">
        <label>Title</label>
        <TextInput
          placeholder="Enter title"
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
        />
        <label>Author</label>
        <TextInput
          placeholder="Enter author"
          value={author}
          onChange={(e: any) => setAuthor(e.target.value)}
        />
        <label>Published</label>

        <TextInput
          placeholder='Enter date in format "DD-MM-YYYY"'
          value={publishedDate}
          onChange={(e: any) => setPublishedDate(e.target.value)}
        />
        <label>Short description</label>
        <Form.Control
          as="textarea"
          className="mb-4"
          placeholder="Leave short description here"
          style={{ height: '120px' }}
          value={shortDescription}
          onChange={(e: any) => setShortDescription(e.target.value)}
        />
        <label>Main description</label>
        <Form.Control
          as="textarea"
          className="mb-4"
          placeholder="Leave main content here"
          style={{ height: '120px' }}
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
        />
        <Button onClick={handleAddPost}>Add new post</Button>
      </div>
    </div>
  )
}

export default AddPostForm
