import { useState, useEffect } from "react";
import { auth } from "../../../../utils/Firebase/Firebase";
import { getUser } from "../../../../utils/Firebase/Users/users.firebase";
import { Link } from "react-router-dom";
import { RecentWordCard } from "../../../Cards/Cards";
import "../../dashboard.css";

export default function RecentWords({recentWords}) {

  return (
    <div className="recent-words">
      <h2>
        Recent Words
        <Link to={"/dictionary"}>View All</Link>
      </h2>
      {recentWords.map((word, index) => (
        <RecentWordCard key={index} {...word} />
      ))}
    </div>
  )
}