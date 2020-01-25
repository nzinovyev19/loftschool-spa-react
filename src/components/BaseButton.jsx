import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFC617',
    '&:hover': {
      backgroundColor: 'rgba(255, 198, 23, 0.5);',
    },
  },
});

BaseButton.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
};

BaseButton.defaultProps = {
  content: '???',
  type: 'button',
};

export default function BaseButton({ content, type }) {
  const classes = useStyles();
  return (
    <Button
      type={type}
      className={classes.root}
    >
      {content}
    </Button>
  );
}
