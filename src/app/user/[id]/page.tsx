'use client'
import { useEffect, useState } from 'react';

// 定义用户数据的类型
interface User {
  id: number;
  name: string;
}

export default function User() {
  // 明确设置 `user` 类型为 `User[]`，`error` 为 `string | null`
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 在组件加载时调用 API 获取数据
    const fetchData = async () => {
      try {
        const res = await fetch('/api/user');
        
        if (res.ok) {
          const data: User[] = await res.json(); // 明确指定返回的数据类型为 `User[]`
          console.log(data);  // 打印从 API 获取的数据
          setUser(data); // 更新状态，保存用户数据
        } else {
          console.error('API 请求失败', res.status);
        }
      } catch (err: unknown) {
        // 使用类型保护，检查 err 是否是 Error 类型
        if (err instanceof Error) {
          setError(err.message); // 捕获错误并设置错误状态
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    fetchData();
  }, []); // 空依赖数组意味着这个请求只会在页面加载时触发一次

  return (
    <div>
      <h1>User List</h1>
      {error && <p>Error: {error}</p>}
      {user.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {user.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
