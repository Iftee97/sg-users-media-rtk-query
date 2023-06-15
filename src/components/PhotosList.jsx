import { useFetchPhotosQuery, useAddPhotoMutation } from "../store"
import PhotosListItem from "./PhotosListItem"
import Button from "./Button"
import Skeleton from "./Skeleton"

export default function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album)
  const [addPhoto, addPhotoResults] = useAddPhotoMutation()

  function handleAddPhoto() {
    addPhoto(album)
  }

  let content
  if (isFetching) {
    content = <Skeleton times={4} className="h-8 w-8" />
  } else if (error) {
    content = <div>Error fetching photos</div>
  } else {
    content = data.map((photo) => (
      <PhotosListItem key={photo.id} photo={photo} />
    ))
  }

  return (
    <div>
      <div className="m-2 flex items-center justify-between">
        <h3 className="text-lg font-bold">
          Photos in {album.title}
        </h3>
        <Button onClick={handleAddPhoto} loading={addPhotoResults.isLoading}>
          + Add photo
        </Button>
      </div>
      <div className="mx-8 flex flex-wrap items-center justify-center">
        {content}
      </div>
    </div>
  )
}
