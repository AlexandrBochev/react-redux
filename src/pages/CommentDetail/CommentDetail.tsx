import { useParams } from "react-router-dom"
import { InfoBlock } from "../../components/InfoBlock/InfoBlock"
import { Button } from "../../components/Button/Button"
import { DataType } from "../../models/models"
import { useSelector } from "react-redux"

const CommentDetail = () => {
  const { commentId } = useParams()

  const comment: DataType | undefined = useSelector(
    (state: { data: { data: DataType[] } }) => 
    state.data.data.find(
      comment => comment.id === Number(commentId)
    )
  )

  return (
    <>
      {comment && <div>
        <h1 className="mb-4 font-semibold text-lg">{ comment.name }</h1>
        <InfoBlock body={ comment.body } email={ comment.email } />
        <Button linck="/comments">Go back</Button>
      </div>}
    </>
  )
}

export { CommentDetail }