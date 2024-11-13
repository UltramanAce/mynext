import '../../styles/common.module.css'

import Search from '../../components/search'
import PageFooter from '../../components/PageFooter/page'
import SideMenu from './SideMenu'

export default function Home() {
  return (
    <>
      <Search></Search>
      <div>
        <SideMenu></SideMenu>
      </div>
      <PageFooter></PageFooter>
    </>
  );
}
