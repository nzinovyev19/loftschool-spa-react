export default (action) => {
  fetch(
    'https://loft-taxi.glitch.me/card', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(action.payload),
    },
  )
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      return data;
    }
    throw new Error(data.error);
  });
};
