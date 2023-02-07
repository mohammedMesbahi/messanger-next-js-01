import Profile from "./Profile"
import SearchBar from "./SearchBar"
import DirectChats from "./DirectChats"
import styles from "../styles/chat.module.css"
export default function LeftSidebar({ user, chats }) {
    return (
        <div className={styles.leftSidBar} >
            <Profile user={user}></Profile>
            <SearchBar></SearchBar>
            <DirectChats chats={chats}></DirectChats>
        </div>
    )
}