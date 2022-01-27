import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorAvatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45 PM"
          content="It was beautiful."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorAvatar={faker.image.avatar()}
          author="Alex"
          timeAgo="Today at 2:00 AM"
          content="Lol"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorAvatar={faker.image.avatar()}
          author="Jane"
          timeAgo="Yesterday at 5:00 PM"
          content="oh yeah! great job. "
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
