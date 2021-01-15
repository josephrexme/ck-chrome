(function() {
  let forms = Array.from(document.querySelectorAll('form[data-uid]'))

  // Get action URL, UID, and relevant data and remove duplicates
  forms = forms.reduce((acc, value) => {
    const formActionExists = acc.some(form => form.action === value.action)
    if(!formActionExists) {
      return acc.concat({
        action: value.action,
        uid: value.dataset.uid,
        format: value.dataset.format,
        formId: value.dataset.svForm,
        version: value.dataset.version
      })
    }
    return acc
  }, []);

  chrome.extension.sendRequest(forms);
}())