import { promisePool } from '../../lib/db';

// app/api/user/route.js
export async function GET(req, res) {
  const [data] = await promisePool.query('SELECT * FROM users LIMIT 2');
  // 返回数据
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
