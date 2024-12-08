import getList from "./module/microcms";


(async () => {
  const res = await getList("markdownai");
  console.log(res);
})();

