import {
  SetStorage,
  GetStorage,
  RemoveStorage,
} from '../../shared/domain-types';

export const get: GetStorage = ({ key }) => {
  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};

export const set: SetStorage = ({ key, value }) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const remove: RemoveStorage = ({ key }) => {
  localStorage.removeItem(key);
};

export const getSession: GetStorage = ({ key }) => {
  const value = sessionStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};

export const setSession: SetStorage = ({ key, value }) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const removeSession: RemoveStorage = ({ key }) => {
  sessionStorage.removeItem(key);
};
