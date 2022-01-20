import React from 'react'
import {Container, Typography, Box} from '@mui/material'
import ImageCollage from '../components/ImageCollage'
import Accordion from '../components/Accordion'
import FixedBottomNavagation from '../components/FixedBottomNavagation'

const Tour = () => {
    return (
        <div>
            <Container sx={{marginY: 5}}>
                <Box sx={{display: "flex"}}>
                    <Box>
                        <img 
                            src="https://media.timeout.com/images/105124791/750/422/image.jpg"
                            height={375}
                            alt=''
                        />
                    </Box>
                    <Box marginLeft={1}>
                        <ImageCollage />
                    </Box>
                </Box>
                <Box>
                    <Typography variant='h6' component='h4' marginTop={3} >
                        About This Ticket
                    </Typography>
                    <Typography variant='paragraph' component='p' marginTop={3} >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ut nisi debitis voluptates neque ipsa dolores, in ea dolore ipsam dignissimos nulla ullam, ex optio aspernatur voluptatem, necessitatibus laboriosam ducimus odio est. Praesentium fuga temporibus obcaecati ex vitae quae iure!
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h6' component='h4' marginTop={3} marginBottom={2} >
                        FAQ
                    </Typography>
                    <Accordion />
                </Box>
                <Box>

                </Box>
            </Container>
            <Box>
                <FixedBottomNavagation />
            </Box>
        </div>
    )
}

export default Tour