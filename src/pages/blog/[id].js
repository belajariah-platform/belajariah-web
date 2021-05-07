import { StoryAPI } from '../../api'
import { BlogDetail } from '../../containers'

export const getStaticPaths = async () => {
  const stateRequest = ({
    skip: 0,
    take: 1000,
    filter: [],
    filterString: '[]',
  })

  const res = await StoryAPI.GetAllStory(stateRequest.skip, stateRequest.take, stateRequest.filterString)
  const data = res.data.data
  const paths = data.map((story) => {
    return {
      params: { id: story.ID.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const stateRequest = ({
    skip: 0,
    take: 1,
    filter: [],
    filterString: `[{"type": "integer", "field" : "ID", "value": "${id}"}]`,
  })

  const res = await StoryAPI.GetAllStory(stateRequest.skip, stateRequest.take, stateRequest.filterString)
  const data = res.data.data

  return {
    props: { story: data }
  }
}

export default BlogDetail