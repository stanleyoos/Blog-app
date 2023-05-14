import { useSelector, useDispatch } from 'react-redux'
import { getSinglePost } from '../../../redux/subreducers/postReducer'
import { Navigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import { deletePost } from '../../../redux/subreducers/postReducer'
import dateToStr from '../../../utils/dateToStr'

const SinglePost = () => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const { id } = useParams()
  const post = useSelector((state) => getSinglePost(state, id))
  const handleDelete = () => {
    dispatch(deletePost(id))
    setShowModal(false)
  }
  if (!post) return <Navigate to={'/'} />
  return (
    <div className="d-flex justify-content-center">
      <Card className="mx-3 my-2 " style={{ width: '40rem' }}>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="mb-4">{post.title}</Card.Title>
            <div>
              <Link
                className="text-decoration-none mr-5"
                to={`/post/edit/${id}`}
              >
                <Button className="text-primary" variant="light">
                  Edit
                </Button>
              </Link>

              <Button
                onClick={() => setShowModal(!showModal)}
                variant="light"
                className="text-danger"
              >
                Delete
              </Button>
            </div>
          </div>
          <p className="mb-1 p-0">
            <strong>Author: </strong>
            {post.author}
          </p>
          <p className="m-0 p-0">
            <strong>Published: </strong>
            {dateToStr(post.publishedDate)}
          </p>
          <Card.Text className="my-4">
            <p dangerouslySetInnerHTML={{ __html: post.content }} />
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(!showModal)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SinglePost
