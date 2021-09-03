import './intro.scss'
// import KeyboardArrowDownIcon from '@material-ui/icons';

export default function Intro() {
    return (
        <div className="intro" id="intro">
           <div className="profileImage">
                <div className="imageContainer">
                    <img src="assest/profileImg.png" alt="Author" />
                </div>
           </div>
           <div className="introText">
                <div className="wrapper">
                    <h2>Hello Beautiful People!!!</h2> 
                    <h3>My name is </h3>
                    <h1>Ritika Bhatt</h1>
                    <h4>I'm a passionate coder</h4>
                    <h4>Upcoming Software Engineer</h4>
                </div>
                {/* <KeyboardArrowDownIcon/> */}
           </div>
        </div>
    )
}
