import React, {useState} from 'react';
import {Box, Container, Tab, Tabs} from "@mui/material";
import Providers from "./components/Providers";
import Products from "./components/Products";

const pages = [<Providers/>, <Products/>]

const App = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const switchCurrentTab = (e, value) => setCurrentTab(value)

  return (
    <Box sx={{height: '100vh', width: '100vw', backgroundColor: '#6e6b6b'}}>
      <Box width='100vw'>
        <Tabs
          value={currentTab}
          onChange={switchCurrentTab}
          aria-label={"tabs list others objects"}
          variant="fullWidth"
          indicatorColor="secondary"
          sx={{backgroundColor: 'primary.main', mb: '30px'}}
          textColor="inherit"
        >
          <Tab sx={{height: '80px'}} label={'Providers'} tabIndex={0}/>
          <Tab label={'Products'} tabIndex={1}/>
        </Tabs>
      </Box>
      <Container maxWidth="lg">
        {pages[currentTab]}
      </Container>
    </Box>
  );
};

export default App;