import { HeaderUser, Footer } from '../../components'
import {
  Content,
  Container,
} from './blog.styled'

const Blog = () => {
  const isLogin = false

  const BlogList = () => {
    return(
      <Content>
        <p>Hello world</p>
      </Content>
    )
  }
  return (
    <Container>
      <HeaderUser variant='purple'/>
      <BlogList />
      <Footer />
    </Container>
  )
}

export default Blog
