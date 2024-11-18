import { promisePool } from '../../lib/db';


// 获取菜单列表
export async function GET(req) {
  try {
    // 这里可以接入数据库获取数据
    const [data] = await promisePool.query('SELECT * FROM menus')

    // 返回菜单列表的响应
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // 错误处理
    return new Response(JSON.stringify({ error: '无法获取菜单数据' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
