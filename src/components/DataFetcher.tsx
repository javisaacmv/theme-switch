import React, { useEffect, useMemo, useState } from "react";
import { Card } from "./Card";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const DataFetcher = () => {
  const [data, setData] = useState<Post[]>([]);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderedPosts = useMemo(() => {
    return data.map((post) => <Card post={post} key={post.id} />);
  }, [data]);

  return (
    <div className="flex flex-col justify-center items-center ">
      {renderedPosts}
    </div>
  );
};

export default DataFetcher;
