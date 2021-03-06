import React from "react"
import { Box } from "@mui/material"
import { useAuthState } from "react-firebase-hooks/auth"

import { auth } from "../config/firebase"

const Home = () => {
  const [user] = useAuthState(auth)
  return (
    <Box sx={{ margin: 10 }}>
      Welcome to Mood Meter! <br />
      Current user: {user?.email}
    </Box>
  )
}

export default Home
