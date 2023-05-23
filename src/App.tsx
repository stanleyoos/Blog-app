import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/pages/About/About'
import Home from './components/pages/Home/Home'
import SinglePost from './components/pages/SinglePost/SinglePost'
import PostAdd from './components/pages/PostAdd/PostAdd'
import PostEdit from './components/pages/PostEdit/PostEdit'
import NotFound from './components/pages/NotFound/NotFound'
import { Container } from 'react-bootstrap'
import Header from './components/views/Header/Header'
import Footer from './components/views/Footer/Footer'
import Categories from './components/pages/Categories/Categories'
import Category from './components/pages/Category/Category'

function App(): JSX.Element {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
