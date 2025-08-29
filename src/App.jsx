import SearchBar from "./components/SearchBar"
import Grid from "./components/Grid"
import ItemList from "./components/ItemList"

function App() {

  return (
    <>
    <section className="searchArea">
      <SearchBar/>
    </section>
    <section className="gridArea">
      <Grid/>
      <Grid/>
      <Grid/>
      <Grid/>
      <Grid/>
      <Grid/>
      <Grid/>
    </section>
    <section><footer></footer></section>
    </>
  )
}

export default App
