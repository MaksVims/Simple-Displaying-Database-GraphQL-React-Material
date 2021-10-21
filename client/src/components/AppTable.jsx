import React from 'react';
import {IconButton, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {DeleteOutlined, SystemUpdateAltOutlined} from "@mui/icons-material";
import {formatFirstUpperCase} from "../utils";

const AppTable = ({data, updateHandler, removeHandler, subItem}) => {
  const fieldsName = Object.keys(data[0] || {})?.filter(field => field !== 'id' && field !== '__typename')

  if (!fieldsName.length) {
    return null
  }

  return (
    <>
      <TableHead sx={{width: '100%'}}>
        <TableRow>
          {fieldsName.map(field => (
            <TableCell key={field}>{formatFirstUpperCase(field)}</TableCell>
          ))}
          <TableCell align={"center"}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(item => (
          <TableRow key={item.id}>
            {fieldsName.map(itemField => (
              <React.Fragment key={itemField}>
                {typeof item[itemField] === 'object' ?
                  subItem(item[itemField]) :
                  <TableCell key={itemField}>{String(item[itemField])}</TableCell>
                }
              </React.Fragment>
              ))}
            <TableCell align={"center"} sx={{width: '150px'}}>
              <IconButton onClick={() => updateHandler(item)} sx={{mr: '20px'}}><SystemUpdateAltOutlined
                color='success'/></IconButton>
              <IconButton onClick={() => removeHandler(item)}><DeleteOutlined color='error'/></IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody></>
  );
};

export default AppTable;