import styles from "../styles/chat.module.css"

export default function SearchBar(props) {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder="Search" />
        </div>
    )
}