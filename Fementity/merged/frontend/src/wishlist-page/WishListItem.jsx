import { CloseButton, Flex, Link, Select, useColorModeValue, Button } from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'
import { WishListProductMeta } from './WishListProductMeta'
import { FaArrowRight } from 'react-icons/fa'
import {BsCart3} from 'react-icons/bs'

export const WishListItem = (props) => {
  const {
    isGiftWrapping,
    name,
    description,
    quantity,
    imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
  } = props
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CloseButton aria-label={`Delete ${name} from cart`} onClick={onClickDelete} />
      <WishListProductMeta
        name={name}
        description={description}
        image={imageUrl}
      />
      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <PriceTag price={price} currency={currency} />
        <Button bg={'#B97375'} color="white" size="lg" fontSize="md" rightIcon={<BsCart3/>}>
          Add to cart
        </Button>
        <Button bg={'#B97375'} color="white" size="lg" fontSize="md" rightIcon={<FaArrowRight/>}>
          Buy now
        </Button>
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  )
}
