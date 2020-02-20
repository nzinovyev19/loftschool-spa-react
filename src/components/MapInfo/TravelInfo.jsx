import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
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
  const { handleSubmit, control } = useForm();
  const { addresses, error, isLoading } = useSelector((state) => state.addresses);
  const routeIsLoading = useSelector((state) => getIsLoading(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!addresses || !addresses.length) dispatch(fetchAddressesRequest());
  }, [dispatch, addresses]);

  function onSubmit(data) {
    dispatch(fetchRouteRequest(data));
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <>
          <Box>
            <FormControl fullWidth>
              <InputLabel>Откуда</InputLabel>
              <Controller
                control={control}
                name="from"
                defaultValue=""
                as={(
                  <Select
                    fullWidth
                    placeholder="Откуда"
                    disabled={isLoading}
                  >
                    {addresses.map((address) => <MenuItem key={address} value={address}>{address}</MenuItem>)}
                  </Select>
                )}
              />
            </FormControl>
          </Box>
          <Box mt={3}>
            <FormControl fullWidth>
              <InputLabel>Куда</InputLabel>
              <Controller
                control={control}
                name="to"
                defaultValue=""
                as={(
                  <Select
                    fullWidth
                    placeholder="Откуда"
                    disabled={isLoading}
                  >
                    {addresses.map((address) => <MenuItem key={address} value={address}>{address}</MenuItem>)}
                  </Select>
                )}
              />
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
          disabled={routeIsLoading}
          bgcolor={routeIsLoading ? 'text.disabled' : ''}
        />
      </Box>
    </Box>
  );
}
