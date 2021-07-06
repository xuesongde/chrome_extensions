let syncUrl;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
                syncUrl = sender.tab.url;
    if (request.greeting === "hello")
      sendResponse({farewell: "goodbye"});
  }
);
let sync = document.getElementById('sync');
sync.onclick = async (e)=> {
  let daxue_session_id = await chrome.cookies.get({name: 'daxue_session_id', url: 'https://daxue.58.com/'});
  console.log(daxue_session_id.value, chrome, syncUrl);
}