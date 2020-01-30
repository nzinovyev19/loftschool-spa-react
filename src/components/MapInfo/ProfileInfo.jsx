import React from 'react';
import PropTypes from 'prop-types';
import BaseButton from 'components/BaseButton';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

ProfileInfo.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default function ProfileInfo({ setPage }) {
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
          onClick={() => setPage('profile')}
          fullWidth
          content="Перейти в профиль"
        />
      </Box>
    </Box>
  );
}
