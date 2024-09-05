import Layout from "../components/Layout";
import { FeatureItem } from "../components/FeatureItem";

function Home() {
  return (
    <Layout>
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>

          <FeatureItem
            icon="./img/icon-chat.png"
            alt="Chat Icon"
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />

          <FeatureItem
            icon="./img/icon-money.png"
            alt="Money Icon"
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
          />

          <FeatureItem
            icon="./img/icon-money.png"
            alt="Money Icon"
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
          />
        </section>
      </main>
    </Layout>
  );
}

export default Home;
