import styles from "../styles/chat.module.css"
import SearchBar from './SearchBar';
import Members from "./Members";
export default function RightSideBar({ members }) {
    return (
        <div className={styles.rightSidBar}>
            <h1>Members</h1>
            <SearchBar />
            <Members members={members} />
        </div>
    )
}