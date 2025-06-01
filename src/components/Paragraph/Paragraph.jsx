import PropTypes from 'prop-types';

function Paragraph(props) {
    return(
        <>
            <p className="colorText" style={{color: props.color, textAlign: 'center'}}> 
                {props.text.toUpperCase()} 
            </p>
        </>
    )
}

Paragraph.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Paragraph;
