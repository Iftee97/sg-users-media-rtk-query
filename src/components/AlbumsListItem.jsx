import { useRemoveAlbumMutation } from "../store"
import ExpandablePanel from "./ExpandablePanel"
import Button from "./Button"
import PhotosList from "./PhotosList"
import { GoTrashcan } from "react-icons/go"

export default function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation()

  function handleClick() {
    removeAlbum(album)
  }

  const header = (
    <>
      <Button onClick={handleClick} loading={results.isLoading} className="mr-2">
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  )

  return (
    <ExpandablePanel header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  )
}
