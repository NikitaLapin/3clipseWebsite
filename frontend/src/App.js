import './styles/App.css';
import FirstScreen from "./screens/FirstScreen/FirstScreen";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import NewsScreen from "./screens/NewsScreen/NewsScreen";
import GalleryScreen from "./screens/GalleryScreen/GalleryScreen";
import TeamScreen from "./screens/TeamScreen/TeamScreen";

const App = () => {

    return (
        <div className="App">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Inter:wght@300&display=swap');
            </style>
            <meta name='viewport' content='width=1170'/>

            <div className='wrapper'>
                <FirstScreen/>
                <AboutScreen/>
                <NewsScreen/>
                <GalleryScreen/>
                <TeamScreen/>
            </div>
        </div>
    );
}

export default App;