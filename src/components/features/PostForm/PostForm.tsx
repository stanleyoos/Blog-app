import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from '../../common/Button/Button'
import { CategoryInterface, PostInterface } from '../../../redux/initialState'
import ReactQuill from 'react-quill'
import DatePicker from 'react-datepicker'
import 'react-quill/dist/quill.snow.css'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './PostForm.module.scss'
import { useSelector } from 'react-redux'
import { getAllCategories } from '../../../redux/subreducers/categoryReducer'

interface PostFormInterface {
  action: ({}: PostInterface) => void
  actionText: string
  post?: PostInterface
}

const PostForm = ({ action, actionText, post }: PostFormInterface) => {
  const [title, setTitle] = useState(post?.title || '')
  const [author, setAuthor] = useState(post?.author || '')
  const [publishedDate, setPublishedDate] = useState<Date>(
    new Date(post?.publishedDate || new Date())
  )
  const [shortDescription, setShortDescription] = useState(
    post?.shortDescription || ''
  )
  const [content, setContent] = useState(post?.content || '')
  const [contentError, setContentError] = useState(false)
  const [category, setCategory] = useState(post?.category || 'undefined')

  const categories = useSelector(getAllCategories)

  const handleSubmit = () => {
    
    
    if (content !== '' ) {
      setContentError(false)
      action({
        id: post?.id,
        title,
        author,
        publishedDate,
        shortDescription,
        content,
        category
      })
    }
    else {
      setContentError(true)
    }
  }

  const {register, handleSubmit: validate, formState: {errors}} = useForm()

  return (
    <form className="d-flex justify-content-center">
      <div className="d-block">
          <Form.Label>Title</Form.Label>
          <Form.Control
          className='mb-2'
            {...register("title", { required: true, minLength: 3 })}
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text" 
            placeholder="Enter title"
          />
          {errors.title && <span className={styles.errorSpan}>This field is required and must be at least 3 characters long</span>}
        
        <Form.Label className='mt-4 d-block'>Author</Form.Label>
        <Form.Control
            {...register("author", {required: true, minLength: 3} )}
            placeholder="Enter author"
            value={author}
            onChange={(e: any) => setAuthor(e.target.value)}
          />
        {errors.author && <span className={styles.errorSpan}>This field is required and must be at least 3 characters long</span>}
        <Form.Label className='mt-4 d-block'>Category</Form.Label>
        
        <Form.Select  value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category: CategoryInterface) => (<option key={category.id} value={category.name}>{category.name}</option>))}
        </Form.Select>
        <Form.Label className='mt-4 d-flex'>Published</Form.Label>
        <DatePicker
          selected={publishedDate}
          onChange={(date) => setPublishedDate(date as Date)}
          
        />
        
        <Form.Label className='mt-4 d-block'>Short description</Form.Label>
        <Form.Control
          {...register('shortDescription', {required: true, minLength: 20})}
          as="textarea"
          placeholder="Leave short description here"
          style={{ height: '120px' }}
          value={shortDescription}
          onChange={(e: any) => setShortDescription(e.target.value)}
        />
        {errors.shortDescription && <span className={styles.errorSpan}>This field is required and must be at least 20 characters long</span>}
        
        <Form.Label className=' d-block mt-4'>Main description</Form.Label>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
        />
        {contentError && <span className={styles.errorSpan}>This field can not be empty!</span>}
        <Button  onClick={validate(handleSubmit)}>{actionText}</Button>
      </div>
    </form>
  )
}

export default PostForm
