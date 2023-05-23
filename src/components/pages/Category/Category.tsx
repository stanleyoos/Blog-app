import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { getAllPostsByCategory } from "../../../redux/subreducers/postReducer"
import Post from "../../features/Post/Post"

const Category = () => {
    const {categoryName} = useParams()
    const categoryPosts = useSelector((state) => getAllPostsByCategory(state, categoryName))
  return (
    <div className="d-flex flex-wrap justify-content-center">{categoryPosts.map((post: any):any => (
        <Post {...post}/>
    ))}</div>
  )
}

export default Category