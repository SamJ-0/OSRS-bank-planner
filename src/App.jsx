import SearchBar from "./components/SearchBar"
import Grid from "./components/Grid"

function App() {

  return (
    <>
          <div className="titleContainer">
              <h1 className="title"><span>OSRS</span>Bank planner</h1>
      </div>
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
