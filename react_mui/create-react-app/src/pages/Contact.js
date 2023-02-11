import Iframe from 'react-iframe'

function Contact() {
    return (
      <div>
       (707) 395-5090<br/>
       info@goldennectarfarm.com
       <p>
        6364 Starr Rd
        Windsor, CA 95492
       </p>
       <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.4932605030185!2d-122.84162038437562!3d38.52239637963011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80843dba8819a789%3A0xf721e6eae4a502ea!2s6364%20Starr%20Rd%2C%20Windsor%2C%20CA%2095492!5e0!3m2!1sen!2sus!4v1676071237226!5m2!1sen!2sus"
        width="100%"
        height="300px"
        id="googlemap"
        frameBorder="1"
        display="initial"
        position="relative"/>
      </div>
    );
  }
  
  export default Contact;
  