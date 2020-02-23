export const authorize = (authorizationInfo) => fetch(
  'https://loft-taxi.glitch.me/auth',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(authorizationInfo.payload),
  },
)
.then((response) => response.json())
.then((data) => {
  if (data.success) {
    return data;
  }
  throw new Error(data.error);
});

export const registrate = (registrationInfo) => fetch(
  'https://loft-taxi.glitch.me/register',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(registrationInfo.payload),
  },
)
.then((response) => response.json())
.then((data) => {
  if (data.success) {
    return data;
  }
  throw new Error(data.error);
});
