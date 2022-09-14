import { Moralis } from '../Icon'
import styles from '../../styles/footer.module.css'
import baseStyles from '../../styles/base.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={baseStyles.container}>
        <p>
          Created by: <strong>David Adeola</strong>
        </p>
        <Moralis />
      </div>
    </footer>
  )
}

export default Footer
