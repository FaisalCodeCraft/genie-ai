import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container, Typography } from '@mui/material'
import { FAQS } from 'constant/contents';
import ButtonComp from 'components/Button/Button';

const Help = () => {
    return (
        <Box position={"relative"} >
            <Box
                position={"absolute"}
                zIndex={-1}
                width={"100%"}
                height={"50vh"}
                background={"black"}
            >
                <img
                    width={"100%"}
                    height={"100%"}
                    style={{
                        filter: "brightness(50%)",
                        objectFit: "cover",

                    }}
                    src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Question MArk" />
            </Box>
            <Box display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                px={{ md: 10 }}
                pt={2}

            >
                <Typography
                    fontSize={"2em"}
                    fontWeight={"bold"}
                    color={"White"}>
                    GenieAi.
                </Typography>

                <ButtonComp title="Go to GenieAI" />
            </Box>

            <Box py={{ md: 10 }}>
                <Typography
                    fontSize={"2em"}
                    fontWeight={"bold"}
                    color={"White"}
                    textAlign={"center"}

                >
                    FAQs
                </Typography>
                <Typography
                    color={"White"}
                    textAlign={"center"}

                >
                    Check our Knowledge Base for more answers
                </Typography>
            </Box>


            <Container maxWidth="lg"
                sx={{ px: { md: 13 }, py: { md: 15 } }}
            >
                {
                    FAQS.map((q, i) => (
                        <Accordion sx={{
                            mt:2,
                            py:1,
                            borderRadius:"10px"
                        }}>
                            <AccordionSummary
                            sx={{fontWeight:"bold"}}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                               {q?.accSummary}
                            </AccordionSummary>
                            <AccordionDetails>
                               {q?.accDesc}
                            </AccordionDetails>

                        </Accordion>
                    ))
                }
            </Container>

        </Box>
    )
}

export default Help