import React from 'react'

const CountrySelector = (props) => {
  const options = props.countries.map((country, index) => {
    return <option key={index} value={index}>{country.name}</option>
  })

  function handleChange(event){
    props.onCountrySelect(event.target.value)
  }


  return(
    <select onChange={handleChange}>
      <option selected disabled>Pick a country!</option>
      {options}
    </select>
  )

}

export default CountrySelector
