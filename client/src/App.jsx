import React, {useState} from 'react';
import {Box, Container, Tab, Tabs} from "@mui/material";
import Providers from "./components/Providers";
import Products from "./components/Products";
import AppSearch from "./components/AppSearch";

const App = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const [search, setSearch] = useState('')
  const switchCurrentTab = (e, value) => setCurrentTab(value)
  const pages = [<Providers search={search}/>, <Products search={search}/>]

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
        <AppSearch value={search} onChange={setSearch}/>
        {pages[currentTab]}
      </Container>
    </Box>
  );
};

export default App;