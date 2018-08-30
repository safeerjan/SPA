import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import { ENCRYPTION_KEY, environments } from '../config/constants';

const STORAGE_KEY = 'SelectedOffer';

const shouldNotEncrypt = process.env.NODE_ENV !== environments.PRODUCTION;

export const loadState = () => {
  const serializedState = localStorage.getItem(STORAGE_KEY);

  console.log("-------------------", serializedState);
  if (serializedState === null) {
    return undefined;
  }
  if (shouldNotEncrypt) {
    return JSON.parse(serializedState);
  }
  const bytes = AES.decrypt(serializedState.toString(), ENCRYPTION_KEY);
  return JSON.parse(bytes.toString(Utf8));
};

export const saveState = (state) => {
  if (shouldNotEncrypt) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return;
  }
  const serializedState = AES.encrypt(JSON.stringify(state), ENCRYPTION_KEY);
  localStorage.setItem(STORAGE_KEY, serializedState);
};
