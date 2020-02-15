import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseButton from 'components/BaseButton';
import { getIsLoading } from 'modules/route/selectors';
import { fetchRouteRequest } from 'modules/route/actions';
import { fetchAddressesRequest } from 'modules/addresses/actions';

import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default function TravelInfo() {
  const [addressesForm, setAddressesForm] = React.useState({
    from: '',
    to: '',
  });
  const { addresses, error, isLoading } = useSelector((state) => state.addresses);
  const routeIsLoading = useSelector((state) => getIsLoading(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!addresses || !addresses.length) dispatch(fetchAddressesRequest());
  }, [dispatch, addresses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRouteRequest(addressesForm));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setAddressesForm({
      ...addressesForm,
      [e.target.name]: value,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <>
          <Box>
            <FormControl fullWidth>
              <InputLabel>Откуда</InputLabel>
              <Select
                fullWidth
                name="from"
                placeholder="Откуда"
                disabled={isLoading}
                value={addressesForm.from}
                onChange={handleChange}
              >
                {addresses.map((address) => (
                  address === addressesForm.to
                    ? null
                    : (<MenuItem key={address} value={address}>{address}</MenuItem>)
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box mt={3}>
            <FormControl fullWidth>
              <InputLabel>Куда</InputLabel>
              <Select
                fullWidth
                name="to"
                placeholder="Куда"
                disabled={isLoading}
                value={addressesForm.to}
                onChange={handleChange}
              >
                {addresses.map((address) => (
                  address === addressesForm.from
                    ? null
                    : (<MenuItem key={address} value={address}>{address}</MenuItem>)
                ))}
              </Select>
            </FormControl>
          </Box>
        </>
      )}
      <Box display="flex" flexDirection="column" mt={3}>
        {error && (
          <Box
            display="flex"
            justifyContent="flex-end"
            m="5px 0"
            color="#EB5757"
          >
            {error}
          </Box>
        )}
        <BaseButton
          fullWidth
          type="submit"
          content="Вызвать такси"
          disabled={routeIsLoading || !addressesForm.from || !addressesForm.to}
          bgcolor={routeIsLoading ? 'text.disabled' : ''}
        />
      </Box>
    </Box>
  );
}
