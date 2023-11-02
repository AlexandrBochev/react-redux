import { useParams } from "react-router"
import { DataType } from "../../models/models"
import { useSelector } from "react-redux"
import { Button } from "../../components/Button/Button"
import { InfoBlock } from "../../components/InfoBlock/InfoBlock"

const PhotoDetails = () => {
  const { photoId } = useParams()

  const photo: DataType | undefined = useSelector(
    (state: { data: { data: DataType[] } }) => 
    state.data.data.find(
      photo => photo.id === Number(photoId)
    )
  )

  return (
    <>
      {photo && <div>
        <h1 className="mb-4 font-semibold text-lg">{photo.title}</h1>
        <InfoBlock url={ photo.url } />
        <Button linck="/">Go back</Button>
      </div>}
    </>
  )
}

export { PhotoDetails }