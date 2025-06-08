export default function SkillsDisplay({ icon, title, description, skills }) {
  return (
    <div className="card p-8 h-full group hover:scale-105 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-text-secondary mb-6 leading-relaxed">{description}</p>

      {/* Skills list */}
      <div className="space-y-3">
        {skills.map((skillItem, index) => (
          <div
            key={skillItem.id}
            className="flex items-center gap-3 p-3 bg-background-hover/50 rounded-lg hover:bg-background-hover transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
            <span className="text-text-secondary font-medium">
              {skillItem.skill}
            </span>
          </div>
        ))}
      </div>

      {/* Proficiency indicator */}
      <div className="mt-6 pt-6 border-t border-accent/10">
        <div className="flex items-center justify-between text-xs text-text-muted mb-2">
          <span>Proficiency</span>
          <span>Advanced</span>
        </div>
        <div className="w-full bg-background-hover rounded-full h-2">
          <div
            className="bg-gradient-to-r from-accent to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: "85%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
