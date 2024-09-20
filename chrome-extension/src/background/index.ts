import 'webextension-polyfill';
import { exampleThemeStorage, codeNameStorage } from '@extension/storage';
import { fetchDocBase } from './fetchDocBase';
import { getCodeNameRecord } from './getCodeNameRecord';

exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});

console.log('background loaded');
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");

const main = async () => {
  const res = await fetchDocBase();
  if (res.error) {
    return;
  }

  // console.log(res.data.body);
  const record = getCodeNameRecord(res.data.body);
  codeNameStorage.set(record);
};

main();
