const BASE_URL = 'http://localhost:8080';
const token = localStorage.getItem('token');

const request = (method, url, body) => {
  return new Promise((resolve, reject) =>
    fetch(BASE_URL + url, {
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    }).then(response => {
      const data = response.json();
      if (!response.ok) return reject(data);
      resolve(data);
    })
  );
};

export default {
  login: (email, password) => {
    return request('post', '/login', { email, password });
  },
  register: (email, password, name, type) => {
    return request('post', '/register', { email, password, name, type });
  }
};
