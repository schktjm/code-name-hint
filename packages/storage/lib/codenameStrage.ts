import { createStorage } from './base';

const key = 'code-name-storage';

type Value = Record<string, string | undefined>;

export const codeNameStorage = createStorage<Value>(key, {});
