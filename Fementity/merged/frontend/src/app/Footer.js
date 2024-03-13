import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
import {Box,Container,Row,Column,FooterLink,} from "../theme/FooterStyles";

const Footer = () => {
    return (

        <Box>
            <h1 style={{ color: "white",
                textAlign: "center",
                marginTop: "-50px" }}>

            </h1>
            <Container>
                <Row>
                    <Column>

                        <FooterLink href="/">Terms Of Use</FooterLink>

                    </Column>
                    <Column>

                        <FooterLink href="/">Privacy Policy</FooterLink>

                    </Column>
                    <Column>

                        <FooterLink href="/about">About Us</FooterLink>

                    </Column>
                    <Column>

                        <FooterLink href="/about">Contact Us</FooterLink>

                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;

