import React from "react";
import calenderImg from '../../assets/calendar.png'
import { toast } from "react-toastify";

const IssueCard = ({ ticket, handleTasks }) => {
const handleCardClick = () => {
    toast("In Progress");
    handleTasks(ticket);
}
  return (
    <div onClick={handleCardClick} className="card bg-base-100 card-xs shadow-sm p-4 cursor-pointer hover:-translate-y-1">
      <div className="flex justify-between mb-3">
        <h2 className="text-lg font-semibold">{ticket.title}</h2>
        {
            ticket.status === "Open" ? <button className="btn btn-sm bg-[#b9f8cf] rounded-full"><span className="w-4 h-4 bg-[#0B5E06] rounded-full"></span>Open</button> : <button className="btn btn-sm bg-[#F8F3B9] rounded-full"><span className="w-4 h-4 bg-[#FEBB0C] rounded-full"></span>In-Progress</button>
        }
      </div>
      <div>
        <p className="text-[#627382] text-xs">{ticket.description}</p>
      </div>
      <div className="text-sm flex justify-between mt-3 gap-4">
        <div className="flex flex-1">
            <p className="text-[#627382] mr-3">#{ticket.id}</p>
            <p className={`${ticket.priority === "High" ? "text-red-400": ticket.priority === 'Medium' ? "text-yellow-600" : "text-green-600"} `}>{ticket.priority.toUpperCase()} PRIORITY</p>
        </div>
        <div className="flex justify-between flex-1">
            <p className="text-[#627382]">{ticket.customer}</p>
            <p className="flex text-[#627382]"><img className="w-5 h-5 mr-1" src={calenderImg} alt="" /> {ticket.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
