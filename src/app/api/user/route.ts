import { promisePool } from '../../lib/db';

export async function GET() {
  const [data] = await promisePool.query('SELECT * FROM users LIMIT 2');
  // 返回数据
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
