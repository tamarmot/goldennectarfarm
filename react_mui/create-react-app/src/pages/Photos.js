import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box } from '@mui/material'
import { Image } from 'mui-image'


function Photos(props)
{
    const {images} = props;
    

    return (
        <Carousel>
            {
                images.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const {item} = props;

    return (
        <>
            <h2>{item.name}</h2>

            <Paper sx={{
                position: 'relative',
                // backgroundColor: 'grey.800',
                // color: '#fff',
                mb: 4,
                // backgroundSize: '80%',
                // minHeight: '400px',
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'center',
                // backgroundImage: `url(${item.image})`,
            }}>
                <Image src={item.image} alt={item.name} style={{minHeight:"768px"}}/>
            </Paper>
        </>
    )
}

Photos.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            image: PropTypes.string.isRequired,
        })
    )
}

  export default Photos;
  