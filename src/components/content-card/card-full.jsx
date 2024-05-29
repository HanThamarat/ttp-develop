import PropTypes from 'prop-types'

const Cardfull = ({children, ohterStyle, transition, duraion}) => {
  return (
    <div className={`bg-white mx-[250px] px-4 py-5 rounded-md drop-shadow-sm ${ohterStyle}`} data-aos={transition} data-aos-duration={duraion}>
      {children}
    </div>
  )
}

Cardfull.propTypes = {
  children: PropTypes.any,
  ohterStyle: PropTypes.string,
  transition: PropTypes.string,
  duraion: PropTypes.string,
}

export default Cardfull
