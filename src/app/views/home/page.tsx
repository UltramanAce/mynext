import '../../styles/common.module.css'

import Search from '../../components/search'
import PageFooter from '../../components/pageFooter/page'
import SideMenu from './sideMenu'
import Panel1 from '../../components/panel1/page'

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
