import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: '计算机科学与技术学士',
      school: '北京理工大学',
      period: '2016 - 2020',
      description: '主修软件工程、数据结构与算法、计算机网络等核心课程',
      achievements: [
        '连续三年获得学业奖学金',
        '参与国家级大学生创新创业训练计划项目',
        '获得ACM程序设计竞赛校赛二等奖'
      ],
      gpa: '3.8/4.0'
    },
    {
      id: 2,
      degree: '软件工程硕士',
      school: '清华大学',
      period: '2020 - 2022',
      description: '专注于分布式系统、机器学习、软件架构等前沿技术研究',
      achievements: [
        '发表SCI论文2篇',
        '获得研究生国家奖学金',
        '担任学院学生会技术部部长',
        '主导开发校园智能管理系统'
      ],
      gpa: '3.9/4.0'
    }
  ];

  const certifications = [
    {
      name: '阿里云认证架构师',
      issuer: '阿里云计算有限公司',
      date: '2023',
      icon: '☁️'
    },
    {
      name: '华为认证ICT专家',
      issuer: '华为技术有限公司',
      date: '2022',
      icon: '🎯'
    },
    {
      name: '腾讯云开发者认证',
      issuer: '腾讯云计算有限公司',
      date: '2022',
      icon: '🍃'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">教育背景</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            扎实的计算机科学理论基础，持续的学习和认证提升
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              学历教育
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-node"></div>
                  
                  <Card className="card-glow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-xl font-semibold gradient-text">{edu.degree}</h4>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="mr-1 h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-lg font-medium mb-2">{edu.school}</h5>
                        <p className="text-muted-foreground mb-3">{edu.description}</p>
                        <div className="text-sm">
                          <span className="font-medium">GPA: </span>
                          <span className="gradient-text font-semibold">{edu.gpa}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h6 className="font-medium mb-2 flex items-center">
                          <Award className="mr-2 h-4 w-4 text-accent" />
                          主要成就
                        </h6>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-accent mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Award className="mr-3 h-6 w-6 text-primary" />
              专业认证
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-glow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{cert.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                        <div className="text-xs text-accent font-medium">{cert.date}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <Card className="mt-8 card-glow">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">教育统计</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">学历层次</span>
                    <span className="font-medium">硕士研究生</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">专业排名</span>
                    <span className="gradient-text font-semibold">Top 10%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">获得认证</span>
                    <span className="font-medium">3项</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">发表论文</span>
                    <span className="font-medium">2篇</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;