import "./MessageBox.css";
import kyc from "../../icons/Check-verified.svg"

type MessageBoxProps = {
  key: number;
  isSent: boolean;
  messageContent: string;
  senderAvatar: string;
  isKyc: boolean;
};
const MessageBox = (props: MessageBoxProps) => {
  const messageStyle = {
    backgroundColor: props.isSent ? "#1C63D5" : "white",
    color: props.isSent ? "white" : "#606060",
    borderRadius: props.isSent ? "12px 12px 0px 12px" : "0px 12px 12px 12px",
  };

  const style = {
    padding: "8px",
    marginTop: "8px",
    alignSelf: props.isSent ? "flex-end" : "flex-start",
    maxWidth: "80%",
  };

  return (
    <div style={style}>
      <div className="mseg-content">
        {!props.isSent && (
          <div className="avatar-kyc">
            <img
              src={props.senderAvatar}
              alt="Sender avatar"
              className="avatar"
            />
            {!props.isKyc && (<img
              src={kyc}
              alt="Sender kyc check"
              className="kyc"
            />)}
          </div>
        )}
        <p style={messageStyle}>{props.messageContent}</p>
      </div>
    </div>
  );
};

export default MessageBox;
