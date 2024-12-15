import getList from "./module/microcms";
import * as fs from 'fs';


(async () => {
  const res = await getList("markdownai");
  const json = JSON.stringify(res);
  console.log(json);
  fs.writeFileSync('./dist/contexts.json', json);
})();

