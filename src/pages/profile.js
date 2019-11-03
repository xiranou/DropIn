import React from 'react';
import ProfileSection from './../components/ProfileSection';

function ProfilePage(props) {
  return (
    <ProfileSection color={props.color} size={props.size}>
      <div className="columns">
        <div className="column is-three-fifths">
          <div className="card">
            <div className="card-content">Apple</div>
          </div>
        </div>
        <div className="column is-two-fifths">
          <div className="card">
            <div className="card-content">Apple</div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '24px' }} className="card">
        <div className="card-content">Apple</div>
      </div>
      <div className="card">
        <div className="card-content">Apple</div>
      </div>
    </ProfileSection>
  );
}

export default ProfilePage;
