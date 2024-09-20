export const getCodeNameRecord = (data: string): Record<string, string | undefined> => {
  const record: Record<string, string | undefined> = {};

  const lines = data.split('\r\n');

  for (const line of lines) {
    if (!line.includes('star2')) {
      continue;
    }
    if (line.includes('Bizサイドメンバーは')) {
      continue;
    }

    const column = line.split('|');
    const code = column.at(1)?.replace(':star2:', '').trim();
    const description = column.at(2)?.trim();
    const subDescription = column.at(3)?.trim();
    // console.log(code, description, subDescription);
    if (!code) {
      continue;
    }
    record[code] = description || subDescription;
  }

  return record;
};
