import React from "react";
import ProfileSection from "./../components/ProfileSection";
import Avatar from "./../components/Avatar";
import FeaturedClasses from "./../components/FeaturedClasses";
import { useClassList } from "../util/requests";

function ProfilePage(props) {
  const [classList] = useClassList();
  return (
    <ProfileSection color={props.color} size={props.size}>
      <div className="columns">
        <div className="column is-three-fifths">
          <div className="card">
            <div className="card-content">
              <Avatar
                image={
                  "https://firebasestorage.googleapis.com/v0/b/dropin-257301.appspot.com/o/alina.jpg?alt=media&token=7bbe117e-ded7-4b7c-b87a-cc2f6b434acb"
                }
                size={"64"}
              />
              <h1 className="title">Amanda Fabis</h1>
              <p>10 of 72 credits remaining</p>
              <p>22 days left in current cycle</p>
              <button
                className="button is-info"
                style={{
                  margin: "0.5rem 0"
                }}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
        <div className="column is-two-fifths">
          <div className="card">
            <div className="card-content">
              <img alt="/mock-credits.jpg" src="/mock-credits.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "24px" }} className="card">
        <div className="card-content">
          <FeaturedClasses
            items={classList.slice(0, 4)}
            color="white"
            size="medium"
            title="Upcoming Classes:"
            subtitle=""
          />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <FeaturedClasses
            items={classList.slice(4, 8)}
            color="white"
            size="medium"
            title="Past Classes:"
            subtitle=""
          />
        </div>
      </div>
    </ProfileSection>
  );
}

export default ProfilePage;
