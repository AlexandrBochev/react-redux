import { InfoBlock } from "../../components/InfoBlock/InfoBlock"
import { Link } from "react-router-dom"
import { DataType } from "../../models/models"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { deleteItem, fetchData } from "../../store/dataSlice"
import { Bin } from "../../components/Icons/Bin"

const Posts = () => {
  const dispatch: any = useDispatch()

  useEffect(() => {
    dispatch(fetchData('posts?_limit=20'))
  }, [dispatch])

  const { status, error, data } = useSelector((state: { data: { status: string, error: string, data: DataType[] } }) => state.data)

  return (
    <>
      <h1 className="mb-4 font-semibold text-lg">Posts</h1>
      {status === 'loading' ? <h2>Loading...</h2> : <ul>
        {data.map(post => (
          <li key={post.id} className="relative">
            <Link to={`/posts/${ post.id }`}>
              <InfoBlock title={ post.title } />
            </Link>
            <div
              onClick={() => dispatch(deleteItem({ path: 'posts', id: post.id }))} 
              className="absolute top-4 right-4 ml-4 text-red-600 cursor-pointer z-10"
            >
              <Bin />
            </div>
          </li>
        ))}
      </ul>}
    </>
  )
}

export { Posts }