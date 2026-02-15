import { FC } from "react";
import { Github, Linkedin, Mail, User } from "lucide-react";
import Image from "next/image";

type Employee = {
  name: string;
  role: string;
  style: string;
  bio: string;
  avatar?: string;
  github?: string;
  linkedin?: string;
  email?: string;
};

const employees: Employee[] = [
  {
    name: "maybeizen",
    role: "Full-Stack Developer",
    style: "CEO",
    bio: "Fullstack Developer and Cybersecurity Analyst.",
    github: "https://github.com/maybeizen",
    linkedin: "https://linkedin.com/in/maybeizen",
    email: "me@maybeizen.space",
    avatar: "https://github.com/maybeizen.png",
  },
  {
    name: "Ago",
    role: "Full-Stack Developer",
    style: "CTO",
    bio: "Passionate about building scalable applications and solving complex problems.",
    github: "https://github.com/realago",
    linkedin: "https://linkedin.com/in/realago",
    email: "null@null.null",
    avatar: "https://github.com/realago.png",
  },
];

const Employees: FC = () => {
  return (
    <section id="team" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Meet the talented individuals who make Orvex Services great.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee, index) => (
            <EmployeeCard key={index} employee={employee} />
          ))}
        </div>

        {employees.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white/5 rounded-2xl border border-white/10 p-12 max-w-md mx-auto">
              <User size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">
                Team members will appear here. Add your team to showcase the
                people behind Orvex Services.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

type EmployeeCardProps = {
  employee: Employee;
};

const EmployeeCard: FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <div className="bg-zinc-950 border border-white/10 rounded-xl p-6">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center border border-white/10 overflow-hidden">
            {employee.avatar ? (
              <Image
                src={employee.avatar}
                alt={employee.name}
                width={96}
                height={96}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User size={40} className="text-white/60" />
            )}
          </div>
          {employee.style && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              <span className="bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                {employee.style}
              </span>
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{employee.name}</h3>

        <p className="text-violet-400 text-sm font-medium mb-3">
          {employee.role}
        </p>

        <p className="text-gray-400 text-sm leading-relaxed">{employee.bio}</p>
      </div>

      <div className="flex justify-center gap-3 pt-4 border-t border-white/10">
        {employee.github && (
          <a
            href={employee.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
            aria-label={`${employee.name}'s GitHub`}
          >
            <Github size={18} className="text-white" />
          </a>
        )}
        {employee.linkedin && (
          <a
            href={employee.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
            aria-label={`${employee.name}'s LinkedIn`}
          >
            <Linkedin size={18} className="text-white" />
          </a>
        )}
        {employee.email && (
          <a
            href={`mailto:${employee.email}`}
            className="bg-white/5 hover:bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
            aria-label={`Email ${employee.name}`}
          >
            <Mail size={18} className="text-white" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Employees;
