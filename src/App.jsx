import {Typography,AppBar,Container, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Box} from '@mui/material'
import DenseTableLeft from './Table1'
import DenseTableRight from './Table2'

const App = () => {

  return (
   <>
    <CssBaseline/>
    <Container>
      <AppBar style={{backgroundColor:"white", color:"black", boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)"}}>
        <Box display={"flex"} justifyContent={"space-between"}>
        <Toolbar><Typography style={{fontWeight:"bold"}}>APP LOGO</Typography></Toolbar>
        <Box display={"flex"} padding={"20px"}>
          <Typography style={{marginRight:"20px",cursor:"pointer"}}>DASHBOARD</Typography>
          <Typography style={{cursor:"pointer"}}>CREATE ADS</Typography>
        </Box>
        </Box>
      </AppBar>
      <main>
        <Box>
        <Container style={{display:"flex", marginTop:"100px"}}>
          <DenseTableLeft/>
          <DenseTableRight/>
        </Container>
        </Box>
      </main>
      
    </Container>
  </>
  )
}

export default App

