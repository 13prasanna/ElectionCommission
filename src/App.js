import React, { useState } from "react";
import "./App.css";

const PollingApp = () => {
  const [polls, setPolls] = useState([
    {
      id: 1,
      question: "Andhra Pradesh State Election Commission",
      options: [
        { id: 1, text: "TDP", count: 0 },
        { id: 2, text: "YSRCP", count: 0 },
        { id: 3, text: "Janasena", count: 0 },
        { id: 4, text: "Congress", count: 0 },
        { id: 5, text: "Others", count: 0 },
      ],
    },
    // Add more poll objects as needed
  ]);

  const handleVote = (pollId, optionId) => {
    const updatedPolls = polls.map((poll) => {
      if (poll.id === pollId) {
        const updatedOptions = poll.options.map((option) => {
          if (option.id === optionId) {
            return {
              ...option,
              count: option.count + 1,
            };
          }
          console.log(optionId);
          return option;
        });

        return {
          ...poll,
          options: updatedOptions,
        };
      }
      return poll;
    });

    setPolls(updatedPolls);
  };

  return (
    <div className="good">
      <div>
        <h1 className="bad">Election Commision</h1>
        {polls.map((poll) => (
          <div key={poll.id}>
            <h3 className="bad">{poll.question}</h3>
            <ul>
              {poll.options.map((option) => (
                <li key={option.id} className="polls">
                  <button
                    onClick={() => handleVote(poll.id, option.id)}
                    className="button"
                  >
                    {option.text}
                  </button>
                  <span className="score">{option.count}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollingApp;
