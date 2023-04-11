export interface PostInterface {
  id?: string
  title: string
  shortDescription: string
  content: string
  publishedDate: Date
  author: string
}

const initialState: { posts: PostInterface[] } = {
  posts: [
    {
      id: '1',
      title: 'First title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('04/11/2023'),
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'Second title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('09/02/2021'),
      author: 'John Doe',
    },
    {
      id: '3',
      title: 'Third title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('01/22/2020'),
      author: 'John Doe',
    },
  ],
}

export default initialState
