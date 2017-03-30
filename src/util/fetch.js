export default {
  fetch(url) {
    const promise = new Promise((resolve, reject) => {
      this.$http.get(url, (response) => {
        resolve(response.data);
      }).error(err => reject(err));
    });
    return promise;
  },
};
