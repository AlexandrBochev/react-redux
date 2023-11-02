import { Link } from "react-router-dom"
import { InfoBlock } from "../../components/InfoBlock/InfoBlock"
import { DataType } from "../../models/models"
import { useDispatch, useSelector } from "react-redux"
import { Bin } from "../../components/Icons/Bin"
import { deleteItem, fetchData } from "../../store/dataSlice"
import { useEffect } from "react"

const Users = () => {
  const dispatch: any = useDispatch()

  useEffect(() => {
    dispatch(fetchData('users'))
  }, [dispatch])

  const { status, error, data } = useSelector((state: { data: { status: string, error: string, data: DataType[] } }) => state.data)

  return (
    <>
      <h1 className="mb-4 font-semibold text-lg">Users</h1>
      {error && <h4>Error: {error}</h4>}
      {status === 'loading' ? <h4>Loading...</h4> : <ul>
        {data.map(user =>
          <li key={user.id} className="relative">
            <Link to={`/users/${ user.id }`}>
              <InfoBlock title={ user.name } email={ user.email } />
            </Link>
            <div
              onClick={() => dispatch(deleteItem({ path: 'users', id: user.id }))} 
              className="absolute top-4 right-4 ml-4 text-red-600 cursor-pointer z-10"
            >
              <Bin />
            </div>
          </li>)}
      </ul>}
    </>
  )
}

export { Users }