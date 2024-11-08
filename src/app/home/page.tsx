import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link href="/user/123">
        跳转到目标页面: user123
      </Link>
    </>
  )
}
export default Home;