const handleSubmit  =(event) =>{
    event.preventDefault()
    console.log(event.preventDefault)
  }
  const inputLocation=useRef()
  
  
    return (
      <div className="App">
          <h1>Rick and Morty</h1>
          <form onSubmit={handleSubmit}>
            <input ref={inputLocation} type="text" />
            <button>Search</button>
          </form>
          <LocationInfo location={location} /> 
          {/* Pinto de manera dinamica la info de cada url */}
          {/* Va a ir url por url y llamara a la funtion que las pinta */}
          <div>
            { location?.residents.map(url=>( /*en url se vuwelca cada elemento iterado*/
              <ResidentCard
              key={url}
              url={url} 
              />
            ))
  
            }
  
  
          </div>
      </div>
    )
  }
  
  export default App
  