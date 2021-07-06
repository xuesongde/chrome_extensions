async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
(async ()=>{
  let tab = await getCurrentTab();
  let daxue_session_id = await chrome.cookies.get({name: 'daxue_session_id', url: 'https://daxue.58.com/'});
  console.log(tab, chrome, daxue_session_id);
  alert(JSON.stringify({tab, chrome, daxue_session_id}, null, 2));
})()
