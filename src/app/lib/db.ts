import mysql from 'mysql2';

// 创建数据库连接池
const pool = mysql.createPool({
  host: process.env.DB_HOST,        // 数据库主机地址
  user: process.env.DB_USER,        // 数据库用户名
  password: process.env.DB_PASSWORD, // 数据库密码
  database: process.env.DB_NAME,    // 使用的数据库名
  port: process.env.DB_PORT || 3306, // 默认端口3306
  waitForConnections: true,         // 等待连接
  connectionLimit: 10,              // 最大连接数
  queueLimit: 0                     // 连接队列限制
});

// 使用连接池进行查询
const promisePool = pool.promise();

export { promisePool };
