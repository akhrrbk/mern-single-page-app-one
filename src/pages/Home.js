import TourCard from '../components/TourCard';
import {Container, Grid, Typography} from '@mui/material'
import cities from '../data.json'

const Home = () => {
    return (
        <div className='App'>
            <Container sx={{marginY: 5}}>
                {cities.map((cityname, i) => (
                <div key={i}>
                    <Typography
                    variant='h4'
                    component='h2'
                    marginTop={5}
                    marginBottom={3}
                    
                    >
                    Top {cityname.name} Tours
                    </Typography>
                
                    <Grid container spacing={3}>
                    {cityname.tours.map((tour, index) => (
                        <TourCard key={index} tour={tour} />
                    ))}
                    </Grid>

                </div>
                ))}
            </Container>
        </div>
    )
}

export default Home