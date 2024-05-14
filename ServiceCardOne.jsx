// ServiceCardOne component
const ServiceCardOne = ({ services }) => {
    return (
      <div>
        {services.map(service => (
          <div key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" onClick={() => handleDiscoverMore(service.id)}>Discover more</a>
          </div>
        ))}
      </div>
    );
  };
  
  // Service Details component
  const ServiceDetails = ({ serviceId }) => {
    // Fetch service details based on serviceId and display
    return (
      <div>
        <h3>{service.title}</h3>
        <p>{service.details}</p>
      </div>
    );
  };
  
  // Main App component
  const App = () => {
    const [selectedService, setSelectedService] = useState(null);
  
    const handleDiscoverMore = (serviceId) => {
      setSelectedService(serviceId);
    };
  
    return (
      <div>
        <ServiceCardOne services={services} handleDiscoverMore={handleDiscoverMore} />
        {selectedService && <ServiceDetails serviceId={selectedService} />}
      </div>
    );
  };
  