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
          <InputLabel id="demo-simple-select-label">Откуда</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="from"
            value={address.from}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={10}>Пушкина</MenuItem>
            <MenuItem value={20}>Колотушкина</MenuItem>
            <MenuItem value={30}>Пучачо</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Куда</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="to"
            value={address.to}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={10}>Пушкина</MenuItem>
            <MenuItem value={20}>Колотушкина</MenuItem>
            <MenuItem value={30}>Пучачо</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={3}>
        <BaseButton fullWidth type="submit" content="Вызвать такси" />
      </Box>
    </Box>
  );
}
