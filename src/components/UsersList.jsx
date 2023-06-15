import { useFetchUsersQuery, useAddUserMutation } from "../store"
import UsersListItem from "./UsersListItem"
import Skeleton from "./Skeleton"
import Button from "./Button"

export default function UsersList() {
  console.log('useFetchUsersQuery: >>>>>>>>>>', useFetchUsersQuery())
  const { data, isFetching, error } = useFetchUsersQuery()
  const [addUser, results] = useAddUserMutation()

  function handleAddUser() {
    // console.log('add user')
    addUser()
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl">
          Users
        </h1>
        <Button onClick={handleAddUser} loading={results.isLoading}>
          + Add user
        </Button>
      </div>
      {error ? (
        <div>Error fetching users</div>
      ) : (
        isFetching ? (
          <Skeleton times={6} className="h-10 w-full" />
        ) : (
          data.map((user) => (
            <UsersListItem key={user.id} user={user} />
          ))
        )
      )}
    </>
  )
}
