const BASE_URL = 'http://localhost:8080';
const token = localStorage.getItem('token');

const request = async (method, url, body) => {
  const response = await fetch(BASE_URL + url, {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body)
  });

  let data = await response.json();
  return new Promise((resolve, reject) => {
    if (!response.ok) return reject(data);
    resolve(data);
  });
};

export default {
  login: (email, password) => {
    return request('post', '/login', { email, password });
  },
  register: (email, password, name, type) => {
    return request('post', '/register', { email, password, name, type });
  }
};
