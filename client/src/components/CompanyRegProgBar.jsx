


function CompanyRegProgBar ({number, grayBarWidth, redBarWidth}) {


    const ProgBarContainer = {
        display: 'flex',
        flexDirection: 'row',
        width: '333px',
        justifyContent: 'space-between',

        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '15px',
    }

    const grayBar = {
        width: grayBarWidth,
        height: '3px',
        backgroundColor: 'gray',
        borderRadius: '10px',
        transition: 'width 0.7s ease-in-out',

    }

    const redBar = {
        width: redBarWidth,
        height: '3px',
        backgroundColor: '#F52A3B',
        borderRadius: '50px',
        transition: 'width 0.7s ease-in-out',
    }

    return (
        <>
            <div>Steg {number} av 3</div>
            <div style={ProgBarContainer}>
                <div style={redBar}></div>
                <div style={grayBar}></div>
            </div>
        
        </>
    )
}

export default CompanyRegProgBar;