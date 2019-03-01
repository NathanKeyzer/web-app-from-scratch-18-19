const api = {
  getData: url => {
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else {
          reject(error);
        }
      };
      request.onerror = () => {};
      request.send();
    });
  }
};
export default api;
