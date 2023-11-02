import { useParams } from "react-router-dom"
import { InfoBlock } from "../../components/InfoBlock/InfoBlock"
import { Button } from "../../components/Button/Button"
import { DataType } from "../../models/models"
import { useSelector } from "react-redux"

const PostDetails = () => {
  const { postId } = useParams()
  
  const post: DataType | undefined = useSelector(
    (state: { data: { data: DataType[] } }) => 
    state.data.data.find(
      post => post.id === Number(postId)
    )
  )

  return (
    <>
      {post && <div>
        <h1 className="mb-4 font-semibold text-lg">{ post.title }</h1>
        <InfoBlock body={ post.body } />
        <Button linck="/posts">Go back</Button>
      </div>}
    </>
  )
}

export { PostDetails }