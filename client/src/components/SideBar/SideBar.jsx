import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const SideBar = () => {
  return (
    <div className="flex flex-col border-r p-4 border-slate-500">
        <SearchInput/>
        <div className="divider p-3"></div>
        <Conversations/>
         <LogoutButton/>
    </div>
  )
}

export default SideBar