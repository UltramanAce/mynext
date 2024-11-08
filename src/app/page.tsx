import styles from '../public/styles/common.module.css'
import Home from './home/page'

export default function Page() {
  return (
    <div className={styles.title}>
      主页
      <Home></Home>
    </div>
  );
}
