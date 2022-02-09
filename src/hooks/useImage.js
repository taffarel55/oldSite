const useImage = ({ page, category, title, image }) => {
  const string = `../../pages/${page}/subpages/${category}/${title}/imgs/${image}`;
  return { string };
};
export default useImage;
