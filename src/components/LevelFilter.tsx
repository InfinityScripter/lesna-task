import { Button, Grid } from '@chakra-ui/react'

interface LevelFilterProps {
  levels: number[]
  filterLevel: string[]
  handleFilterClick: (
    filterType: 'level' | 'nation' | 'type',
    value: string
  ) => void
}

const LevelFilter: React.FC<LevelFilterProps> = ({
  levels,
  filterLevel,
  handleFilterClick
}) => (
  <Grid templateColumns="repeat(2, 1fr)" gap={2}>
    {levels.map((level) => (
      <Button
        key={level}
        onClick={() => handleFilterClick('level', level.toString())}
        colorScheme={filterLevel.includes(level.toString()) ? 'blue' : 'gray'}
      >
        Level {level}
      </Button>
    ))}
  </Grid>
)

export default LevelFilter
