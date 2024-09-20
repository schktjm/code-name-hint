/**
 * 最低限必要そうなやつだけ
 */
type DocBaseResult = {
  id: number;
  title: string;
  body: string;
  url: string;
  updated_at: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isDocBaseResult = (data: any): data is DocBaseResult => {
  if (!('id' in data && typeof data.id === 'number')) {
    return false;
  }
  if (!('title' in data && typeof data.title === 'string')) {
    return false;
  }
  if (!('body' in data && typeof data.body === 'string')) {
    return false;
  }
  if (!('url' in data && typeof data.url === 'string')) {
    return false;
  }
  if (!('updated_at' in data && typeof data.updated_at === 'string')) {
    return false;
  }
  return true;
};

type ResultType =
  | {
      data: DocBaseResult;
      error: null;
    }
  | {
      data: null;
      error: Error;
    };

export const fetchDocBase = async (): Promise<ResultType> => {
  try {
    const docBaseToken = import.meta.env.DOC_BASE_TOKEN;

    const res = await fetch('https://api.docbase.io/teams/smarthr-inc/posts/1296179', {
      method: 'GET',
      headers: {
        'X-DocBaseToken': docBaseToken,
      },
    });
    if (!res.ok) {
      return {
        data: null,
        error: new Error('failed to fetch'),
      };
    }

    const data = await res.json();
    if (isDocBaseResult(data)) {
      return {
        data,
        error: null,
      };
    }
    return {
      data: null,
      error: new Error('data type is failed'),
    };
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e,
        data: null,
      };
    } else {
      return {
        error: new Error('unknown error'),
        data: null,
      };
    }
  }
};
