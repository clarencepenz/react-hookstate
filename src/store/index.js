import { hookstate, useHookstate } from "@hookstate/core";
import { devtools } from "@hookstate/devtools";
import axios from "axios";

const initialState = hookstate(
  {
    count: 0,
    loading: false,
    users: [],
    blog: [
      {
        id: 1,
        content: "Content 1",
      },
      {
        id: 2,
        content: "Content 2",
      },
      {
        id: 3,
        content: "Content 3",
      },
    ],
  },
  devtools({ key: "my-state-label" })
);

export const useGlobalState = () => {
  const state = useHookstate(initialState);
  const resourcePath = "https://jsonplaceholder.typicode.com/users";

  return {
    getCount: () => state.count.value,
    getCountBlog: () => state.blog.length,
    increment: () => {
      state.count.set((count) => count + 1);
    },
    decrement: () => {
      state.count.set((count) => count - 1);
    },
    loading: () => state.loading,
    getUsers: async () => {
      await axios.get(resourcePath).then((r) => state.users.set(r.data));
      state.loading.set(true);
    },
    fetchUsers: () => state.users,
    addBlog: (blog) => {
      state.blog.merge([blog]);
    },
    updateBlog: (id, blog) => {
      state.blog.set((b) =>
        b.map((blogs) => {
          if (blogs.id === id) {
            blogs.content = blog.content;
          }
          return blogs;
        })
      );
    },
    deleteBlog: (id) => {
      state.blog.set((blogs) => blogs.filter((blog) => blog.id !== id));
    },
    fetchBlogs: () => state.blog,
  };
};
