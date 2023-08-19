import { useState } from 'react'
import { IUser } from "../interface"



interface ISearchBar {
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
}



const SearchBar:React.FC<ISearchBar> = ({ setUsers }) => {
    const [searchInput, setSearchInput] = useState('')


    /*-------Fetch-Searched-User-------*/
    const fetchSearchedUser = async (userName: string) => {
        const data:IUser[] = await (await fetch(`https://jsonplaceholder.typicode.com/users?query=${userName}`)).json()

        const searchedUsers = data?.filter(user => {
            return userName && user && user.name && user.name.toLowerCase().includes(userName.toLocaleLowerCase())
        })
        setUsers(searchedUsers)
    }


  
    /*-------Handle-Change-------*/
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
        fetchSearchedUser(e.target.value)
    }


    return (
        <>
            <input
                type='text' 
                placeholder="search user..." 
                value={searchInput} 
                onChange={e => handleChange(e)} 
                className="w-full px-2 py-3 border-none outline-none text-black"
            />
        </>
    )
}

export default SearchBar