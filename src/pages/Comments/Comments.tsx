import { Link } from "react-router-dom"
import { InfoBlock } from "../../components/InfoBlock/InfoBlock"
import { DataType } from "../../models/models"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { deleteItem, fetchData } from "../../store/dataSlice"
import { Bin } from "../../components/Icons/Bin"

const Comments = () => {
  const dispatch: any = useDispatch()

  useEffect(() => {
    dispatch(fetchData('comments?_limit=20'))
  }, [dispatch])

  const { status, error, data } = useSelector((state: { data: { status: string, error: string, data: DataType[] } }) => state.data)

  return (
    <>
      <h1 className="mb-4 font-semibold text-lg">Comments</h1>
      {error && <h4>Error: {error}</h4>}
      {status === 'loading' ? <h4>Loading...</h4> :  <ul>
        {data.map(comment =>
          <li key={comment.id} className="relative">
            <Link to={`/comments/${ comment.id }`}>
              <InfoBlock title={ comment.name } />
            </Link>
            <div
              onClick={() => dispatch(deleteItem({ path: 'comments', id: comment.id }))} 
              className="absolute top-4 right-4 ml-4 text-red-600 cursor-pointer z-10"
            >
              <Bin />
            </div>
          </li>
        )}
      </ul>}
    </>
  )
}

export { Comments }