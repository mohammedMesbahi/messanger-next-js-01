import styles  from '../styles/chat.module.css'
export default function Chat({children,props}){
    return (
        <>
            <div className={styles.container} >
                {children}
            </div>
        </>
    )
}