import '../../styles/common.module.css'

import Search from '../../components/search'
import PageFooter from '../../components/PageFooter/page'
import SideMenu from './SideMenu'
import Panel1 from '../../components/Panel1/page'

export default function Home() {
  return (
    <>
      <Search></Search>
      <div className='flex'>
        <SideMenu></SideMenu>
        <Panel1></Panel1>
      </div>
      <PageFooter></PageFooter>
    </>
  );
}
