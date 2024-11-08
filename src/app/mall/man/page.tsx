const getData = async () => {
  console.log(444)
  try {
    const res = await fetch('http://localhost:3000/api/man'); // 使用绝对路径
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null; // 处理错误的情况
  }
}

const Man = async () => {
  const data = await getData();
  console.log('man===', data)
  return (
    <>
      <div>男</div>
      <div>{data && JSON.stringify(data)}</div>
    </>
  )
};

export default Man