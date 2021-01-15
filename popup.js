(function() {
  var allForms = [];

  // Display all form info
  function showForms() {
    const formsList = document.getElementById('forms');
    formsList.innerHTML = ""
    for (let i = 0; i < allForms.length; ++i) {
      const keys = Object.keys(allForms[i])
      const table = document.createElement('table');
      keys.forEach(field => {
        var row = document.createElement('tr');
        var col1 = document.createElement('td');
        var col2 = document.createElement('td');
        col1.innerText = `${field}:`;
        col1.style.fontWeight = 'bold';
        col2.innerText = allForms[i][field]
        col2.style.whiteSpace = 'nowrap';
        row.appendChild(col1);
        row.appendChild(col2);
        table.appendChild(row);
      })
      formsList.appendChild(table)
    }
  }
  // send_forms.js is injected into all frames of the active tab,
  // so this listener may be called multiple times.
  chrome.extension.onRequest.addListener(function(forms) {
    for (var index in forms) {
      allForms.push(forms[index]);
    }
    showForms();
  });

  // Set up event handlers and inject send_forms.js into all frames in the active
  // tab.
  window.onload = function() {
    /* Add popup eventlisteners here */
    chrome.windows.getCurrent(function (currentWindow) {
      chrome.tabs.query({active: true, windowId: currentWindow.id}, activeTabs => {
        chrome.tabs.executeScript(activeTabs[0].id, {
          file: 'send_forms.js',
          allFrames: true
        });
      });
    });
  };
}())
