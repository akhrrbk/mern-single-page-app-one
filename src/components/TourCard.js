import React from 'react'
import { Grid, Paper, Typography, Box, Rating } from '@mui/material'
import { AccessTime } from '@mui/icons-material'
import {createTheme, ThemeProvider} from '@mui/material'

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 14
                    }
                },{
                    props: {
                        variant: "body4"
                    },
                    style: {
                        fontSize: 13
                    }
                },
            ]
        }
    }
})

const TourCard = ({tour}) => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
            <Paper elevation={3}>
                <img
                    src={tour.image}
                    alt=''
                    className='img'
                />
                <Box paddingX={1}>
                    <Typography variant='subtitle1' component='h2'>
                        {tour.name}
                    </Typography>
                    <Box 
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <AccessTime sx={{width:12.5}} />
                        <Typography variant="body2" component='p' marginLeft={0.5}>
                            {tour.duration} hours
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                        marginTop={2}
                    >
                        <Rating name="half-rating-read" defaultValue={4.5} size="small"  precision={0.5} readOnly />
                        <Typography variant="body3" component='p' marginLeft={0.5}>
                            {tour.rating}
                        </Typography>
                        <Typography variant="body4" component='p' marginLeft={0.5}>
                            ({tour.numberOfReviews} reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" component='h3' marginTop={0.5}>
                            from ${tour.price}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
            </ThemeProvider>
        </Grid>
    )
}

export default TourCard