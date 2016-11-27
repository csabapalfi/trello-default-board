chrome.webRequest.onBeforeRequest.addListener(
  () => ({ redirectUrl: 'https://trello.com/b/lv4jKiV4/private' }),
  { urls: [ 'https://trello.com/' ], types: [ 'main_frame' ] },
  [ 'blocking' ]
);
