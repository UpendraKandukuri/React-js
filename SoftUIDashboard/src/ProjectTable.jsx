import projectsdata from "./ProjectsData.json";
import alice from "./assets/face-1.svg";
import bob from "./assets/face-2.svg";
import smith from "./assets/face-3.svg";
import alexa from "./assets/face-4.svg";
import atlassian from "./assets/atlassian.svg";
import invision from "./assets/invision.svg";
import shopify from "./assets/shopify.svg";
import slack from "./assets/slack.svg";
import webdev from "./assets/webdev.svg";
import spotify from "./assets/spotify.svg";

const ProjectTable = ({ showMembers = true, showStatus = false }) => {
  const getProgressBarColor = (completion) => {
    const value = parseInt(completion);
    if (value === 100) return "bg-green-500";
    if (value >= 10) return "bg-blue-500";
  };

  const avatarMap = {
    alice: alice,
    bob: bob,
    smith: smith,
    alexa: alexa,
  };

  const companyImages = {
    webdev: webdev,
    slack: slack,
    shopify: shopify,
    invision: invision,
    atlassian: atlassian,
    spotify: spotify,
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Projects Table</h2>
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-b-gray-300">
            <th className="p-3 text-left">Company</th>
            {showMembers && <th className="p-3 text-left">Members</th>}
            <th className="p-3 text-left">Budget</th>
            <th className=" p-3 text-left">Completion</th>
            {showStatus && <th className="p-3 text-left">Status</th>}
          </tr>
        </thead>
        <tbody>
          {projectsdata.map((project) => (
            <tr key={project.id} className="border-b border-b-gray-300">
              <td className="p-3 flex gap-3 items-center">
                <img src={companyImages[project.image]} />
                <h1>{project.company}</h1>
              </td>
              {showMembers && (
                <td className=" p-3">
                  <div className="flex -space-x-2">
                    {project.members?.map((name, index) => {
                      const avathar = avatarMap[name];
                      return (
                        <img
                          key={index}
                          src={avathar}
                          alt="member"
                          className="w-8 h-8 rounded-full border-2 border-white shadow"
                        />
                      );
                    })}
                  </div>
                </td>
              )}
              <td className="p-3">{project.budget}</td>
              <td className="py-3">
                {project.completion === "cancel" ? (
                  <div>
                    <span className="text-red-500 font-medium">cancel</span>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                      <div className="h-2 w-full bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-sm font-medium">
                      {project.completion}
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                      <div
                        className={`h-2 rounded-full ${getProgressBarColor(
                          project.completion
                        )}`}
                        style={{ width: project.completion }}
                      ></div>
                    </div>
                  </div>
                )}
              </td>
              {showStatus && <td className=" p-3">{project.status}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
