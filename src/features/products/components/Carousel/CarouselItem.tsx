import React from 'react';
import { Box } from '@mui/material';
import { Pictures } from '../../../../../../wakecap-fe-challenge/src/models/products';


const CarouselItem = ({ image, index, activeImage, setactiveImage }: ({ image: Pictures, index: Number, activeImage: Pictures | null, setactiveImage: (state: Pictures) => void })) => {
  return (
    <Box
      border={`${activeImage?.thumbnail === image.thumbnail ? '10px lightgray solid' : null}`}
      borderRadius={'10px'}
      m={activeImage?.thumbnail === image.thumbnail ? undefined : '10px'}
      p={1}
      onClick={() => setactiveImage(image)}>
      <img src={image.thumbnail} alt="green iguana" height="140" style={{ display: "block", margin: "auto" }} />
    </Box>
  )
}

export default CarouselItem