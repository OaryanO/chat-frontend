let socket = null;

export const setSocketInstance = (instance) => {
  socket = instance;
};

export const getSocketInstance = () => socket;

export const clearSocketInstance = () => {
  socket = null;
};
