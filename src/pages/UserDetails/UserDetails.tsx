import { useParams } from "react-router-dom"
import { InfoBlock } from "../../components/InfoBlock/InfoBlock"
import { Button } from "../../components/Button/Button"
import { DataType } from "../../models/models"
import { useSelector } from "react-redux"

const UserDetails = () => {
  const { userId } = useParams()

  const user: DataType | undefined = useSelector(
    (state: { data: { data: DataType[] } }) => 
    state.data.data.find(
      user => user.id === Number(userId)
    )
  )

  return (
    <>
    {user && <div>
      <h1 className="mb-4 font-semibold text-lg">{user.name}</h1>
      <InfoBlock email={ user.email } phone={ user.phone } website={ user.website } />
      <Button linck="/users">Go back</Button>
    </div>}
    </>
  )
}

export { UserDetails }
