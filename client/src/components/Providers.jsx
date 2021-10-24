import React, {useEffect, useMemo, useState} from 'react';
import {TableCell, TableContainer, Typography} from "@mui/material";
import BtnAddItem from "./BtnAddItem";
import {useMutation, useQuery} from "@apollo/client";
import {GET_PROVIDERS} from "../query/provider";
import DialogRemove from "./DialogRemove";
import {CREATE_PROVIDER, DELETE_PROVIDER, UPDATE_PROVIDER} from "../mutation/provider";
import AppModal from "./AppModal";
import FormProvider from "./FormProvider";
import AppTable from "./AppTable";
import {filterSearchItems} from "../utils";

const Providers = ({search}) => {
  const [currentProvider, setCurrentProvider] = useState(null)
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false)
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false)
  const [removeDialogIsOpen, setRemoveDialogIsOpen] = useState(false)
  const [providers, setProviders] = useState([])
  const {data: dataProviders, loading: loadingProviders, refetch: refetchProviders} = useQuery(GET_PROVIDERS)
  const [deleteProviderMutation] = useMutation(DELETE_PROVIDER)
  const [createProviderMutation] = useMutation(CREATE_PROVIDER)
  const [updateProviderMutation] = useMutation(UPDATE_PROVIDER)

  useEffect(() => {
    refetchProviders()
    if (!loadingProviders) {
      setProviders(dataProviders.providers)
    }
  }, [dataProviders])

  const filteredProviders = useMemo(() => {
    return loadingProviders ? providers : filterSearchItems(providers, 'organization', search)
  }, [providers, search])

  const openUpdateModal = (provider) => {
    setCurrentProvider(provider)
    setUpdateModalIsOpen(true)
  }
  const openRemoveDialog = (provider) => {
    setCurrentProvider(provider)
    setRemoveDialogIsOpen(true)
  }
  const deleteProvider = async () => {
    await deleteProviderMutation({
      variables: {id: currentProvider.id}
    })
    setRemoveDialogIsOpen(false)
    await refetchProviders()
  }
  const createProvider = async (data) => {
    await createProviderMutation({
      variables: {...data}
    })
    setCreateModalIsOpen(false)
    await refetchProviders()
  }
  const updateProvider = async (data) => {
    await updateProviderMutation({
      variables: {...data}
    })
    setUpdateModalIsOpen(false)
    await refetchProviders()
  }

  return (
    <>
      {loadingProviders ? <h1>Load...</h1> :
        <TableContainer component={"table"} sx={{width: '100%', backgroundColor: '#b7b3b3'}}>
          <AppTable
            data={filteredProviders}
            removeHandler={openRemoveDialog}
            updateHandler={openUpdateModal}
            subItem={(data) => (
              <TableCell>
                {data.map((subItem, idx) => (
                  <Typography key={subItem.id}>{idx + 1}. {subItem.title}</Typography>
                ))}
              </TableCell>
            )}
          />
        </TableContainer>
      }
      <BtnAddItem onClick={() => setCreateModalIsOpen(true)}>+</BtnAddItem>
      <DialogRemove
        open={removeDialogIsOpen}
        onClose={() => setRemoveDialogIsOpen(false)}
        title={"Remove item"}
        content={"Are you sure you want to remove this item"}
        confirmHandler={deleteProvider}
      />
      <AppModal open={createModalIsOpen} handleClose={() => setCreateModalIsOpen(false)} title={"create provider"}>
        <Typography align="center" sx={{mb: 3}} variant="h5" component="h3">Create Provider</Typography>
        <FormProvider submitHandler={createProvider}/>
      </AppModal>
      <AppModal open={updateModalIsOpen} handleClose={() => setUpdateModalIsOpen(false)} title={"Update this provider"}>
        <Typography align="center" sx={{mb: 3}} variant="h5" component="h3">Update this Provider</Typography>
        <FormProvider provider={currentProvider} submitHandler={updateProvider}/>
      </AppModal>
    </>
  );
};

export default Providers;