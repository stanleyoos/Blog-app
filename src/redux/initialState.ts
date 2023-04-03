interface Post {
  id: string
  title: string
  shortDescription: string
  content: string
  publishedDate: string
  author: string
}

const initialState: { posts: Post[] } = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '10-04-2021',
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '05-07-2023',
      author: 'John Doe',
    },
    {
      id: '3',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '01-11-2022',
      author: 'John Doe',
    },
  ],
}

export default initialState
