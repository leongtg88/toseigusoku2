import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Hero2 from '../Components/hero2';
import Hero3 from '../Components/hero3';
import ContentSection from '../Components/ContentSection';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      
      <Hero />
      <ContentSection bgColor="bg-white" textColor="text-black" title="About Us">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        </p>
      </ContentSection>
      <ContentSection bgColor="bg-gray-100" textColor="text-black" title="Our Services">
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
        </p>
      </ContentSection>
      <ContentSection bgColor="bg-black" textColor="text-white" title="Our Mission" titleColor="text-indigo-400">
        <p>
          Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </ContentSection>
      <ContentSection bgColor="bg-white" textColor="text-black" title="Testimonials">
        <p>
          Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.
        </p>
      </ContentSection>
      <ContentSection bgColor="bg-gray-100" textColor="text-black" title="Contact Us">
        <p>
          Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum.
        </p>
      </ContentSection>
      <Footer />
    </>
  );
};

export default Home;
