import '../../styles/common.module.css'

import Search from '../../components/search'
import PageFooter from '../../components/pageFooter/page'
import SideMenu from './sideMenu'
import Panel1 from '../../components/panel1/page'

const Home = async () => {
  // 获取商品列表数据
  const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product`)
  const list = await res.json()

  return (
    <>
      <Search></Search>
      <div className='flex'>
        <SideMenu></SideMenu>
        { 
          list.map(() => {
            return <Panel1></Panel1>
          }) 
        }
      </div>
      <PageFooter></PageFooter>
    </>
  );
}
export default Home