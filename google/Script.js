function searchOrLoadUrl() {
    const input = document.getElementById("searchInput").value;
    const url = `https://www.google.com/search?q=${input}`;
    const isUrl = validateUrl(input);
  
    if (isUrl) {
      window.open(input);
    } else {
      window.location.href = url;
    }
  }
  
  function validateUrl(urlString) {
    let url;
  
    try {
      url = new URL(urlString);
    } catch (_) {
      return false;
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }