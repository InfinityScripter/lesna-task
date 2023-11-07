import { Box, Heading } from '@chakra-ui/react'
import ShipCard from './ShipCard'
import { IShips } from '../vite-env'

interface ShipListProps {
  filteredVehicles: IShips[]
}

const ShipList: React.FC<ShipListProps> = ({ filteredVehicles }) => (
  <Box pl={4} width="75%">
    <Heading mb={4} size="md">
      Все корабли
    </Heading>
    {filteredVehicles?.length === 0 ? (
      <p>Ничего не найдено</p>
    ) : (
      filteredVehicles.map((vehicle) => (
        <ShipCard key={vehicle.id} battleShips={vehicle} />
      ))
    )}
  </Box>
)

export default ShipList
