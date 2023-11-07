import React from 'react'
import { IShips } from '../vite-env'
import { Image, Text, Heading, VStack, Flex, Spacer } from '@chakra-ui/react'

interface ShipCardProps {
  battleShips: IShips
}

const ShipCard: React.FC<ShipCardProps> = ({ battleShips: ship }) => {
  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      mb={8}
      boxShadow="md"
      align="center"
    >
      <Image
        borderRadius="lg"
        src={ship.icons.medium}
        alt={ship.title}
        height="100%"
        width="350px"
        objectFit="cover"
        mr={2}
      />
      <VStack align="start" spacing={2}>
        <Heading as="h3" size="md">
          {ship.title}
        </Heading>
        <Text>Level: {ship.level}</Text>
        <Text>Nation: {ship.nation.title}</Text>
        <Image
          boxSize="30px"
          objectFit="cover"
          src={ship.nation.icons.small}
          alt={ship.nation.title}
        />
        <Text>Type: {ship.type.title}</Text>
        <Image
          boxSize="30px"
          objectFit="cover"
          src={ship.type.icons.default}
          alt={ship.type.name}
        />
        <Text>{ship.description}</Text>
      </VStack>
      <Spacer />{' '}
    </Flex>
  )
}

export default ShipCard
