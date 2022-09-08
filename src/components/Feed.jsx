import { Box, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"



export const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"} }}>

      <Box sx={{ height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>

        {/* <Sidebar/> */}

        <Typography>

        </Typography>
      
      </Box>


    </Stack>
  )
}
