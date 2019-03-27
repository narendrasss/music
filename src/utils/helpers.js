import { navigate } from '@reach/router';

/**
 * Generates a random number between 0 - max.
 * @param {number} max
 */
export const makeID = (max = 1000) => {
  return Math.ceil(Math.random() * max);
};

/**
 * Converts seconds into a string representing
 * minutes + seconds
 * @param {number} seconds
 */
export const toMinutes = seconds => {
  const sec = (seconds % 60).toLocaleString('en-us', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  const min = (seconds - sec) / 60;
  return [String(min), sec].join('.');
};

/**
 * Returns the initials of the name
 * @param {string} fullName
 */
export const getInitials = fullName => {
  return fullName
    .split(' ')
    .map(name => name.substr(0, 1))
    .join('');
};

export const logout = () => {
  localStorage.removeItem('id');
  navigate('/');
};

export const sleep = ms => new Promise((resolve, _) => setTimeout(resolve, ms));
