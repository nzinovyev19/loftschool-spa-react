import React from 'react';
import BaseButton from 'components/BaseButton';

import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default function TravelInfo() {
  const [address, setAddress] = React.useState({
    from: '',
    to: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(address);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setAddress({
      ...address,
      [e.target.name]: value,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
    >
      <Box>
        <FormControl fullWidth>
          <InputLabel>Откуда</InputLabel>
          <Select
            name="from"
            placeholder="Откуда"
            value={address.from}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="Пушкина">Пушкина</MenuItem>
            <MenuItem value="Колотушкина">Колотушкина</MenuItem>
            <MenuItem value="Пучачо">Пучачо</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={3}>
        <FormControl fullWidth>
          <InputLabel>Куда</InputLabel>
          <Select
            name="to"
            placeholder="Куда"
            value={address.to}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="Пушкина">Пушкина</MenuItem>
            <MenuItem value="Колотушкина">Колотушкина</MenuItem>
            <MenuItem value="Пучачо">Пучачо</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={3}>
        <BaseButton fullWidth type="submit" content="Вызвать такси" />
      </Box>
    </Box>
  );
}
