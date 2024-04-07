import {
  CheckOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ButtonComp from "components/Button/Button";
import { PRICING_PAKAGE } from "constant/contents";
import React from "react";

const PricingPakage = () => {
  return (
    <Box py={{ md: 10, sm: 6, xs: 6 }} >
      <Container maxWidth="lg" sx={{ bgcolor: "rgb(236, 237, 237)", py: { md: 8 ,sm:5,xs:3} }} >
        {/* <Box position={"absolute"} right={0} top={0} width={"300px"} zIndex={-1}>
        <img
          width={"100%"}
          style={{ opacity: 0.8 }}
          src="https://wedding-wonders.bugfinder.net/assets/uploads/content/6332933b3d1851664258875.png"
          alt=""
        />
      </Box> */}
        <Typography fontSize={"2.2rem"} fontWeight={600} textAlign={"center"}>
          Packages
        </Typography>

        <Grid container spacing={{ md: 6,sm:3,xs:2 }} px={{ md: 3 }} textAlign={"center"}>
          {PRICING_PAKAGE.map((feature, i) => (
            <Grid item md={4} sm={6} xs={12} mt={5} key={i}>
              <Box bgcolor={"white"}
                boxShadow={"0 0 12px 1px lightGray"}
                p={4}
                borderRadius={"10px"}
                height={"350px"}
              >

                <Typography fontSize={"1.2rem"} fontWeight={600} my={1.5}>
                  {feature?.title}
                </Typography>
                <Typography fontSize={"1.8rem"} fontWeight={600}>
                  <small style={{ fontWeight: "lighter" }}>
                    {feature?.usd}
                  </small>
                  {feature?.price}
                </Typography>
                <Box my={2}>
                  <ButtonComp title={feature?.btnTitle} />
                </Box>
                <List sx={{ width: "250px", margin: "auto" }}>
                  {
                    feature?.avtrAccss && (
                      <ListItem sx={{ fontSize: "14px", color: 'gray' }}>
                        <CheckOutlined fontSize="small" sx={{ mr: 1 }} />
                        {feature?.avtrAccss}
                      </ListItem>
                    )
                  }
                  {
                    feature?.avtrScne && (
                      <ListItem sx={{ fontSize: "14px", color: 'gray' }}>
                        <CheckOutlined fontSize="small" sx={{ mr: 1 }} />
                        {feature?.avtrScne}
                      </ListItem>
                    )
                  }
                  {
                    feature?.duration && (
                      <ListItem sx={{ fontSize: "14px", color: 'gray' }}>
                        <CheckOutlined fontSize="small" sx={{ mr: 1 }} />
                        {feature?.duration}
                      </ListItem>
                    )
                  }
                  {
                    feature?.scenes && (
                      <ListItem sx={{ fontSize: "14px", color: 'gray' }}>
                        <CheckOutlined fontSize="small" sx={{ mr: 1 }} />
                        {feature?.scenes}
                      </ListItem>
                    )
                  }
                  {
                    feature?.features && (
                      <ListItem sx={{ fontSize: "14px", color: 'gray' }}>
                        <CheckOutlined fontSize="small" sx={{ mr: 1 }} />
                        {feature?.features}
                      </ListItem>
                    )
                  }
                  {
                    feature?.upldVoice && (
                      <ListItem sx={{ fontSize: "14px", color: 'gray' }}>
                        <CheckOutlined fontSize="small" sx={{ mr: 1 }} />
                        {feature?.upldVoice}
                      </ListItem>
                    )
                  }
                  {
                    feature?.vidLenght && (
                      <ListItem sx={{ fontSize: "14px", color: 'gray' }}>
                        <CheckOutlined fontSize="small" sx={{ mr: 1 }} />
                        {feature?.vidLenght}
                      </ListItem>
                    )
                  }
                  {
                    feature?.voiceDnld && (
                      <ListItem sx={{ fontSize: "14px", color: 'gray' }}>
                        <CheckOutlined fontSize="small" sx={{ mr: 1 }} />
                        {feature?.voiceDnld}
                      </ListItem>
                    )
                  }

                </List>
                
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingPakage;

