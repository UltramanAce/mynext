import mysql from 'mysql2';

const pool = mysql.createPool({
  host: process.env.DB_HOST,             // 数据库主机地址
  user: process.env.DB_USER,             // 数据库用户名
  password: process.env.DB_PASSWORD,     // 数据库密码
  database: process.env.DB_NAME,         // 数据库名
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306, // 确保 port 是 number 类型
  waitForConnections: true,              // 是否等待连接池中的连接
  connectionLimit: 10,                   // 最大连接数
  queueLimit: 0                          // 最大排队数
});

// 使用连接池进行查询
const promisePool = pool.promise();

export { promisePool };
