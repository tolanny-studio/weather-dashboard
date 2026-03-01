import Form from "./Form";

const Footer = ({ getLocation }) => {
  return (
    <div className="sticky left-0 bottom-0 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] w-full mb-0">
      <Form getLocation={getLocation} />
    </div>
  );
};

export default Footer;

// 
