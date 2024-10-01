import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import Alexa from "./images/alexa.png";
import Cortana from "./images/cortana.png";
import Siri from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistant</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard 
               title="Alexa" 
               handle="@alexa99" 
               imgsrc={Alexa}
                />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                imgsrc={Cortana}
              />
            </div>
            <div className="column is-3">
              <ProfileCard title="Siri" handle="@Siri01" imgsrc={Siri} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
