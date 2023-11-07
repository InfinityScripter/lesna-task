import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Box,
  Button,
  Heading
} from '@chakra-ui/react'
import ShipCard from './ShipCard'
import Loader from './Loader/Loader'
import { IShips } from '../vite-env'
import { GET_DATA } from '../queries'
import LevelFilter from './LevelFilter'
import NationFilter from './NationFilter'
import TypeShipList from './TypeShipList'

const ApiRequest = () => {
  const { loading, error, data } = useQuery<{ vehicles: IShips[] }>(GET_DATA)
  const [filterLevel, setFilterLevel] = useState<string[]>([])
  const [filterNation, setFilterNation] = useState<string[]>([])
  const [filterType, setFilterType] = useState<string[]>([])
  const [levels, setLevels] = useState<number[]>([])
  const [nations, setNations] = useState<string[]>([])
  const [types, setTypes] = useState<string[]>([])
  const [nationIcons, setNationIcons] = useState<{ [key: string]: string }>({})
  const [typeIcons, setTypeIcons] = useState<{ [key: string]: string }>({})
  const [expandedIndices, setExpandedIndices] = useState<number[]>([])

  const handleFilterClick = (
    filterType: 'level' | 'nation' | 'type',
    value: string
  ) => {
    switch (filterType) {
      case 'level':
        setFilterLevel((prevState) => {
          if (prevState.includes(value)) {
            return prevState.filter((item) => item !== value)
          } else {
            return [...prevState, value]
          }
        })
        break
      case 'nation':
        setFilterNation((prevState) => {
          if (prevState.includes(value)) {
            return prevState.filter((item) => item !== value)
          } else {
            return [...prevState, value]
          }
        })
        break
      case 'type':
        setFilterType((prevState) => {
          if (prevState.includes(value)) {
            return prevState.filter((item) => item !== value)
          } else {
            return [...prevState, value]
          }
        })
        break
      default:
        break
    }
  }

  const handleResetFilters = () => {
    setFilterLevel([])
    setFilterNation([])
    setFilterType([])
    setExpandedIndices([])
  }
  const handleFilterSelection = (index: number) => {
    setExpandedIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((ind) => ind !== index)
      }
      return [...prevIndices, index]
    })
  }

  useEffect(() => {
    if (data) {
      setLevels(
        Array.from(new Set(data.vehicles.map((v) => v.level))).sort(
          (a, b) => a - b
        )
      )
      setNations(
        Array.from(new Set(data.vehicles.map((v) => v.nation.name))).sort()
      )
      setTypes(
        Array.from(new Set(data.vehicles.map((v) => v.type.name))).sort()
      )

      const nationIconData: { [key: string]: string } = {}
      const typeIconData: { [key: string]: string } = {}
      data.vehicles.forEach((vehicle) => {
        nationIconData[vehicle.nation.name] = vehicle.nation.icons.small
        typeIconData[vehicle.type.name] = vehicle.type.icons.default
      })
      setNationIcons(nationIconData)
      setTypeIcons(typeIconData)
    }
  }, [data])

  if (loading) return <Loader />
  if (error) return <p>Error</p>

  const filteredVehicles = data?.vehicles
    .filter(
      (vehicle) =>
        filterLevel.length === 0 ||
        filterLevel.includes(vehicle.level.toString())
    )
    .filter(
      (vehicle) =>
        filterNation.length === 0 || filterNation.includes(vehicle.nation.name)
    )
    .filter(
      (vehicle) =>
        filterType.length === 0 || filterType.includes(vehicle.type.name)
    )

  return (
    <Flex p={4} direction="row">
      <Box pr={4} width="25%">
        <Heading mb={4} size="md">
          Выбери свой корабль
        </Heading>
        <Accordion mb={4} allowMultiple index={expandedIndices}>
          <AccordionItem p={1}>
            <AccordionButton onClick={() => handleFilterSelection(0)}>
              Level Filter
            </AccordionButton>
            <AccordionPanel>
              <LevelFilter
                levels={levels}
                filterLevel={filterLevel}
                handleFilterClick={handleFilterClick}
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem p={1}>
            <AccordionButton onClick={() => handleFilterSelection(1)}>
              Nation Filter
            </AccordionButton>
            <AccordionPanel>
              <NationFilter
                nations={nations}
                filterNation={filterNation}
                handleFilterClick={handleFilterClick}
                nationIcons={nationIcons}
              />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem p={1}>
            <AccordionButton onClick={() => handleFilterSelection(2)}>
              Type Filter
            </AccordionButton>
            <AccordionPanel>
              <TypeShipList
                types={types}
                filterType={filterType}
                handleFilterClick={handleFilterClick}
                typeIcons={typeIcons}
              />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Button onClick={handleResetFilters} colorScheme="blackAlpha" mb={4}>
          Сбросить фильтры
        </Button>
      </Box>
      <Box pl={4} width="75%">
        <Heading mb={4} size="md">
          Все корабли
        </Heading>
        {filteredVehicles?.length === 0 ? (
          <p>Ничего не найдено</p>
        ) : (
          filteredVehicles?.map((vehicle) => <ShipCard battleShips={vehicle} />)
        )}
      </Box>
    </Flex>
  )
}

export default ApiRequest
