import UsersList from "./components/UsersList"

export default function App() {
  return (
    <div className="container mx-auto">
      <UsersList />
    </div>
  )
}

/* 
*** remember to run json server ***
  json-server --watch db.json --port 3005

  Resources
  http://localhost:3005/users
  http://localhost:3005/albums
  http://localhost:3005/photos
*/
