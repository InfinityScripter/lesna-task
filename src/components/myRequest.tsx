import { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Box,
  Button,
  Grid,
  Image
} from '@chakra-ui/react'
import ShipCard from './ShipCard'
import Loader from './Loader/Loader'

const GET_DATA = gql`
  query allShips {
    vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`

export interface IShips {
  title: string
  description: string
  icons: {
    large: string
    medium: string
  }
  level: number
  type: {
    name: string
    title: string
    icons: {
      default: string
    }
  }
  nation: {
    name: string
    title: string
    color: string
    icons: {
      large: string
      medium: string
      small: string
    }
  }
}

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
    let filterState
    let setFilterState

    switch (filterType) {
      case 'level':
        filterState = filterLevel
        setFilterState = setFilterLevel
        break
      case 'nation':
        filterState = filterNation
        setFilterState = setFilterNation
        break
      case 'type':
        filterState = filterType
        setFilterState = setFilterType
        break
    }

    setFilterState((prevState: string[]) => {
      if (prevState.includes(value)) {
        return prevState.filter((item) => item !== value)
      } else {
        return [...prevState, value]
      }
    })
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
        <Accordion mb={4} allowMultiple index={expandedIndices}>
          <AccordionItem p={1}>
            <AccordionButton onClick={() => handleFilterSelection(0)}>
              Level Filter
            </AccordionButton>
            <AccordionPanel>
              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                {levels.map((level) => (
                  <Button
                    key={level}
                    onClick={() => handleFilterClick('level', level.toString())}
                    colorScheme={
                      filterLevel.includes(level.toString()) ? 'blue' : 'gray'
                    }
                  >
                    Level {level}
                  </Button>
                ))}
              </Grid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem p={1}>
            <AccordionButton onClick={() => handleFilterSelection(1)}>
              Nation Filter
            </AccordionButton>
            <AccordionPanel>
              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                {nations.map((nation) => (
                  <Button
                    key={nation}
                    onClick={() => handleFilterClick('nation', nation)}
                    colorScheme={
                      filterNation.includes(nation) ? 'blue' : 'gray'
                    }
                    leftIcon={
                      <Image src={nationIcons[nation]} boxSize="30px" />
                    }
                    justifyContent="flex-start"
                  >
                    {nation}
                  </Button>
                ))}
              </Grid>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem p={1}>
            <AccordionButton onClick={() => handleFilterSelection(2)}>
              Type Filter
            </AccordionButton>
            <AccordionPanel>
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
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Button onClick={handleResetFilters} colorScheme="blackAlpha" mb={4}>
          Сбросить фильтры
        </Button>
      </Box>
      <Box pl={4} width="75%">
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
