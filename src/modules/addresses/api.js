export default (action) => fetch(
  'https://loft-taxi.glitch.me/addressList', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  },
)
.then((response) => response.json())
.then((data) => data.addresses);
