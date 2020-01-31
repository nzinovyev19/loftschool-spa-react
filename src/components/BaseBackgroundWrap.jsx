import Background from 'assets/images/bg.jpg';

import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';

const Wrap = styled(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 1,
  '&:after': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: -1,
  },
});

export default Wrap;
