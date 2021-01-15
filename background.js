(function() {
  let selectedId = -1
  let allForms = []

  // Add Badge in a different version
  // function countCkForms() {
  //   chrome.extension.onRequest.addListener(function(forms) {
  //     for (var index in forms) {
  //       if(!allForms.some(form => forms[index].action === form.action)) {
  //         allForms.push(forms[index]);
  //       }
  //     }
  //     chrome.browserAction.setBadgeText({"text": allForms.length.toString(), tabId: selectedId});
  //     chrome.browserAction.setBadgeBackgroundColor({ color: [33,47,79,255] })
  //   });
  // }

  // chrome.tabs.onUpdated.addListener(function(tabId, props) {
  //   if (props.status == "complete" && tabId == selectedId)
  //     countCkForms();
  // });
  
  // chrome.tabs.onSelectionChanged.addListener(function(tabId, props) {
  //   selectedId = tabId;
  //   countCkForms();
  // });

  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   selectedId = tabs[0].id;
  //   countCkForms()
  // });
}())
