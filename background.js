chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    chrome.storage.sync.get(
      'updateYtMusicCookie',
      ({ updateYtMusicCookie }) => {
        if (updateYtMusicCookie) {
          const { requestHeaders } = details;

          if (!requestHeaders) return;

          const cookie = requestHeaders.find(({ name }) => name === 'Cookie');

          if (!cookie) return;

          chrome.storage.sync.set({ ytMusicCookie: cookie.value }, function () {
            console.log('Updated yt-music cookie to', cookie.value);
          });
        }
      }
    );
  },
  {
    urls: ['https://music.youtube.com/youtubei/v1/browse*'],
    types: ['xmlhttprequest'],
  },
  ['requestHeaders', 'extraHeaders']
);
