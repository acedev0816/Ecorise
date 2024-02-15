import styles from './sidebar.module.css';

export default function SideBar({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className={styles.sidebar}>
            {children}
        </div>
    )
}