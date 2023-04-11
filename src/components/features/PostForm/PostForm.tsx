import { useState } from 'react'
import TextInput from '../../common/TextInput/TextInput'
import Form from 'react-bootstrap/Form'
import Button from '../../common/Button/Button'
import { PostInterface } from '../../../redux/initialState'
import ReactQuill from 'react-quill'
import DatePicker from 'react-datepicker'
import 'react-quill/dist/quill.snow.css'
import 'react-datepicker/dist/react-datepicker.css'

interface PostFormInterface {
  action: ({}: PostInterface) => void
  actionText: string
  post?: PostInterface
}

const PostForm = ({ action, actionText, post }: PostFormInterface) => {
  //const [startDate, setStartDate] = useState(new Date())
  const [title, setTitle] = useState(post?.title || '')
  const [author, setAuthor] = useState(post?.author || '')
  const [publishedDate, setPublishedDate] = useState<Date | null>(
    new Date(post?.publishedDate || '')
  )
  const [shortDescription, setShortDescription] = useState(
    post?.shortDescription || ''
  )
  const [content, setContent] = useState(post?.content || '')

  const handleSubmit = () => {
    action({
      id: post?.id,
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

        <DatePicker
          selected={publishedDate}
          onChange={(date) => setPublishedDate(date)}
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

        <ReactQuill
          className="mb-4"
          theme="snow"
          value={content}
          onChange={setContent}
        />
        <Button onClick={handleSubmit}>{actionText}</Button>
      </div>
    </div>
  )
}

export default PostForm
