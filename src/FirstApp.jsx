import PropTypes from 'prop-types'


export const FirstApp = ( { tittle, subTittle, name } ) => {

  return (
    <>
      <h1>{ tittle  }</h1>
      {/* <h2>{ getSaludo("Bastian") }</h2> */}
      <p> { subTittle }</p>
      <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
  tittle: PropTypes.string.isRequired,
  subTittle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: "Fernando Herrera",
  subTittle: "No hay subtitulo",
  // tittle: "No hay titulo",
}