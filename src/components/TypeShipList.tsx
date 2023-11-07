import React from 'react'
import { Button, Grid, Image } from '@chakra-ui/react'

interface TypeShipListProps {
  types: string[]
  filterType: string[]
  handleFilterClick: (filterType: 'type', value: string) => void
  typeIcons: { [key: string]: string }
}

const TypeShipList: React.FC<TypeShipListProps> = ({
  types,
  filterType,
  handleFilterClick,
  typeIcons
}) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={2}>
      {types.map((type) => (
        <Button
          key={type}
          onClick={() => handleFilterClick('type', type)}
          colorScheme={filterType.includes(type) ? 'blue' : 'gray'}
          leftIcon={<Image src={typeIcons[type]} boxSize="30px" />}
          justifyContent="flex-start"
        >
          {type}
        </Button>
      ))}
    </Grid>
  )
}

export default TypeShipList
