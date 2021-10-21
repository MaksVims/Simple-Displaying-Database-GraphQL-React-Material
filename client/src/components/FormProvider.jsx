import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";

const fieldStyle = {
  marginBottom: '15px'
}

const FormProvider = ({provider, submitHandler: onClick}) => {
  const [organization, setOrganization] = useState(provider?.organization || '')
  const [tel, setTel] = useState(provider?.tel || '')

  const submitHandler = (e) => {
    e.preventDefault()
    const data = provider ? {...provider, organization, tel} : {organization, tel}
    if (!tel) {
      delete data.tel
    }
    onClick(data)
    setOrganization('')
    setTel('')
  }

  const changeTel = (e) => {
    if (!isNaN(e.target.value)) {
      setTel(+e.target.value)
    }
  }

  return (
    <Box component={"form"} sx={{display: 'flex', flexDirection: 'column'}} onSubmit={submitHandler}>
      <TextField
        autoFocus
        required
        type="text"
        label="Organization name"
        fullWidth
        variant="standard"
        sx={fieldStyle}
        value={organization}
        onChange={e => setOrganization(e.target.value)}
      />
      <TextField
        type="tel"
        label="Tel"
        fullWidth
        variant="standard"
        sx={fieldStyle}
        value={tel}
        onChange={changeTel}
      />
      <Button sx={{mt: '10px', alignSelf: "flex-end"}} type="submit" variant="contained">{!provider ? 'Create' : 'Update'}</Button>
    </Box>
  );
};

export default FormProvider;