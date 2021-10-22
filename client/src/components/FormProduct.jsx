import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useQuery} from "@apollo/client";
import {GET_PROVIDERS} from "../query/provider";
import AppSelect from "./AppSelect";
import {formatProviderToOptions} from "../utils";

const fieldStyle = {
  marginBottom: '15px'
}

const FormProduct = ({product, submitHandler: onClick}) => {

  const [selectedProvider, setSelectedProvider] = useState(product?.provider.id || '')
  const [title, setTitle] = useState(product?.title || '')
  const [quantity, setQuantity] = useState(product?.quantity || 0)
  const {data: dataProviders, loading: loadingProviders} = useQuery(GET_PROVIDERS)

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {...product, title, quantity, providerId: selectedProvider}
    onClick(data)
    setSelectedProvider('')
    setTitle('')
    setQuantity(0)
  }

  return (
    <Box component={"form"} sx={{display: 'flex', flexDirection: 'column'}} onSubmit={submitHandler}>
      <TextField
        autoFocus
        required
        type="text"
        label="Title product"
        fullWidth
        variant="standard"
        sx={fieldStyle}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <TextField
        type="number"
        min={0}
        max={99999}
        label="Quantity"
        fullWidth
        variant="standard"
        sx={fieldStyle}
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
      />
      {!loadingProviders &&
      <AppSelect
        title={"Providers"}
        value={selectedProvider}
        onChange={e => setSelectedProvider(e.target.value)}
        options={formatProviderToOptions(dataProviders.providers)}
      />
      }
      <Button sx={{mt: '10px', alignSelf: "flex-end"}} type="submit"
              variant="contained">{!product ? 'Create' : 'Update'}</Button>
    </Box>
  );
};

export default FormProduct;