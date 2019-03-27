const BASE_URL = 'http://localhost:8080';

const request = async (method, url, body) => {
  const id = localStorage.getItem('id');
  const response = await fetch(`${BASE_URL + url}?id=${id}`, {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
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
  login: (username, password) => {
    return request('post', '/login', { username, password });
  },
  register: (id, username, password, name, type) => {
    return request('post', '/register', { id, username, password, name, type });
  },
  user: {
    me() {
      return request('get', '/api/me');
    }
  },
  song: {
    liked() {
      return request('get', `/api/likes`);
    },
    top() {
      return request('get', `/api/song`);
    },
    like(id) {
      return request('post', `/api/likes`, { id });
    },
    unlike(id) {
      return request('delete', `/api/likes/${id}`);
    }
  },
  playlist: {
    create(name, ...sids) {
      const init = request('post', '/api/playlist', { name });
      const promises = sids.map(id =>
        request('post', `/api/playlist/${name}`, { id })
      );
      return Promise.all(init, ...promises);
    }
  }
};
