import styles from '../../styles/header.module.css'
import baseStyles from '../../styles/base.module.css'

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={baseStyles.container}>
          <h2>Welcome to the MetaChat App</h2>
        </div>
      </header>
    </>
  )
}

export default Header
