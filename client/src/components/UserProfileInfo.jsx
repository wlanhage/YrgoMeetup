import RedButton from "./RedButton";
import '../App.css'

function UserProfileInfo(props) {

   const profilePicture = {

        width: 153,
        heght: 153,
        BorderRadius: 100,
    }

    const header = {
        fontSize: '34px',
        color: 'black', 
        fontFamily: 'inter',
        fontWeight: 400,
    }

    const paragraph = {
        fontSize: '16px',
        color: 'black', 
        fontFamily: 'inter',
    }
        const form = {
            display: 'flex',
            flexDirection: 'column',
        
        }

        // show user image, name, area of expertise, tags
return (
    <>
    <img style={profilePicture} src=""/* add image from database*/ alt="profile Picture" />
    <h2 style={header}>{props.name}</h2>
    <p style={paragraph}>{props.area}</p>
    <p style={paragraph}>Mina Taggar</p>
    <form style={form} action="">
   <span> <input type="checkbox" id="react" name="react"/>
    <label style={paragraph} for="react">React</label></span>

    <span> <input type="checkbox" id="php" name="php"/>
    <label style={paragraph} for="php">PHP</label></span>

    <span> <input type="checkbox" id="js" name="javaScript"/>
    <label style={paragraph}for="js">Javascript</label></span>
    </form>
    </>
)
}
export default UserProfileInfo;