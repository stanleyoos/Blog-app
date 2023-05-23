import { useSelector } from "react-redux"
import { getAllCategories } from "../../../redux/subreducers/categoryReducer"
import { CategoryInterface } from "../../../redux/initialState"
import { Link } from "react-router-dom"
import styles from './Categories.module.scss'

const Categories = () => {

  const categories = useSelector(getAllCategories)

  return (
    <>
    <h1 className='my-4'>Categories</h1>
    <div className={styles.categoriesWrapper}>
    {categories.map((category: CategoryInterface): any => (
      <Link className={styles.category} key={category.id} to={`/category/${category.name.toLowerCase()}`}>{category.name}</Link>
    )
    )}
    </div>
    </>
  )
}

export default Categories