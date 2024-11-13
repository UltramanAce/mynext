import styles from '../public/styles/common.module.css'

import Search from './components/search'
import Home from './home/page'

export default function Page() {
  return (
    <div className={styles.title}>
      <Search></Search>
      <Home></Home>
    </div>
  );
}
