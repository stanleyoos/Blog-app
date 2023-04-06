import { PostInterface } from '../../../redux/initialState'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Post = ({
  id,
  title,
  shortDescription,
  publishedDate,
  author,
}: PostInterface) => {
  return (
    <Card className="mx-3 my-2 " style={{ width: '22rem' }}>
      <Card.Body>
        <Card.Title className="mb-4">{title}</Card.Title>

        <p className="mb-1 p-0">
          <strong>Author: </strong>
          {author}
        </p>
        <p className="m-0 p-0">
          <strong>Published: </strong>
          {publishedDate}
        </p>
        <Card.Text className="mb-4">{shortDescription}</Card.Text>
        <Link className="text-decoration-none" to={`/post/${id}`}>
          <Button variant="light">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Post
