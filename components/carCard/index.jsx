import styles from "./index.module.css";

const CarCard = ({ car, ...others }) => {
  console.log({ car });
  return (
    <div {...others} className={styles.card}>
      <div style={{ marginBottom: "15px" }}>
        {car?.files?.[0]?.path.startsWith("/") ? (
          <img
            src={`http://portal.prestigegallery.ir${car?.thumbnail}`}
            width="100%"
            alt=""
          />
        ) : (
          <div className={styles.imgPlaceHolder}></div>
        )}
      </div>
      <div
        style={{
          flexGrow: "1",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <div>{car?.brand?.value}</div>
        <div>
          {/* {car?.type?.value} */}
          {car?.model?.value}
        </div>
        <div>
          <div>{car?.production_year}</div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
