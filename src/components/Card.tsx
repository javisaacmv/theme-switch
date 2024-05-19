import React, { useContext } from "react";
import { Post } from "./DataFetcher";
import { ThemeContext } from "../App";

interface Props {
  post: Post;
}

export const Card = ({ post }: Props) => {
  const { theme } = useContext(ThemeContext);

  const bgColor = theme === "light" ? "bg-white" : "bg-slate-800";

  const borderColor =
    theme === "light" ? "border-slate-200" : "border-slate-700";
  const textColor = theme === "light" ? "text-black" : "text-slate-100";

  return (
    <div
      className={`w-1/2 ${bgColor} px-5 py-5 my-5 rounded-lg shadow-lg border ${borderColor} transform transition duration-500 hover:scale-110`}
    >
      <h3 className={`text-lg font-semibold ${textColor} my-3`}>
        {post.title}
      </h3>
      <p className={`text-sm ${textColor}`}>{post.body}</p>
    </div>
  );
};
