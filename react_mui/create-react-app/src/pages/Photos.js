import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


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
        <Paper>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <img style={{ display: 'none' }} src={process.env.PUBLIC_URL + "/images/photos/" + item.image} alt={item.name} />
        </Paper>
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
  