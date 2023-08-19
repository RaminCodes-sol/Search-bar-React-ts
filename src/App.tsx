import { useState } from "react"
import { IUser } from "./interface"
import User from "./components/User"
import SearchBar from "./components/SearchBar"



const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  
  return (
    <main className="w-full max-w-[550px] mx-auto flex flex-col gap-2 px-2 py-14">

      {/*-------SearchInput-------*/}
      <section className="w-full mx-auto border rounded overflow-hidden">
        <SearchBar setUsers={setUsers} />
      </section>
      
      {/*-------Searched-User-------*/}
      <section className={`${users.length > 0 && "h-[270px] border px-2 py-1 bg-white overflow-y-scroll"}`}>
        {
          users && users.length > 0 && users?.map(user => <User key={user.id} name={user.name} email={user.email} />)
        }
      </section>

    </main>
  )
}

export default App
