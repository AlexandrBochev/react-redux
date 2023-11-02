import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteItem, fetchData } from "../../store/dataSlice"
import { DataType } from "../../models/models"
import { Bin } from "../../components/Icons/Bin"
import { Link } from "react-router-dom"

const Photos = () => {
  const dispatch: any = useDispatch()

  useEffect(() => {
    dispatch(fetchData('photos?_limit=20'))
  }, [dispatch])

  const { status, error, data } = useSelector((state: { data: { status: string, error: string, data: DataType[] } }) => state.data)

  return (
    <>
      <h1 className="mb-4 font-semibold text-lg">Photos</h1>
      {error && <h4>Error: {error}</h4>}
      {status === 'loading' ? <h4>Loading...</h4> : <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.map(photo => (
          <li key={photo.id} className="relative flex flex-col items-center">
            <Link to={`/photos/${ photo.id }`}>
              <img src={ photo.url } width={300} height={300} alt={ photo.title } />
              <div title={ photo.title } className="absolute left-0 bottom-0 w-full h-9">
                <div className="w-full h-full bg-black opacity-50" />
                <p className="absolute left-0 bottom-0 text-white text-sm p-2">{ photo.title && photo.title.slice(0, 20) + '...' }</p>
              </div>
            </Link>
            <div
              onClick={() => dispatch(deleteItem({ path: 'photos', id: photo.id }))} 
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

export { Photos }