const Notification = (props) => {
  //  Write your code here.
  const { container, source, message } = props;
  const notificationCon = `notification ${container}`;

  return (
    <div className={notificationCon}>
      <img className="image" src={source} />
      <p className="paragraph">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="main-heading">Notifications</h1>
    <div className="note">
      <Notification
        container="first"
        source="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        container="second"
        source="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        container="third"
        source="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        container="fourth"
        source="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
