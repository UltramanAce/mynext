'use client'
import { useEffect, useState } from 'react';

export default function User() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 在组件加载时调用 API 获取数据
    const fetchData = async () => {
      try {
        const res = await fetch('/api/user');
        
        if (res.ok) {
          const data = await res.json();
          console.log(data);  // 打印从 API 获取的数据
          setUser(data); // 更新状态，保存用户数据
        } else {
          console.error('API 请求失败', res.status);
        }
      } catch (err) {
        setError(err.message); // 捕获错误并设置错误状态
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
