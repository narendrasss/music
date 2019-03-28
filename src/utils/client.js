import { __parseJSON } from './helpers';

const BASE_URL = 'http://localhost:8080';

const request = async (method, url, query, body) => {
  const id = localStorage.getItem('id');
  const response = await fetch(`${BASE_URL + url}?id=${id}&${query}`, {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await __parseJSON(response);
  return new Promise((resolve, reject) => {
    if (!response.ok) return reject(data);
    resolve(data);
  });
};

export default {
  login(username, password) {
    return request('post', '/login', null, { username, password });
  },
  register(id, username, password, name, type) {
    return request('post', '/register', null, {
      id,
      username,
      password,
      name,
      type
    });
  },
  user: {
    me() {
      return request('get', '/api/me');
    },
    follow(id) {
      return request('post', `/api/user/${id}`);
    },
    unfollow(id) {
      return request('delete', `/api/user/${id}`);
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
      return request('post', `/api/likes`, null, { id });
    },
    unlike(id) {
      return request('delete', `/api/likes/${id}`);
    },
    by(id) {
      return request('get', `/api/song`, `by=${id}`);
    }
  },
  playlist: {
    async create(name, ...sids) {
      await request('post', '/api/playlist', null, { name });
      const promises = sids.map(id =>
        request('post', `/api/playlist/${name}/${id}`, null, { id })
      );
      return Promise.all(promises);
    },
    me() {
      return request('get', `/api/playlist`);
    },
    one(name) {
      return request('get', `/api/playlist/${name}`);
    },
    update(name, body) {
      return request('put', `/api/playlist/${name}`, null, body);
    },
    delete(name) {
      return request('delete', `/api/playlist/${name}`);
    }
  },
  artist: {
    one(id) {
      return request('get', `/api/artist/${id}`);
    },
    followed(id) {
      return request('get', `/api/artist/${id}/followed`);
    },
    top() {
      return request('get', `/api/artist`);
    },
    fav() {
      return request('get', `/api/artist`, 'fav=true');
    }
  }
};
