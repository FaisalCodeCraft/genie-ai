import React, { useContext } from 'react'
import { UseContext } from 'context'
import { Box, Container, Typography } from '@mui/material'


const AiTechnology = () => {
    const { mode } = useContext(UseContext)
    return (
        <Box
            pt={{ md: 25 }}
            py={{ md: 10 }}
            bgcolor={mode === "light" ? "rgb(236, 237, 237)"
                : "rgb(34,34,34)"}
        >
            <Container maxWidth="md">
                <Typography sx={{
                    fontSize: { md: "3em" },
                    fontWeight: "bold",
                    px: { md: 15 },
                    textAlign: "center",
                    lineHeight: { md: "65px" }

                }}>
                    Innovative, Human-Focused AI Technology
                </Typography>
                <Typography
                    py={{ md: 3 }}
                    fontSize={{ md: "1.2em" }}
                    textAlign={"center"}
                >
                    We live in a world where humans and technology continuously interact with each other.
                    A new environment centered on people and technology requires a change in perception.
                </Typography>
                <Typography
                    py={{ md: 3 }}
                    fontSize={{ md: "1.2em" }}
                    textAlign={"center"}
                >
                    Here at DeepBrain, we believe that artificial intelligence
                    can help focus and accelerate the growth of every talented
                    individual. Technology can never replace people, but
                    rather assist them to focus on maximizing their
                    personal capabilities. We only exist to advance the
                    quality of human life by creating user-friendly AI systems.


                </Typography>

            </Container>
        </Box>
    )
}

export default AiTechnology