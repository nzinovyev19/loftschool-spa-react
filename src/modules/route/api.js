export default ({ payload }) => fetch(
  `https://loft-taxi.glitch.me/route?address1=${payload.from}&address2=${payload.to}`,
  {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  },
)
.then((response) => response.json())
.then((data) => data);
