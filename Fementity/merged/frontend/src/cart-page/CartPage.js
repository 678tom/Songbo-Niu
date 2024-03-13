import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack, Text,
    useColorModeValue as mode, VStack,
} from '@chakra-ui/react'
import * as React from 'react'
import { CartItem } from './CartItem'
import { ReccomendItem } from './ReccomendItem'
import { CartOrderSummary } from './CartOrderSummary'
import { cartData } from './_data'

export default function cartPage() {
    return(
    <Box
        maxW={{
            base: '4xl',
            lg: '8xl',
        }}
        mx="auto"
        px={{
            base: '4',
            md: '8',
            lg: '12',
        }}
        py={{
            base: '6',
            md: '8',
            lg: '12',
        }}
    >
        <Stack
            direction={{
                base: 'column',
                lg: 'row',
            }}
            align={{
                lg: 'flex-start',
            }}
            spacing={{
                base: '8',
                md: '16',
            }}
        >
            <Stack
                spacing={{
                    base: '8',
                    md: '10',
                }}
                flex="2"
            >
                <Heading fontSize="4xl" fontWeight="200" color={'#b97375'} fontStyle={'Versailles'} borderBottom="2px solid" borderBottomColor="primary">
                    Shopping Cart (3 items)
                </Heading>

                <Stack spacing="6" borderBottom="2px solid" borderBottomColor="primary" paddingBottom={'20px'}>
                    {cartData.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </Stack>
            </Stack>
        </Stack>
        <Stack
            padding = '20px'
            spacing={{
                base: '8',
                md: '10',
            }}
            flex="2"
        >

        <Stack
            direction={{
                base: 'column',
                lg: 'row',
            }}
            align={{
                lg: 'flex-start',
            }}
            spacing={{
                base: '8',
                md: '16',
            }}
        >

            <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
                <Heading size="md" fontWeight={'200'} color={'#b97375'}>Recommended for you</Heading>
            {cartData.map((item) => (
                <ReccomendItem key={item.id} {...item} />
            ))}
        </Stack>
        <Flex direction="column" align="center" flex="1">
            <CartOrderSummary/>
            <HStack mt="6" fontWeight="semi-bold">
                <p>or</p>
                <Link href={"./"} color={mode('#b97375', '#b97375')}>Continue shopping</Link>
            </HStack>
        </Flex>
        </Stack>
        </Stack>
    </Box>
    );
}