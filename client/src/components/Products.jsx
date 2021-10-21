import React, {useEffect, useState} from 'react';
import {TableCell, TableContainer, Typography} from "@mui/material";
import BtnAddItem from "./BtnAddItem";
import {useMutation, useQuery} from "@apollo/client";
import DialogRemove from "./DialogRemove";
import AppModal from "./AppModal";
import AppTable from "./AppTable";
import {GET_PRODUCTS} from "../query/product";
import {CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "../mutation/product";

const Products = () => {
  const [currentProduct, setCurrentProduct] = useState(null)
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false)
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false)
  const [removeDialogIsOpen, setRemoveDialogIsOpen] = useState(false)
  const [products, setProducts] = useState([])
  const {data: dataProducts, loading: loadingProducts, refetch: refetchProducts} = useQuery(GET_PRODUCTS)
  const [deleteProductMutation] = useMutation(DELETE_PRODUCT)
  const [createProductMutation] = useMutation(CREATE_PRODUCT)
  const [updateProductMutation] = useMutation(UPDATE_PRODUCT)

  useEffect(() => {
    if (!loadingProducts) {
      setProducts(dataProducts.products)
    }
  }, [dataProducts])

  const openUpdateModal = (product) => {
    setCurrentProduct(product)
    setUpdateModalIsOpen(true)
  }
  const openRemoveDialog = (product) => {
    setCurrentProduct(product)
    setRemoveDialogIsOpen(true)
  }
  const deleteProduct = async () => {
    await deleteProductMutation({
      variables: {id: currentProduct.id}
    })
    setRemoveDialogIsOpen(false)
    await refetchProducts()
  }
  const createProduct = async (data) => {
    await createProductMutation({
      variables: {...data}
    })
    setCreateModalIsOpen(false)
    await refetchProducts()
  }
  const updateProduct = async (data) => {
    await updateProductMutation({
      variables: {...data}
    })
    setUpdateModalIsOpen(false)
    await refetchProducts()
  }

  return (
    <>
      {loadingProducts ? <h1>Load...</h1> :
        <TableContainer component={"table"} sx={{width: '100%', backgroundColor: '#b7b3b3'}}>
          <AppTable
            data={products || []}
            removeHandler={openRemoveDialog}
            updateHandler={openUpdateModal}
            subItem={(data) => <TableCell> {data.organization}</TableCell>}
          />
        </TableContainer>
      }
      <BtnAddItem onClick={() => setCreateModalIsOpen(true)}>+</BtnAddItem>
      <DialogRemove
        open={removeDialogIsOpen}
        onClose={() => setRemoveDialogIsOpen(false)}
        title={"Remove item"}
        content={"Are you sure you want to remove this item"}
        confirmHandler={deleteProduct}
      />
      <AppModal open={createModalIsOpen} handleClose={() => setCreateModalIsOpen(false)} title={"create product"}>
        <Typography align="center" sx={{mb: 3}} variant="h5" component="h3">Create product</Typography>
      </AppModal>
      <AppModal open={updateModalIsOpen} handleClose={() => setUpdateModalIsOpen(false)} title={"Update this product"}>
        <Typography align="center" sx={{mb: 3}} variant="h5" component="h3">Update this product</Typography>
      </AppModal>
    </>
  );
};

export default Products;