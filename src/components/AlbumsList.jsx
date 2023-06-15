import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store"
import Skeleton from "./Skeleton"
import Button from "./Button"
import AlbumsListItem from "./AlbumsListItem"

export default function AlbumsList({ user }) {
  const { data, isFetching, error } = useFetchAlbumsQuery(user) // this is called automatically when the component is rendered and when the user changes
  const [addAlbum, results] = useAddAlbumMutation()

  function handleAddAlbum() {
    addAlbum(user)
  }

  let content
  if (isFetching) {
    content = <Skeleton times={3} className="h-10 w-full" />
  } else if (error) {
    content = <div>Error fetching albums</div>
  } else {
    content = data.map((album) => (
      <AlbumsListItem key={album.id} album={album} />
    ))
  }

  return (
    <>
      <div className="flex items-center justify-between m-2">
        <h3 className="text-lg font-bold">
          Albums for user {user.name}
        </h3>
        <Button onClick={handleAddAlbum} loading={results.isLoading}>
          + Add album
        </Button>
      </div>
      <div>{content}</div>
    </>
  )
}
