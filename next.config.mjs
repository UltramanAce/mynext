/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img11.360buyimg.com', 'example.com'], // 允许的外部域名
  },
  async redirects() {
    return [
      {
        source: '/home', // 希望显示的url
        destination: '/views/home', // 实际的文件路径
        permanent: true // 永久重定向
      },
      {
        source: '/user/:id', // 匹配动态路由 /user/xxx
        destination: '/views/user/:id', // 重定向到 /views/user/xxx
        permanent: true // 是否为永久重定向 (301)
      },
      {
        source: '/mall',
        destination: '/views/mall',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
