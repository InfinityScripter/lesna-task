import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './scss/App.scss'
import ApiRequest from './components/myRequest'
import { API_URL } from './queries'

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <ApiRequest />
      </ApolloProvider>
    </>
  )
}

export default App
