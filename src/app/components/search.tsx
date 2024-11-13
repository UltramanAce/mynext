'use client'

import React, { useState } from "react";
import { Button, Input, Space } from 'antd';

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSearch}>
      <Space.Compact style={{ width: '100%' }}>
        <Input 
          type="text"
          placeholder="请输入你想找的商品"
          value={searchValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
        />
        <Button type="primary">搜索</Button>
      </Space.Compact>
    </form>
  );
};

export default Search;