function CompanyRegForm() {
    return (
        <>
        <h2>Anmälningsformulär</h2>
        <form action="">
            <label htmlFor="">Företagsnamn</label><br />
            <input type="text" placeholder="Namn..." /> <br /><br />

            <label htmlFor="">Vilka är vi?</label><br />
            <input type="text" placeholder="Text är..." /><br /><br />

            <label htmlFor="">Kontaktperson</label><br />
            <input type="text" placeholder="Namn..." /><br /><br />

            <label htmlFor="">Vad vi jobbar med</label><br />
            <input type="text" placeholder="Utveckling inom backend/frontend..." /><br /><br />

            <label htmlFor="">Webbplats</label><br />
            <input type="text" placeholder="www." /><br /><br />
            
        </form>
        </>
    )
}

export default CompanyRegForm;