import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const [animated, setAnimated] = useState(false);

  const skills = [
    { name: 'React/Next.js', level: 95, category: '前端框架' },
    { name: 'TypeScript', level: 90, category: '编程语言' },
    { name: 'Node.js', level: 88, category: '后端技术' },
    { name: 'Python', level: 85, category: '编程语言' },
    { name: 'PostgreSQL', level: 82, category: '数据库' },
    { name: 'Docker', level: 80, category: '运维工具' },
    { name: 'AWS', level: 75, category: '云服务' },
    { name: 'GraphQL', level: 78, category: 'API技术' },
  ];

  const categories = ['前端框架', '编程语言', '后端技术', '数据库', '运维工具', '云服务', 'API技术'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">专业技能</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            多年开发经验积累的技术栈，持续学习和实践最新技术
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills Progress Bars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">技能熟练度</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-bar"
                    style={{
                      width: animated ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Skills Radar Chart */}
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md card-glow">
              <CardHeader>
                <CardTitle className="text-center">技能分布</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((category) => {
                    const categorySkills = skills.filter(skill => skill.category === category);
                    const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length || 0;
                    
                    return (
                      <div key={category} className="text-center p-4 rounded-lg bg-secondary/30">
                        <div className="text-3xl font-bold gradient-text mb-2">
                          {Math.round(avgLevel)}%
                        </div>
                        <div className="text-sm text-muted-foreground">{category}</div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">技术栈</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'React', 'Vue.js', 'Angular', 'TypeScript',
              'Node.js', 'Express', 'NestJS', 'Python',
              'Django', 'FastAPI', 'PostgreSQL', 'MongoDB',
              'Redis', 'Docker', 'Kubernetes', 'AWS'
            ].map((tech) => (
              <Card key={tech} className="p-4 text-center hover:bg-secondary/30 transition-colors card-glow">
                <div className="font-medium">{tech}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;