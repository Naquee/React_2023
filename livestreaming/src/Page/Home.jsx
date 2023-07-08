import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const[roomId,setRoomId]=useState()
    const navigate = useNavigate()

    const handleJoin = () => {
        navigate(`room/${roomId}`)

    }
  return (
    <Box display="flex" w="50%" m="auto" mt="2rem">
    <Input w="20rem" type="text" placeholder='Enter room id' value={roomId} onChange={(e) =>setRoomId(e.target.value)}/>
    <Button colorScheme='pink' onClick={handleJoin}>Join</Button>
    </Box>
  )
}

export default Home
