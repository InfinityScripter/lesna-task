import React from 'react'
import { Button, Grid, Image } from '@chakra-ui/react'

interface NationFilterProps {
  nations: string[]
  filterNation: string[]
  handleFilterClick: (filterType: 'nation', value: string) => void
  nationIcons: { [key: string]: string }
}

const NationFilter: React.FC<NationFilterProps> = ({
  nations,
  filterNation,
  handleFilterClick,
  nationIcons
}) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={2}>
      {nations.map((nation) => (
        <Button
          key={nation}
          onClick={() => handleFilterClick('nation', nation)}
          colorScheme={filterNation.includes(nation) ? 'blue' : 'gray'}
          leftIcon={<Image src={nationIcons[nation]} boxSize="30px" />}
          justifyContent="flex-start"
        >
          {nation}
        </Button>
      ))}
    </Grid>
  )
}

export default NationFilter
