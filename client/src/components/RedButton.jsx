
function RedButton ({text}) {

    const style = {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '35px 35px 35px 35px',
        width: 'calc(100vw - 4rem)',
        height: '56px',
        padding: '16px 24px',
        justifyContent: 'space-between',
        fontFamily: 'inter',
        
    };

    return (
        <button style={style}> 
            {text}
        </button>
        
    )
}

export default RedButton;