import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../../../redux/subreducers/postReducer'
import { useSelector } from 'react-redux'
import { PostInterface } from '../../../redux/initialState'
import Post from '../Post/Post'

const AllPosts = () => {
  const posts = useSelector(getAllPosts)
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>All posts</h1>

        <Link className="text-decoration-none" to="/post/add">
          <Button variant="light">Add post</Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap  justify-content-center">
        {posts.map((post: PostInterface) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
    </>
  )
}

export default AllPosts
