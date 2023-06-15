import { useRemoveUserMutation } from "../store"
import { GoTrashcan } from "react-icons/go"
import Button from "./Button"
import ExpandablePanel from "./ExpandablePanel"
import AlbumsList from "./AlbumsList"

export default function UsersListItem({ user }) {
  const [removeUser, results] = useRemoveUserMutation()

  function handleClick() {
    removeUser(user)
  }

  const header = (
    <>
      <Button onClick={handleClick} loading={results.isLoading} className="mr-3">
        <GoTrashcan />
      </Button>
      {user.name}
    </>
  )

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  )
}
