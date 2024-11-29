import React from "react";
import "../../styles/componets/Modal/GstBenifitCard.scss";
import WalletCard from "./WalletCard";
import GstBenifitFooterCard from "./GstBenifitFooterCard";

function GstBenifitCard({ gstEarned }) {
  return (
    <div className="gstBenifitContainer">
      {/* GST Navbar */}
      <div className="gstHeader">
        <p className="gstHeaderText">GST benefits earned so far</p>
        <p className="gstMoneyEarned">{gstEarned}</p>
      </div>

      {/* GSTBody */}
      <div className="gstBenifitWrapper">
        <div className="gstDepositWorks">
          <div className="gstDepositWorksWrapper">
            {/* Title */}

            <div className="heroText">
              <p className="heroQuestion">How GST deposit works?</p>
              <div className="heroPay">
                <p className="youPay">You Pay</p>
                <p className="heroMoney">₹1000</p>
                <p className="heroBase">Inclusive of Govt. GST</p>
              </div>
            </div>
            {/* youpay */}
            {/* WalletCards */}

            {/* gstCardFooter */}
          </div>
        </div>
        <div className="wallet">
          <WalletCard
            value={780}
            type={"green"}
            description={"Goes to your wallet"}
            className="walletCard"
          />
          <div className="multipleArrows">
            <svg
              width="34"
              height="52"
              viewBox="0 0 34 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 0L17 36" stroke="#CDCDCD" stroke-dasharray="2 2" />
              <path
                d="M0.6875 49L5.6875 51.8868V46.1132L0.6875 49ZM3.92188 49.5H5V48.5H3.92188V49.5ZM5 49.5C5.33011 49.5 5.65732 49.4872 5.98117 49.462L5.90371 48.465C5.60561 48.4882 5.30423 48.5 5 48.5V49.5ZM7.9189 49.1572C8.56164 49.0035 9.1851 48.8001 9.78498 48.5513L9.40193 47.6276C8.85036 47.8563 8.27715 48.0433 7.68621 48.1847L7.9189 49.1572ZM11.5324 47.6593C12.0917 47.3158 12.6219 46.9296 13.1184 46.5051L12.4686 45.745C12.0116 46.1357 11.5237 46.4911 11.0091 46.8072L11.5324 47.6593ZM14.5051 45.1184C14.9296 44.6219 15.3158 44.0917 15.6593 43.5324L14.8072 43.0091C14.4911 43.5237 14.1357 44.0116 13.745 44.4686L14.5051 45.1184ZM16.5513 41.785C16.8001 41.1851 17.0035 40.5616 17.1572 39.9189L16.1847 39.6862C16.0433 40.2772 15.8563 40.8504 15.6276 41.4019L16.5513 41.785ZM17.462 37.9812C17.4872 37.6573 17.5 37.3301 17.5 37H16.5C16.5 37.3042 16.4882 37.6056 16.465 37.9037L17.462 37.9812ZM17.5 37V36.25H16.5V37H17.5ZM17.5 34.75V34H16.5V34.75H17.5Z"
                fill="#CDCDCD"
              />
              <path
                d="M33.875 49L28.875 51.8868V46.1132L33.875 49ZM30.6406 49.5H29.5625V48.5H30.6406V49.5ZM29.5625 49.5C29.2324 49.5 28.9052 49.4872 28.5813 49.462L28.6588 48.465C28.9569 48.4882 29.2583 48.5 29.5625 48.5V49.5ZM26.6436 49.1572C26.0009 49.0035 25.3774 48.8001 24.7775 48.5513L25.1606 47.6276C25.7121 47.8563 26.2853 48.0433 26.8763 48.1847L26.6436 49.1572ZM23.0301 47.6593C22.4708 47.3158 21.9406 46.9296 21.4441 46.5051L22.0939 45.745C22.5509 46.1357 23.0388 46.4911 23.5534 46.8072L23.0301 47.6593ZM20.0574 45.1184C19.6329 44.6219 19.2467 44.0917 18.9032 43.5324L19.7553 43.0091C20.0714 43.5237 20.4268 44.0116 20.8175 44.4686L20.0574 45.1184ZM18.0112 41.785C17.7624 41.1851 17.559 40.5616 17.4053 39.9189L18.3778 39.6862C18.5192 40.2772 18.7062 40.8504 18.9349 41.4019L18.0112 41.785ZM17.1005 37.9812C17.0753 37.6573 17.0625 37.3301 17.0625 37H18.0625C18.0625 37.3042 18.0743 37.6056 18.0975 37.9037L17.1005 37.9812ZM17.0625 37V36.25H18.0625V37H17.0625ZM17.0625 34.75V34H18.0625V34.75H17.0625Z"
                fill="#CDCDCD"
              />
            </svg>
          </div>

          <WalletCard
            value={220}
            type={"red"}
            description={"Govt. GST on your deposit"}
          />
        </div>
        <div className="footer">
          <div className="footerLeft">
            <GstBenifitFooterCard />
            <svg
              className="leftArrow"
              width="26"
              height="6"
              viewBox="0 0 26 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3749 3L20.3749 0.113249V5.88675L25.3749 3ZM0.624878 3.5H1.65613V2.5H0.624878V3.5ZM3.71863 3.5H5.78113V2.5H3.71863V3.5ZM7.84363 3.5H9.90613V2.5H7.84363V3.5ZM11.9686 3.5H14.0311V2.5H11.9686V3.5ZM16.0936 3.5H18.1561V2.5H16.0936V3.5ZM20.2186 3.5H22.2811V2.5H20.2186V3.5Z"
                fill="#CDCDCD"
              />
            </svg>

            <svg
              className="dropArrow"
              width="6"
              height="22"
              viewBox="0 0 6 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 22L5.88675 17L0.113248 17L3 22ZM2.5 -2.18557e-08L2.5 0.916667L3.5 0.916667L3.5 2.18557e-08L2.5 -2.18557e-08ZM2.5 2.75L2.5 4.58333L3.5 4.58333L3.5 2.75L2.5 2.75ZM2.5 6.41667L2.5 8.25L3.5 8.25L3.5 6.41667L2.5 6.41667ZM2.5 10.0833L2.5 11.9167L3.5 11.9167L3.5 10.0833L2.5 10.0833ZM2.5 13.75L2.5 15.5833L3.5 15.5833L3.5 13.75L2.5 13.75ZM2.5 17.4167L2.5 19.25L3.5 19.25L3.5 17.4167L2.5 17.4167Z"
                fill="#CDCDCD"
              />
            </svg>
          </div>

          <div className="finalReward">
            <p className="reward1">You Get</p>
            <h3 className="reward2">₹1000</h3>
            <p className="reward3">in your wallet</p>
          </div>
        </div>

        {/* GSTfooter */}
      </div>
    </div>
  );
}

export default GstBenifitCard;
