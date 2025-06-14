
// Body Section (Rescard Component) //child Component

const Restcard = ({ resdata }) => {
  const { cloudinaryImageId, name, costForTwo, cuisines,avgRating } = resdata.info;                                                          // I destructured here the props for better code readability, instead of using resdata.info.{/*The respective property name*/}
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h4>{name}</h4>
      <h5>{cuisines.join()}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};


export default Restcard;