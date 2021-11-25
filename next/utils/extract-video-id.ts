// ? reference: https://www.labnol.org/code/19797-regex-youtube-id
export const extractVideoID = (url: string): string | null => {
  if (!url) return "";

  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[7].length == 11) {
    return match[7];
  }

  return null;
};
