const YTM_DOMAIN = 'https://music.youtube.com';
// const YTM_BASE_API = YTM_DOMAIN + '/youtubei/v1/';
// const YTM_PARAMS = '?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30';
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0';

export default class YTMusic {
  minimumHeaders = {
    'user-agent': USER_AGENT,
    accept: '*/*',
    'accept-encoding': 'gzip, deflate',
    'content-type': 'application/json',
    'content-encoding': 'gzip',
    origin: YTM_DOMAIN,
  };

  static async getXGoogVisitorId() {
    const response = await fetch(YTM_DOMAIN, {
      method: 'GET',
      headers: this.minimumHeaders,
    });
    const text = await response.text();

    console.log(text);

    const regexp = /ytcfg\.set\s*\(\s*({.+?})\s*\)\s*;/g;
    const matches = [...text.matchAll(regexp)];

    if (matches.length > 0) {
      const config = JSON.parse(matches[0][1]);

      return { 'X-Goog-Visitor-Id': config.VISITOR_DATA };
    }

    return {};
  }
}
