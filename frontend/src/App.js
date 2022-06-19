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

            <FirstScreen/>
            <div className='transition-blur'/>
            <AboutScreen/>
            <div className='transition-blur-2'/>
            <NewsScreen/>
            <div className='transition-blur-3'/>
            <div className='black-image-2'/>
            <GalleryScreen/>
            <TeamScreen/>
        </div>
    );
}

export default App;