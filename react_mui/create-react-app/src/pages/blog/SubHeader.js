import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function SubHeader(props) {
    const {social} = props;

    return (
        <Grid item xs={12} md={4}>
            {social.map((network) => (
                <Link
                display="block"
                variant="body1"
                target="_new"
                href={network.url}
                key={network.name}
                sx={{ mb: 0.5 }}
                >
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
                    <network.icon />
                    <span>{network.name}</span>
                </Stack>
                </Link>
            ))}
        </Grid>
    )
}


SubHeader.propTypes = {
    social: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.elementType.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

export default SubHeader;