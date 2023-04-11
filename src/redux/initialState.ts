export interface PostInterface {
  id?: string
  title: string
  shortDescription: string
  content: string
  publishedDate: Date | string | null
  author: string
}

const initialState: { posts: PostInterface[] } = {
  posts: [
    {
      id: '1',
      title: 'First title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-01-2023'),
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'Second title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('12-04-2019'),
      author: 'John Doe',
    },
    {
      id: '3',
      title: 'Third title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('07-05-2021'),
      author: 'John Doe',
    },
  ],
}

export default initialState
