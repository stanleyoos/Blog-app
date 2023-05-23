export interface PostInterface {
  id?: string
  title: string
  shortDescription: string
  content: string
  publishedDate: Date
  author: string
  category: string
}

export interface CategoryInterface {
  id: number,
  name: string
}

const initialState: { posts: PostInterface[], categories: CategoryInterface[] } = {
  posts: [
    {
      id: '1',
      title: 'First title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('04/11/2023'),
      author: 'John Doe',
      category: "Sport"
    },
    {
      id: '2',
      title: 'Second title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('09/02/2021'),
      author: 'John Doe',
      category: "Movies"
    },
    {
      id: '3',
      title: 'Third title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('01/22/2020'),
      author: 'John Doe',
      category: "Music"
    },
    {
      id: '4',
      title: 'Fourth title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('01/22/2023'),
      author: 'John Doe',
      category: "Computers"
    },
    {
      id: '5',
      title: 'Title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('01/22/2020'),
      author: 'John Doe',
      category: "Computers"
    },
    {
      id: '6',
      title: 'Title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('01/22/2020'),
      author: 'John Doe',
      category: "Music"
    },
    {
      id: '7',
      title: 'Title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('01/22/2020'),
      author: 'John Doe',
      category: "Computers"
    },
    {
      id: '8',
      title: 'Title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('01/22/2020'),
      author: 'John Doe',
      category: "Music"
    },
    {
      id: '9',
      title: 'Title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('01/22/2020'),
      author: 'John Doe',
      category: "Music"
    },
  ],
  categories: [
    {id: 1, name: "Sport"},
    {id: 2, name: "Movies"},
    {id: 3, name: "Music"},
    {id:4, name: "Computers"}
  ]
}

export default initialState
