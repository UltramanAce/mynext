import './styles/common.module.css'

import Search from './components/search'
import Home from './home/page'
import PageFooter from './components/PageFooter'

export default function Page() {
  return (
    <>
      <Search></Search>
      <Home></Home>
      <PageFooter></PageFooter>
    </>
  );
}
