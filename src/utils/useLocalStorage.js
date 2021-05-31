import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
    console.log('Error StoreData: ', e);
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
    console.log('Error ReadingData: ', e);
  }
};

export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
    console.log('error remove data.');
  }

  console.log('Done.');
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
    console.log('error while clear all data.');
  }

  console.log('Done.');
};
