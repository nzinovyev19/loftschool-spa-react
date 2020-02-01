import React from 'react';
import { useHistory } from 'react-router-dom';
import BaseButton from 'components/BaseButton';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function ProfileInfo() {
  const history = useHistory();

  return (
    <Box>
      <Typography
        variant="h4"
      >
        Заполните платежные данные
      </Typography>
      <Box
        mt={2}
      >
        <Typography
          component="p"
          variant="subtitle1"
        >
          Укажите информацию о банковской карте, чтобы сделать заказ.
        </Typography>
      </Box>
      <Box
        width="100%"
        mt={2}
      >
        <BaseButton
          onClick={() => history.push('/profile')}
          fullWidth
          content="Перейти в профиль"
        />
      </Box>
    </Box>
  );
}
