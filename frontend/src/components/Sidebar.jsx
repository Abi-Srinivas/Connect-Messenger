import SearchInput from "./SearchInput"

const Sidebar = () => {
    return (
        <div>
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <LoggoutButton />
        </div>
    )
}

export default Sidebar