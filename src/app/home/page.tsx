import Link from 'next/link';
import { Button } from 'antd';

const Home = () => {
  return (
    <>
      <Button type="primary">Primary</Button>
      <Link href="/user/123">
        跳转到目标页面: user123
      </Link>
    </>
  )
}
export default Home;