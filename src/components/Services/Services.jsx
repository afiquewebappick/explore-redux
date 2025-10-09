import IssueCard from "../IssueCard/IssueCard";
import TaskCard from "../TaskCard/TaskCard";
import ResolveCard from "../ResolveCard/ResolveCard";

const Services = ({
  handleTasks,
  tasks,
  resolves,
  handleResolves,
  tickets
}) => {
//   const issues = use(issuesPromise);
//   handleTickets(issues);
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col pb-20 gap-2">
        <div className="flex-3">
          <h1 className="text-xl font-bold mb-4">Customer Tickets</h1>
          {/* <IssueCard></IssueCard> */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-4">
            {tickets.map((ticket, idx) => (
              <IssueCard
                key={idx}
                ticket={ticket}
                handleTasks={handleTasks}
              ></IssueCard>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-bold">Task Status</h1>
          {tasks.length === 0 && (
            <p className="mt-3 pl-1 text-sm text-[#627382]">
              Select a ticket to add to Task Status
            </p>
          )}
          {tasks.length > 0 &&
            tasks.map((task, idx) => (
              <TaskCard key={idx} task={task} handleResolves={handleResolves}></TaskCard>
            ))}
          <h1 className="text-xl font-bold mt-7">Resolved Task</h1>
          {resolves.length === 0 && (
            <p className="mt-3 pl-1 text-sm text-[#627382]">
              No resolved tasks yet.
            </p>
          )}
          {resolves.length > 0 &&
            resolves.map((resolve, idx) => (
              <ResolveCard key={idx} resolve={resolve}></ResolveCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
