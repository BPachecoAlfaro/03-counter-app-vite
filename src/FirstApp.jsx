import PropTypes from 'prop-types'


export const FirstApp = ( { title, subTitle, name } ) => {

  return (
    <>
      <h1 data-testid="test-title">{ title }</h1>
      {/* <h2>{ getSaludo("Bastian") }</h2> */}
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: "Fernando Herrera",
  subTitle: "No hay subtitulo",
  // tittle: "No hay titulo",
}