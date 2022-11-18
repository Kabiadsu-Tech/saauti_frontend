export const getPostsFromIndex = (data, fromIndex, toIndex) => {
  let postList = [];
  for (let i = fromIndex; i <= toIndex; i++) {
    postList.push(data[i]);
  }
  return postList;
};
