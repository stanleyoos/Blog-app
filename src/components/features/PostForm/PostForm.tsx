import { useState } from 'react'
import TextInput from '../../common/TextInput/TextInput'
import Form from 'react-bootstrap/Form'
import Button from '../../common/Button/Button'
import { PostInterface } from '../../../redux/initialState'

interface PostFormInterface {
  action: ({}: PostInterface) => void
  actionText: string
  post?: PostInterface
}

const PostForm = ({ action, actionText, ...props }: PostFormInterface) => {
  const [title, setTitle] = useState(props.title || '')
  const [author, setAuthor] = useState(props.author || '')
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '')
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  )
  const [content, setContent] = useState(props.content || '')

  const handleSubmit = () => {
    console.log('Submit')
    action({
      title,
      author,
      publishedDate,
      shortDescription,
      content,
    })
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
        <Button onClick={handleSubmit}>{actionText}</Button>
      </div>
    </div>
  )
}

export default PostForm
